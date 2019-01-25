async function timeout() {
    return 'timeout';
}

timeout().then(doc => {
    console.log('doc', doc)
});
console.log(timeout());//返回promise对象
console.log('async test');

/**
 * 进行await使用
 * @returns {Promise<never>}
 */
function testAwait(data) {
    if (data.s === 1) {
        return Promise.reject('testAwait');
    } else {
        return Promise.resolve('err')
    }
}

async function helloAsync() {
    await testAwait({s: 0});
}

helloAsync().then(doc => {
    console.log('helloAsync-doc', doc);
}).catch(err => {
    console.log('helloAsync-err', err);
})

/**
 * 进行promise和
 */

function testPromise(data) {
    console.log('data', data);
    if (data.s === 1) {
        return Promise.resolve('success1');
    } else {
        return Promise.reject('err1');
    }
}

async function testAsync() {
     await testPromise({s: 1});
}

testAsync().then(doc => {
    console.log('testAsync-doc', doc, this);
}).catch(err => {
    console.log('testAsync-err', err);
})
