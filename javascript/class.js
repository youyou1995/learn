// 创建一个Dog类
function Dog() {
  this.age = 10;
}
// 给Dog添加say函数
Dog.prototype.say = function () {
  console.log('say-prototype')
}
// new Dog
let dog = new Dog();
// 创建子类
function Child() {
  this.name = '123';
}

Child.prototype = new Dog(); // 将child类的原型指向Dog类,这样就是继承了Dog的属性
// Child.prototype.constructor = Child; // 重置constructor

let child = new Child();
console.log('child', child.age, child.name, dog.age)
