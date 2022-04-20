# HTTP

## 缓存

+ 强缓存：本地有读本地。
  + expire 客户端时间与服务器时间，绝对时间
  + cache-control:max-age 相对时间
+ 协商缓存：先问服务器，是否有更新——先发请求，有更新则返回最新资源。
  + last-modified
  + etag->唯一标识，一致返回304，不一致返回资源，200
  + if-modified-since

强制缓存优先于协商缓存

## HTTP返回码

+ 3xx 重定向/未修改
  + 301 永久
  + 302 临时
  + 304 未修改

+ 4xx 请求出错
  + 404 not found
  + 403 forbidden

+ 5xx 服务器出错
  + 500 Server Internal Error
  + 502 gateway error

  +  

## 跨域

Access-Control-Allow-Origin
Credential:是否可发cookie——与服务器同源才会发
expose-headers
getResponseHeader

### 非简单请求

PUT DELETE contentType=application/json

正式通信之前，增加一次HTTP查询请求 Preflight:
Access-Control-Request-Method
Access-Control-Request-Headers
Access-Control-Max-Age
