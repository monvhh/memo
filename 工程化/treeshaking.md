# treeshaking原理

## Dead code

1. 代码不会被执行，不可到达
2. 代码执行结果不会被用到
3. 代码只影响死变量，只写不读

### es6 module

1. import必须在模块顶层
2. import模块名是字符串常量
3. 依赖关系是确定的，与运行时状态无关
=>
通过import进行静态的依赖分析。

### AST?
