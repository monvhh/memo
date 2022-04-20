# Mobx

Actions->state->computed values->reactions

Event: reaction->Actions

## 开发流程

1. 定义state->make observable
2. 使用Action 更新state->Event、Fetch Data
3. 创建Derivations，以便自动对state变化响应
    来源于state，并不需要进一步交互，包括：
    1. UI
    2. 派生数据：
       1. computed values->pure function
       2. reactions 副作用->命令式编程和响应式编程间的桥梁
    3. post data to server
       1. 记日志
       2. 网络请求
       3. 增量更新React组件树，以更新dom
