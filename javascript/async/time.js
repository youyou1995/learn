//需要对于异步函数进行promise化，才可以确认可以异步return，不然会是同步不会等异步返回值。
async function timeOut() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('timeout');
            reject('set timeout');
        }, 3000)
    })
}

async function time() {
    try {
        let result = await timeOut();
        console.log('result', result);
    } catch (e) {
        console.log('e', e);
    }
}

time();
