// promise.all
function one1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('one1');
            resolve('one1');
        }, 5000)
    });
}

function one2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('one2');
            resolve('one2');
        }, 1000);
    })
}

function one3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('one3');
            resolve('one3');
        }, 2000);
    })
}

// 一个一个的执行
Promise.all([one1(), one2(), one3()]).then(res => {
    console.log('res', res);
});
