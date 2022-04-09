# 函数柯里化

作用：

1. 参数复用
2. 提前返回
3. 延迟执行

```
const curry = (fn,...args) => {
    args.length >= fn.length ? fn(...args) : (..._args) => curry(fn,...args,..._args)
}
```

```
const curry = (fn,...args)=>{
    args.reduce()
}
```