Node使用v8作为runtime，但eventloop使用libuv
浏览器->浏览器引擎

chrome->libevent

异步event：

1. Micro-tasks 微任务
    在每个阶段之间执行。
   1. Process.nextTick
   2. Promise callback
2. Macro-tasks 宏任务
    四个主要任务：
   1. setTimeOut callbacks
   2. I/O polling and callbacks(file system,HTTP request)
   3. Immediate callbacks(setImmediate)
   4. close callbacks(file,server listener,process)

poll(incomming js代码解析、等待IO事件)->check(setImmediate)->close callback->timers->I/O callbacks
poll queue结束有两种情况：

1. 执行完毕
2. 超过node限制
