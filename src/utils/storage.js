import WebStorageCache from 'web-storage-cache'

const storage = new WebStorageCache()

/*
    储存数据
*/
export function setStorage(key, value) {
  storage.set(key, value)
}

/*
    获取数据
*/
export function getStorage(key) {
  return storage.get(key)
}

/*
    删除数据
*/

export function deleteStorage(key) {
  storage.delete(key)
}

// 还有关于过期时间的设置  ...
