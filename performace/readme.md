
# web 性能

TODO
<https://web.dev/rail/>
<https://alienzhou.com/projects/fe-performance-journey/#%E6%97%85%E9%80%94%E7%9A%84%E8%A1%8C%E7%A8%8B%E8%B7%AF%E7%BA%BF>

<https://github.com/creeperyang/blog/issues/1>

## 影响页面加载性能的因素

1. 网络速度和延迟
   3G、4G、5G、WIFI
2. 硬件性能
   CPU、GPU、内存
3. 软件性能
   浏览器引擎
4. 缓存
5. 解析
6. JS

## 缓存方案

1. HTTP Cache
2. Web Storage

## 离线方案

1. Application Cache
2. Hybrid App
3. Service Worker

## 客户端性能

### 工具

#### Chrome DevTools

 window.requestAnimationFrame() 方法。它可以将某些代码放到下一次重新渲染时执行。
 <https://web.dev/measure/>

<https://www.webpagetest.org/>

### CSS

### Assets

#### Images

1. 雪碧图

2.

### JS

#### Common

1. 文件合并、压缩——减少请求、及响应大小

2.

#### Service

#### worker

只能处理计算任务

#### 利用event loop 空闲时间：requestIdleCallback()

1. 不要改变dom——改变dom会导致浏览器重新计算？
2. 不要做时间敏感的任务，比如Promise的resolve、reject——因为无法预测
3. 用户在空闲时间交互则应中止空闲时间工作

TODO
<https://developer.mozilla.org/zh-CN/docs/Web/API/Background_Tasks_API>

## 服务端性能（以Node为主
