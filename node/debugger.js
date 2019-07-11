// node 提供debugger调试功能，直接在代码中插入debugger，并且项目启动中添加inspect

const a = '555';
debugger;
let b = '114';
debugger;
console.log(a + b);

// cont 继续执行
/**
 * cont, c 继续执行
 * next, n 下一步
 * step, s 步进
 * out, o 步出
 * pause 暂停正在运行的代码
 * enter 继续执行上一条命令
 */
