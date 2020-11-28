// 基本类型 number string null undefined symbol boolean void空类型
// 对象类型 {} Class function []
const count:number = 123;

const teacherName : string = '1222';
// 对象类型

const teacher: {
    name: string,
    age: number
} = {
    name: 'tell',
    age: 12
}
const numbers: number[] = [1, 555]

/**
 * type annotation 类型注解，告诉ts变量是什么类型
 * type annotation 类型注解，告诉ts变量是什么类型
 * 如果 ts 能够自动分析变量类型，我们就什么也不需要做了
 *  如果 ts 无法分析变量类型的话，我们就不要使用类型注解
 */
let count1 : number;

 function getTotal(firstNum: number, secondNum: number) {
     return firstNum + secondNum;
 }
 const sumTotal = getTotal(1, 2);
// 使用结构操作时需要在后面写类型
function getTotal1({first, second}: {first: number, second: number}) {
    return first + second;
}

const func = (str: string): number => {
    return parseInt(str, 10);
}
const func1: (str: string) => number = (str) => {
    return parseInt(str, 10);
}

// 数组

const arr1: (number | string)[] = [1, '2'];
const str1: string[] = ['1222']
// type alias 类型别名
type User = {name: string; age: number};

const objArr: User[] = [{name: '1212', age: 32322}]

// 元组 tuple  固定每一个变量的类型，方便管理每一个变量类型
const teacherInfo: [string, string, number] = ['dell', 'male', 18]

/**
 *  class 类
 *  private protected public 访问类型
 *  public 允许在类内外部使用
 *  private 只能在类内使用  可以通过get set将属性暴露出去
 *  protected 允许在类内核继承的子类中使用
 */
class Person {
    name: string;
    private _id: number = 10;
    constructor(name: string) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    get id() {
        return this._id; //这样写可以讲过私有属性暴露出去 new Person().id === _id
    }

}

class Teacher extends Person {
    age: string
    constructor(name, age:string) {
        super(name); // 在子类拥有constructor 不许要调用super，调用父类的constructor
        this.age = age;
    }
    getTeacherName() {
        return 'teacher';
    }
}

const person = new Person();
const teacher1 = new Teacher();
console.log('teacher', teacher1.getName(), teacher1.getTeacherName())

/**
 * abstract 抽象类
 * 不可以调用，只能被继承
 */

abstract class Geom {

}

