# Redux

## 数据流

Event->Dispatch(action)->Store调用reducer->更新state->渲染UI

action：纯对象
reducer：纯函数

## 开发流

1. 创建Store
    configureStore({reducer})

2. 创建Slice
    + reducer
    + action

    CreateSlice({})

3. Event-> dispatch(action)

## 异步

1. Thunk Middleware

    ```Javascript
    (dispatch,getState)=>{}
    ```

2. Reducer

    ```Javascript
    addAsync = params=>dispatch=>{}
    ```

3. 复杂reducer/action

    ```Javascript
    prepare(params){} //拼payload
    ```
