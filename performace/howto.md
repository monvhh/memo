# 性能优化

## 1. 性能测试工具

1. google lighthouse
2. Chrome DevTools

3.

## 2. 性能指标

## 3. 常用优化方式

### 1. 客户端

#### 1. js

1. split code->trunk  按需加载
2. treeshaking、压缩包
3. lazy load
4. prefetch
5. 根据不同UA使用不同polyfill

6. service worker
7. 高计算->worker
8. 骨架屏

#### 2. assets

#### 3. dom、css

#### 4. 缓存

客户端缓存，比如浏览器
cookie、localstorage、indexDB

### 2. 传输过程

#### 1. DNS

1. DNS预热
2. 全球 DNS？

#### 2. CDN

1. 静态资源CDN

#### 3. HTTP

1. 缓存：协商缓存、强缓存

2. http2 多路复用？

### 3. 服务端

1. 缓存
