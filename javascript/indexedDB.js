let request, db;
export default {
    /**
     * indexedDB连接
     * @param name 数据库名称
     */
    connect(name, table) {
        request = indexedDB.open(name, 1);
        request.addEventListener('success', e => {
            return Promise.resolve('indexedDB 连接成功!');
        })
        request.addEventListener('error', e => {
            return Promise.reject('indexedDB 连接失败!');
        }
        //创建仓库
        request.addEventListener('upgradeneeded', e => {
            db = e.target.result;
            let store = db.createObjectStore(table, {keyPath: 'keyword', autoIncrement: false})
        })
    },
    handleAdd(name, data) {
        const tx = db.transaction(name, 'readwrite');
        const store = tx.objectStore(name);
        const add = store.add(data);
        add.addEventListener('success', e => {
            return Promise.resolve('存储成功');
        })
        add.addEventListener('error', e => {
            return Promise.resolve('存储失败');
        })
    },
    handleUpdate(name, data) {
        const tx = db.transaction(name, 'readwrite');
        const store = tx.objectStore(name);
        const put = store.put(data);
        put.addEventListener('success', e => {
            console.log('更新成功');
            return Promise.resolve('存储成功');
        })
        put.addEventListener('error', e => {
            return Promise.reject('存储失败');
        })
    },
    handleDelete(name,key){
        const tx = db.transaction(name,'readwrite');
        const store = tx.objectStore(name);
        const del = store.delete(key);
        del.addEventListener('success',e=>{

        })
    }
}
