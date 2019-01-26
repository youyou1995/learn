//需要对于异步函数进行promise化，才可以确认可以异步return，不然会是同步不会等异步返回值。
async function timeOut() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('timeout');
            reject('set timeout');
        }, 3000)
    })
}

//赋值操作async，使用try-catch进行错误处理
async function time() {
    try {
        let result = await timeOut();
        console.log('result', result);
    } catch (e) {
        console.log('e', e);
    }
}

time();

//async，使用promise的catch进行错误处理
const errCatch = async () => {
    await timeOut().then(doc => {
        console.log('doc', doc);
    }).catch(err => {
        console.error('err', err);
    })
}

errCatch();
