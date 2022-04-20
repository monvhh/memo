# Koa vs Express

## Koa

中间件，洋葱性——错误处理、日志记录方便。
async await 基于es6

ctx.body =
可多次赋值，所有中间件结束后响应。

## Express

线型，通过回调执行异步函数
callback地域，异常捕获困难

res.send()
立即执行，仅一次。
