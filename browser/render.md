# 浏览器渲染

## 浏览器渲染循序

重要节点：
DOM树创建->加载资源->样式计算->布局layout->绘制paint->合成compositing

1. 解析HTML，构建dom树
   bytes->characters->tokens->nodes->dom
   转换(conversion)->序列化(Tokenizing)->词法分析(lexing)->构建dom(dom construction)
2. 样式计算（style caculation），构建cssDom树
3. 布局 layout -> 创建布局树，布局计算
4. dividing into layers 生成图层树
5. 栅格化 raster
6. 合成显示 composite and display

## 重排 vs 重绘

+ 重排 reflow 计算大小、位置、改变布局（全局、局部：如果父是固定宽高）
+ 重绘 repaint 外形，未改变布局

减少重排：

1. 读写分离
2. 样式集中改变
3. 先隐藏，安排好子内容，再显示
4. absolute/fixed，脱离文档流
5. 优化动画，尽量交给GPU

6.
