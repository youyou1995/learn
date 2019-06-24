/**
 * create 2019.06.24 from youyou
 * 用来编写一些buffer处理的方法
 */

// 将数据写入buffer
let bufFrom = Buffer.from([0x11, 0x22]); // 必须是数组格式，当前存储的是16进制的
let bufFrom1 = Buffer.from(bufFrom); // 可以进行buffer的深拷贝

// 检测buffer类型
let isBuf = Buffer.isBuffer(bufFrom); // true/false

// 检测是否支持该字符编码名称
let isEncoding = Buffer.isEncoding('hex'); // true/false

//返回buffer的迭代器
for (let buf of bufFrom.entries()) {
    console.log(buf); // [0,11] [1,22]
    // 第一个是索引值，第二个是十进制的数据并且是一个字节一个字节进行循环遍历的
}

// 判断两个buf是否相同
let isEquals = bufFrom.equals(bufFrom1); // true/false

// 单个字节写入，填充
let bufFill = Buffer.alloc(2).fill('1234').toString(); //12
// 总共创建两个字节的长度，后面的字符串按照一个长度的顺序进行填充，超出长度的进行抛弃

//

