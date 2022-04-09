# Promise 简易版

网上看到的解释都是从ES6设计者的思路开始，我自己理解是从调用者的角度开始反推（当然是在前人的基础上）。
简易版，只实现then。

## 先写个Promise例子

```
const promise = new Promise((resolve,reject)=>{
    // do something
    resolve(value)
})
promise.then((value)=>{
    // do something
    return newValue;
})
promise.then((value)=>{
    // do something
    return newValue;
})
```

### 1. 状态机

Promise 中有resolve、reject、error、all、race等等方法，或者说使用场景。显然是有不同状态的转换，状态机的部分先不管了，仔细理一理就好。

### 2. new Promise()

第一步：new Promise(callback)，callback中有resolve，reject参数，并且在callback function内部调用resolve()和reject();
因而Promise中有resolve方法和reject方法。

```
function Promise(){
    function resolve(params){

    }

    function reject(){

    }
}
```

第二步：实例化后的Promise有then属性，因而构造函数中有then方法并作为属性。

```
function Promise(){
    function resolve(params){

    }

    function reject(){

    }
    <-- 看这里 -->
    this.then = function ( callback:(value)=>{ return newValue;}){

    }
}
```

第三步：then()之后还能继续链式调用then方法。
因为Promise实例有then方法，then()返回一个Promise实例即可（this/一个新的Promise实例——最后采用新的Promise实例是考虑到状态管理）。

```
function Promise(){
    function resolve(params){

    }

    function reject(){

    }
    this.then = function ( callback:(value)=>{ return newValue;}){
        <-- 看这里 -->
        // do something
        return this;//or new Promise()
    }
}
```

第四步：因为then方法传进去的回调函数callback，是要在异步的resolve之后执行，并且第一个then的callback接受的参数是resolve(value)中传递的参数value，第二个then的callback接受的参数是前一个then返回的newValue.
因此：
1、promise实例调用then时resolve未必完成，因而then的callback不能马上执行，那先加入队列。

```
function Promise(){
    <-- 看这里 -->
    const callbacks=[];

    function resolve(params){

    }

    function reject(){

    }
    this.then = function ( callback:(value)=>{ return newValue;}){
        <-- 看这里 -->
        callbacks.push(callback)

        return this;//or new Promise()
    }
}
```

2、resolve调用后，将callbacks按顺序执行，并将value设置为callback执行后的返回值向下传递。

```
function Promise(){
    const callbacks=[];
    <-- 看这里 -->
    let value = null;

    function resolve(params){
        //do something，修改state等
        value = params;
        <-- 看这里 -->
        callbacks.forEach((callback)=>{
            let newValue = callback(value);
            value = newValue; //下个callback的入参为上一个返回值
        })
    }

    function reject(){

    }
    this.then = function ( callback:(value)=>{ return newValue;}){
        callbacks.push(callback)

        return this;//or new Promise()
    }
}
```

3、上面的resolve中callbacks依次执行时，有个问题。
通常resolve是异步调用的，比如

```
new Promise((resolve,reject)=>{
    http.get(url,function(res){
        resolve(res)
    })
}).then(callback)
```

这种情况下，resolve执行之前，then的入参callback已经加入到callbacks队列中了，因为then是同步。

当resolve在同步情况调用时，比如

```
new Promise((resolve,reject)=>{
    resolve(1);
}).then(callback)
```

resolve要先于then执行，callbacks队列还没来得及收集。
为了预防这种情况，且保持一致，将callbacks队列依次调用放在异步执行，修改如下：

```
function Promise(){
    this.callbacks=[];
    let value = null;
    const _self = this

    function resolve(params){
        //do something，修改state等
        value = params;
        <-- 看这里 -->
        setTimeout(()=>{
            _self.callbacks.forEach((callback)=>{
                let newValue = callback(value);
                value = newValue; //下个callback的入参为上一个返回值
            });
        },0);
    }

    function reject(){

    }
    this.then = function ( callback:(value)=>{ return newValue;}){
        callbacks.push(callback)

        return this;//or new Promise()
    }
}
```

OK，暂时就这样，剩下的主要是状态管理和一些细节了。
