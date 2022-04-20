# 设计模式

## 1.创建型

类：

1. 工厂方法 Factory

对象：
2. 抽象工厂 Abstract Factory
3. 生成器  Builder
4. 原型 Prototype
5. 单例 Singleton

## 2.结构型

类：

1. 适配器 Adapter

对象：
2. 桥接 Bridge
3. 组合 Composite
4. 装饰 Decorator
5. 外观 Facade
6. 享元 Flyweight
7. 代理 Proxy

## 3.行为模式

类：

1. 模板方法 Template Method

对象：
2. 责任链 Chain of Responsibility
3. 命令 Command
4. 迭代器 Iterator
5. 中介者 Mediator
6. 备忘录 Memento
7. 观察者 Observer
8. 状态 State
9.  策略 Stratedy
10. 访问者 Visitor

## Javascript 设计模式

Module 闭包，私有变量、方法
返回对外接口/方法/对象->公有

### Singleton 单例

闭包返回 getInstance

```Javascript
function(){
    return {
        getInstance(){
            if(!instance){
                instance = initInstance()
            }
            return instance;
        }
    }
}
```

### Observer 观察者模式

1. Subject 目标
2. Observer 观察者
3. Concrete Subject 具体目标
4. Concret Observer

Subject->(Fire Event)->Observer
Observer->(Subscribe)=>Subject

#### 发布订阅模式 Publish/Observer

松散耦合

Publisher->(Publish topic/event)->Topic/Event Channel(通道)
Subscriber->(Fire Event)=>Topic/Event Channel
Subscriber->(Subcribe)=>Topic/Event Channel

### 中介者 Mediator->行为

Observer 模式的共享目标
多子系统间交互/Subscribe & publish

### Prototype->创建

实现继承，性能提升

### Command 命令->行为

解耦、分离职责

```Javascript
.excute(不同功能)
```

方法调用、请求、操作->封装->单一对象

### Facade 外观->结构型

Jquery->封装、黑盒->暴露易用AP

### Factory 工厂

根据不同环境生成对象不同实例，并共享

### Abstract Factory

只规定契约，不实现
由具体工厂实现/注册，然后实例化对象

### Mixin模式

被一个/组子类继承功能的类，目的：函数复用，扩展功能。
原对象.prototype 上extend mixin对象。

### Decorator->结构式

扩展功能->重写对象的方法。

伪经典Decorator：

+ 接口：使用接口概念实现Decorator
+ 抽象Decorator：扩展功能->superclass，不污染原原型

### Flyweight 模式

优化重复，数据共享效率低？

## 前端架构

### MVC

Model->View->Controller
Jquery

单向，
缺点：

1. view与Model不对应
2. Contorller与Model边界不清
3. 操作dom有页面性能问题

适合大型项目？？

### MVP

Model->View->Presenter/Controller

#### MVVM

Model View ViewModel
