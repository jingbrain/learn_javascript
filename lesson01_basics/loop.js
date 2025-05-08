// Loop in JavaScript

// For loop
for (let i = 0; i < 5; i++) {
    console.log("i =", i);
  }

// While loop
let count = 3;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}

// For-of loop
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// For-in loop
let person = { name: "Alice", age: 25, city: "New York" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Do-while loop
let number = 0;
do {
  console.log("Number:", number);
  number++;
} while (number < 3);

// Break statement
for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break; // Exit the loop when i is 5
    }
    console.log("i =", i);
}

// Continue statement
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      continue; // Skip even numbers
    }
    console.log("Odd number:", i);
}

// Nested loops
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      console.log("i =", i, "j =", j);
    }
}

// labelled loops
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === 1 && j === 1) {
        break outerLoop; // Exit both loops
      }
      console.log("Labeled loop: i =", i, "j =", j);
    }
}
  