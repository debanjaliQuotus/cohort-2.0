// a. Create two numbers a = 10 and b = 3.
// Perform and log: a + b, a - b, a * b, a / b, a % b.

// a=10;
// b=3;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// b. Write: let x = 5; x = x + 3;
// Now rewrite the same using +=.
// Do the same for -=, *=, /=.

// let x=5;
// x=x+3;
// x+=3;
// x-=3;
// x*=3;
// x/=3;
// console.log(x);

// c. let count = 5;
// Use count++ and log value before and after.
// Repeat for count–.

// let count=5;
// console.log(count);
// count++;
// console.log(count);

// d. Compare two values: 5 == “5” and 5 === “5”.
// Observe difference.

// console.log('5'==5); //true
// console.log('5'===5); //false

// e. Check if 10 is greater than 5, less than 20, and equal to 10.

// console.log(10 > 5 && 10 < 20 && 10 === 10); //true

// f. Try logical AND and OR:
// true && false
// true || false
// !(true)

// console.log(10>5&&12<14 || 19>20); //true

// g. Predict the result of:
// (5 > 3 && 10 > 8),
// (5 > 3 || 10 < 8)

// console.log(5 > 3 && 10 > 8); //true
// console.log(5 > 3 || 10 < 8); //true

// Bitwise (light intro):
// Evaluate 5 & 1 and 5 | 1.
// Write result and your observation (no deep explanation needed now).

// console.log(5&1);

// console.log(5|1);

// a. Predict output of:
// console.log(a);
// var a = 10

// console.log(a); //undefined
// var a = 10

// b. Predict output of:
// console.log(b);
// let b = 10

// console.log(b); task1.js:80 Uncaught ReferenceError: Cannot access 'b' before initialization
// let b = 10

// c. Predict output of:
// test()
// function test() { console.log(“Hello”) }

// test() //Hello
// function test() { console.log("Hello") }

// d. Try writing a function expression before initialization and call it:
// hello()
// var hello = function() { console.log(“Hi”) }
// Write what happened and why

// hello(); Uncaught TypeError: hello is not a function
//     at task1.js:92:1
// var hello = function () {
//   console.log("Hi");
// };

