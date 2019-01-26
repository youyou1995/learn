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
        })
}
