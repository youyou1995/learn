let a = 123;  // 静态类型 不可以改变类型
let arr = [];

interface Point {x: number, y: number}
function demo(data: Point) {
    return Math.sqrt(data.x**2 + data.y **2);
}
demo({x:1, y:2});
