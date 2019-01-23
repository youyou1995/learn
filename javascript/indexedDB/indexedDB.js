let db;
export default {
    /**
     * indexedDB连接
     * @param name 数据库名称
     */
    connect(name, table) {
        let request = indexedDB.open(name, 1);
        request.addEventListener('success', e => {
            return Promise.resolve('indexedDB 连接成功!');
        })
        request.addEventListener('error', e => {
            return Promise.reject('indexedDB 连接失败!');
        })
        //创建仓库 第一次打开该数据库/数据库版本改变
        request.addEventListener('upgradeneeded', e => {
            db = e.target.result;
            if (!db.objectStoreNames.contains('person')) {
                let store = db.createObjectStore(table, {keyPath: 'keyword', autoIncrement: false});
            }
        })
    },
    /**
     * 进行数据的新增
     * @param {*} name 数据库名称
     * @param {*} data 新增的数据
     */
    handleAdd(name, data) {
        //可以进行链式调用
        const tx = db.transaction(name, 'readwrite');
        const store = tx.objectStore(name);
        const add = store.add(data);
        add.addEventListener('success', e => {
            return Promise.resolve({s: 0});
        })
        add.addEventListener('error', e => {
            return Promise.resolve({s: -1});
        })
    },
    /**
     * 进行数据的更新
     * @param {*} name
     * @param {*} data
     */
    handleUpdate(name, data) {
        const tx = db.transaction(name, 'readwrite');
        const store = tx.objectStore(name);
        const put = store.put(data);
        put.addEventListener('success', e => {
            console.log('更新成功');
            return Promise.resolve({s: 0});
        })
        put.addEventListener('error', e => {
            return Promise.reject({s: -1});
        })
    },
    /**
     * 获取数据
     * @param {*} name 仓库名称
     * @param {*} key 主键
     */
    handleGet(name, key) {
        const get = db.transaction(name, 'readwrite')
            .objectStore(name)
            .get(key);
        get.addEventListener('success', e => {
            if (get.result) {
                return Promise.resolve({s: 0, data: result})
            }
        })
        get.addEventListener('error', e => {
            return Promise.reject({s: -1});
        })
    },
    /**
     * 进行数据的删除操作
     * @param name 数据表名称
     * @param key 主键名称
     */
    handleDelete(name, key) {
        const tx = db.transaction(name, 'readwrite');
        const store = tx.objectStore(name);
        const del = store.delete(key);
        del.addEventListener('success', e => {
            return Promise.resolve({s: 0});
        })
        del.addEventListener('error', e => {
            return Promise.reject({s: -1})
        })
    },
    /**
     * 进行数据仓库(数据表)的删除
     * @param name 数据仓库名称
     */
    handleDeleteDatabase(name) {
        const request = window.indexedDB.deleteDatabase(name);
        request.addEventListener('success', e => {
            return Promise.resolve({s: 0});
        })
        request.addEventListener('error', e => {
            return Promise.reject({s: -1});
        })
    },
    /**
     * 获取数据仓库中所有数据
     * @param name 数据仓库名称
     * @param key 主键
     * @return <sucess> []
     * @return <error>
     */
    handleGetBothData(name) {
        const getBoth = db.transaction(name).objectStore(name).openCursor();
        let results = [];
        getBoth.addEventListener('success', e => {
            let cursor = e.target.result;
            if (cursor) {
                results.push(cursor.value);
                result.continue();
            } else {
                return Promise.resolve({s: -1, data: results});
            }
        })
        getBoth.addEventListener('error', e => {
            return Promise.reject({s: -1});
        })
    },
    handleDeleteBothData(name) {
        const deleteBoth = db.transaction(name).objectStore(name).openCursor();
        deleteBoth.addEventListener('success', e => {
            let cursor = e.target.result;
            if (cursor) {
                cursor.delete();
                cursor.continue();
            } else {
                return Promise.resolv({s: 0});
            }
        })
        deleteBoth.addEventListener('error', e => {
            return Promise.reject({s: -1})
        })
    }
}
