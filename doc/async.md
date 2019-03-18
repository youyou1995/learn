### async await简介
### 注意
1. 使用async就没必要进行相关的异步嵌套，这样反而增加函数的阅读难度，直接将异步编程同步进行处理即可。
```javascript
function timeOut() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('test');
        }, 3000);
    });
}
//下面这种写法是非常错误的
async function test() {
    return new Promise((resolve, reject) => {
        let data = await timeOut();
        resolve(data);
    })
}
//可以修改为下面这种实现，async本身就会返回`promise`对象
async function test() {
    let data = await timeOut();
    return data;
}
test().then(data => {
    console.log('data', data);
});
```
