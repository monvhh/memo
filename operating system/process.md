# 进程 线程

## 进程

程序的实体
操作系统资源分配和调度的基本单位，操作系统的容器
资源分配的最小单位
线程的容器

## 线程

操作系统运算调度的最小单位
程序执行的最小单位
单一顺序控制流

### 进程间通信

Linux

1. pipe 管道 半双工
2. 有名管道FIFO
3. 信号Signal
4. 消息队列Message 内核中的消息链表？？
5. 共享内存
6. 信号量
7. 套接字Socket TCP/IP网络通信的基本单元，不同主机双向通信

## 协程coroutine

协程线程/函数
Generater 半协程
ES6对协程的

## JS异步

1. callback
2. 事件监听
3. 发布/订阅
4. Promise对象
5. Generrater
6. async/await
