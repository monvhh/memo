# React

## 性能优化

1. 减少不必要的render
   1. Pure component
   2. ShouldComponentUpdate
   3. React.memo

## React事件与Dom事件的区别

React事件是合成事件，在document上监听，然后分发
React自定义的事件对象，符合W3C规范，解决兼容问题
不能通过return false阻止默认行为 -> e.preventDefault()

## React生命周期

与hooks对应

UseState->Constructor

useEffect->ComponentDidMount、ComponentDidUpdate、ComponentWillUnmount
渲染后：

+ 改变dom
+ 订阅
+ 设置定时器
+ 记录日志
+ 异步请求

useMemo->ShouldComponentUpdate
依赖改变时计算/渲染期间执行

## React Hooks

加强函数组件，函数式编程
组件尽可能纯函数，外部功能和副作用用钩子

Hooks 在函数组件中，钩入React State及生命周期等特性的函数
Function最外层

代码复用，多组件重复逻辑抽象出来。

## 组件间通讯

1. 状态提升->父组件
2. Context->组件间共享，不必通过props在组件树逐层传递
   1. theme
   2. locale
   3. 缓存数据
3. refs转发，useRef->操作、获取React子组件，dom
4. useReducer->dispatch，将dispatch作为context的内容传递，通过dispatch组件通信
