# 数组相关

## 数组拍平

1. 判断是否数组
   1. Array.isArray()
   2. instanceOf Array
   3. .constructor === Array
   4. .toString === '[object Array]'
2. 数组元素展开
   1. 扩展运算符+concat
   2. concat+apply
   3. toString+split

1.递归

```
function flatArray(arr){
    let arrResult =[]
    arr.forEach(item=>{
        if(Array.isArray(item)){
            arrResult = arrResult.concat(arguments.callee(item)); 
            //arrResult = arrResult.concat(flatArray(item)); 
        }else{
            arrResult.push(item);
        }
    })
    return arrResult
}
```

2.reduce

```
const flat = arr => {
    return arr.reduce((pre,cur) => {
        return pre.concat(Array.isArray(cur)?flat(cur):cur)
    },[])
}
```

3.栈

```
const flat = arr => {
    const result = [];
    const stack = [].concat(arr); //浅拷贝  = [...arr]
    while(stack.length !== 0){
        const val = stack.pop();//从栈顶读
        if(Array.isArray(val)){
            stack.push(...val);//推入栈顶
        }else{
            result.unshift(val);//在队列头加入，后来的在前面
        }
    }
    return result;
}
```

4.传参控制拉平层数

```
// reduce + 递归
function flat(arr, num = 1) {
  return num > 0
    ? arr.reduce(
        (pre, cur) =>
          pre.concat(Array.isArray(cur) ? flat(cur, num - 1) : cur),
        []
      )
    : arr.slice();
}
```

5.Generator

```
function* flat(arr, num) {
  if (num === undefined) num = 1;
  for (const item of arr) {
    if (Array.isArray(item) && num > 0) {   // num > 0
      yield* flat(item, num - 1);
    } else {
      yield item;
    }
  }
}
const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]
// 调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象。
// 也就是遍历器对象（Iterator Object）。所以我们要用一次扩展运算符得到结果
[...flat(arr, Infinity)]    
// [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5, "string", { name: "弹铁蛋同学" }];

```

进阶：
考虑数组空位

## 数组去重
<https://github.com/mqyqingfeng/Blog/issues/27>
