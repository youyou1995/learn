function parseTime(time, fmt) {

}

/**
 * 进行日期距离当前日期的显示
 * @param time 事件格式
 * @returns {string}
 */
function formatTime(time) {
    let date = new Date(time),
        now = new Date();
    let diff = (now.getTime() - date.getTime()) / 1000;
    if (diff < 60) { //小于1分钟
        return '刚刚';
    } else if (diff < 3600) { //小于1小时
        return `${Math.ceil(diff / 60)}分钟前`;
    } else if (diff < 3600 * 24) {
        return `${Math.ceil(diff / 3600)}小时前`;
    } else if (diff < 3600 * 24 * 2) {
        return '1天前';
    } else if (diff < 3600 * 24 * 7) {
        return '一周前';
    } else if (diff < 3600 * 24 * 31) {
        return '一月前';
    } else if (diff < 3600 * 24 * 365) {
        return `${date.getMonth() + 1}月${date.getDate()}日${date.getHours()}时${date.getMonth() + 1}分`;
    } else {
        return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    }
}
