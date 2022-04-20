# socket

+ 即时通讯
+ 服务端push数据
+ 二进制数据

## websocket

1. 建立在TCP协议智商
2. 与HTTP兼容（80、443）
3. 文本 & 二进制数据
4. 没有同源限制
5. ws://  wss://

客户端：

```Javascript
const ws = new websocket('ws://')
ws.onopen=()=>{}
ws.onmessage=()=>{}
ws.onclose=()=>{}
```

服务端：Node

Socket.IO（服务端、客户端都可以）
实时、双向、基于事件的通信
