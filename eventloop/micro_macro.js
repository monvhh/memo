// 浏览器和node执行结果不一样
Promise.resolve().then(() => console.log('promise1 resolved'));
Promise.resolve().then(() => console.log('promise2 resolved'));
setTimeout(() => {
    console.log('set timeout3')
    Promise.resolve().then(() => console.log('inner promise3 resolved'));
}, 0);
setTimeout(() => console.log('set timeout1'), 0);
setTimeout(() => console.log('set timeout2'), 0);
Promise.resolve().then(() => console.log('promise4 resolved'));
Promise.resolve().then(() => {
    console.log('promise5 resolved')
    Promise.resolve().then(() => console.log('inner promise6 resolved'));
});
Promise.resolve().then(() => console.log('promise7 resolved'));