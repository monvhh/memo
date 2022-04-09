# Webpack

## Plugin 和 loader的区别

+ loader 加载转换资源，可串行使用

## module、chunk、bundle在webpack中代表什么

+ chunk -> code splitting 的产物

## compile、compilation

=>继承自Tapable

compiler对象->完整webpack环境配置。
启动webpack时一次性创立，配置好可操作性的设置，options、loader、plugin

compilation对象->一次资源版本构建。
每检测到文件变化，就会创建一个compilation

## Tapable

webpack 插件机制，依赖于 一个核心的库，Tapable

Tapale是一个类似于nodejs的EventEmitter的库，主要控制钩子函数的发布和订阅。
hook：同步、异步（异步并行、异步串行）

## compile.run之后，关键webpack事件节点

1. compile 开始编辑
2. make 从入口点分析模块及依赖，创建模块对象
3. build-module 构建模块
4. after-compile 完成构建
5. seal 封装构建结果
6. emit 把各chunk输出到结果文件
7. after-emit 完成输出
