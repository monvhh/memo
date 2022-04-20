# Node

## 全局变量

global不等于window，不能跨文件，module变量访问

process 当前运行环境的信息
.stdin
.stout
.stderr
Node应用与控制台之间的通信
——的IO函数继承自EventEmiiter

Buffer 缓冲器->存储于V8堆之外的原始二进制数据，一旦分配空间，不能再改。
读写文件的默认类型，除非指定编码。

EventEmitter Node异步事件处理

## Node异常捕获

try catch 无法捕获异步回调

process.on('uncaughtException',callback)

domain.on('error',)
.enter()
.exit()
.bind()
intercept 拦截异步

## 单线程？

大多数情况，Node是单线程

时间循环->单线程
后台->多个线程在工作，比如 文件系统C++、libuv->工作线程池
线程数与操作系统相关
