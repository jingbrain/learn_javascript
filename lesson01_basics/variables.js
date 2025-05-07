// 变量声明和赋值
// 在 JavaScript 中，可以使用 var、let 和 const 来声明变量。
// 1. var：可以在函数内或全局范围内声明变量，允许重复声明。
// 2. let：块级作用域声明变量，不允许重复声明。
// 3. const：块级作用域声明常量，必须在声明时初始化，不能重新赋值。
// 变量声明
const obj = {
  name: "John",
  age: 30,};
obj.name = "Jane";
obj.age = 25;
obj.city = "New York";
obj.country = "USA";
console.log(obj); 


//-----数据类型-----
// JavaScript 中有 7 种基本数据类型：
// 1. Number：数字类型，包括整数和浮点数。
// 2. String：字符串类型，用于表示文本。
// 3. Boolean：布尔类型，只有两个值：true 和 false。
// 4. Undefined：表示变量未定义。
// 5. Null：表示空值或无值。
// 6. Symbol：表示唯一的值，通常用于对象属性的唯一标识。
// 7. BigInt：表示大整数，超过 Number 的安全范围。
// 另外，JavaScript 中还有一种复杂数据类型：
// 1. Object：对象类型，用于存储键值对的集合。
// 2. 数组：数组也是对象的一种特殊形式，用于存储有序的值的集合。

// 基本数据类型
let str = "Hello"; // 字符串
let num = 123; // 数字
let bool = true; // 布尔值
let empty = null; // 空值
let notDefined; // undefined

// 对象
let person = {
  name: "Alice",
  age: 25,
};

// 数组
let fruits = ["apple", "banana", "cherry"];

//测试数据类型：
console.log(typeof str);      // string
console.log(typeof num);      // number
console.log(typeof bool);     // boolean
console.log(typeof empty);    // object（这是历史遗留问题）
console.log(typeof notDefined); // undefined
