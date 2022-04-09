# hook

useEffect 组件渲染后执行，通常数据保存、记录日志等不需要渲染的工作。
返回的清除函数，在组件卸载前执行。
如果组件多次渲染，则在执行下一个effect前，清除上一个effect。

useLayoutEffect 在浏览器绘制之前，执行并更新dom
