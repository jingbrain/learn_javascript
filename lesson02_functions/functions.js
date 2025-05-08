//普通函数定义
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Alice")); // Hello, Alice

//函数表达式（Function Expression）
const square = function (x) {
  return x * x;
};
console.log(square(4)); // 16

//箭头函数（Arrow Function）
const add = (a, b) => a + b;
console.log(add(3, 5)); // 8

//参数与默认值
function multiply(a, b = 2) {
  return a * b;
}
console.log(multiply(5)); // 10，因为 b 默认为 2

//嵌套函数访问外部变量
function outer() {
  let outerVar = "outside";
  function inner() {
    console.log("Inner sees:", outerVar);
  }
  inner();
}
outer(); // Inner sees: outside

//全局作用域 vs 局部作用域
let globalVar = "I am global";
function testScope() {
  let localVar = "I am local";
  console.log(globalVar); // ✅
  console.log(localVar);  // ✅
}
testScope();
console.log(globalVar); // ✅
//console.log(localVar); // ❌ 报错：localVar is not defined

//闭包
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter1 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3
// 重新创建一个新的闭包
const counter2 = makeCounter();
console.log(counter2()); // 1
console.log(counter2()); // 2