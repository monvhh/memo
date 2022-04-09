# 进程间通信

1. stdin/stout 传输json -> 拿到子进程handle的场景
2. Node原生IPC支持-> Process.on('message')
3. Sockets->跨环境/网络性能损耗
4. Message Queue，消息队列，通过中间层
5. Redis->自带发布订阅模式
