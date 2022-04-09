# DeepClone

1. 考虑数组、对象、function等类型->判断类型->typeof、toString->区分可以遍历的类型和不可遍历的类型
   1. 可遍历：Object Array Map Set->克隆方式不同，具体情况具体处理
   2. 不可遍历：Bool Number String Date Error Symbol Function->克隆方式不同，具体情况具体处理
2. 考虑循环引用->Map
3. Map->WeakMap 弱引用，垃圾回收机制自动回收
4. 优化循环方式
   1. while最优

```
function forEach(array, iteratee) {
    let index = -1;
    const length = array.length;
    while (++index < length) {
        iteratee(array[index], index);
    }
    return array;
}

function clone(target, map = new WeakMap()) {
    if (typeof target === 'object') {
        const isArray = Array.isArray(target);
        let cloneTarget = isArray ? [] : {};

        if (map.get(target)) {
            return target;
        }
        map.set(target, cloneTarget);

        const keys = isArray ? undefined : Object.keys(target);
        forEach(keys || target, (value, key) => {
            if (keys) {
                key = value; //Object的keys中的value才是Object的key
            }
            cloneTarget[key] = clone2(target[key], map);
        });

        return cloneTarget;
    } else {
        return target;
    }
}
```
