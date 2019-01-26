## 规范整理
### html规范
#### 元素及标签
对于标签要写好开闭标签，对于块级标签要写在两行
```html
<div>
    <ul>
        <li></li>
    </ul>
</div>
```
#### 单行注释
一般用于简单的描述，如某些状态描述、属性描述等。
注释内容前后各一个空格字符，注释要位于注释代码的上方，单独占一行
```html
<!-- Comment Text -->
<div>...</div>
```
#### 模块注释
用于描述模块的名称以及功能和模块的开始以及结束的位置。
注释内容前后各一个空格字符，`<!-- S Comment Text -->` 表示模块开始，`<!-- E Comment Text -->` 表示模块结束，模块与模块之间相隔一行
```html
<!-- S Comment Text A -->	
<div class="mod_a">
    ...
</div>
<!-- E Comment Text A -->
	
<!-- S Comment Text B -->	
<div class="mod_b">
    ...
</div>
<!-- E Comment Text B -->
```
#### javascript规范
- 变量声明
尽量使用`let`,`const`进行变量的声明，少用或者不用`var`。对于数组或者对象等复杂变量尽量使用`const`进行声明。
```javascript
let a =1;
let b = 2;
const c = 11;
const arr = [1,2,3];
const obj = {a:1,b:2};
```
- 尽量多用`模板字符串`,少用`+`
```javascript
let a = 'txt';
let a = `he is ${a} type`;
```
