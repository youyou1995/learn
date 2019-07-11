/**
 * 用来记录async的使用方法
 *
 *
 *
 *
 *
 * */

/**
 * 用来处理异步链式调用错误处理问题，返回格式[err,data],每次只返回一个参数。
 * @param promise
 * @param errorExt
 * @return {Promise<T | any[]>}
 */
const awaitWrap = (promise, errorExt) => {
    return promise
        .then(data => {
            return [null, data];
        })
        .catch(err => {
            if (errorExt) {
                Object.assign(err, errorExt);
            }
            return [err, null];
        });
};

// 异步操作方式

function time1(item, callback) {
    setTimeout(() => {
        console.log('time1', item, new Date());
        if (typeof callback === 'function') {
            callback(item);
        }
    }, 1000);
}

function final(name) {
    console.log('final', name);
}

const items = ['item1', 'item2', 'item3', 'item4'];


//
/*
* 同一个函数的并行实现异步操作
* 基本同一时间执行完成，但是会消耗大量的性能
*/
let result = [];

function parallel() {
    items.forEach(item => {
        time1(item, doc => {
            result.push(doc);
            if (result.length === items.length) {
                // 在time1都执行完成后执行final函数
                final('parallel');
            }
        });
    });
}

parallel();

//

/**
 * 并行和串行并行
 * 会分布执行完成，即提高效率也降低了性能的损耗
 */
const limit = 2; // 最大执行数
let running = 0; //当前运行索引

function launcher() {
    while (running < limit && items.length > 0) {
        time1(items.shift(), doc => {
            result.push(doc);
            running--;
            if (items.length > 0) {
                launcher();
            } else if (running === 0) {
                final('launcher');
            }
        });
        running++;
    }
}

launcher();
