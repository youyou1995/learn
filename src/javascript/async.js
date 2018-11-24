async function timeout() {
    return 'timeout';
}

timeout().then(doc => {
    console.log('doc', doc)
});
console.log(timeout());//返回promise对象
console.log('async test');