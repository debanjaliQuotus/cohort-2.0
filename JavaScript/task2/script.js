//Level 1 – Pure Beginner Practice

// 1- Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

// let age = prompt("Enter Your age");

// if (age === null) {
//   console.error("Please enter your age");
// } else {
//   if (age.trim() === "") {
//     console.error("Pleae enter something");
//   } else {
//     if (isNaN(age)) {
//       console.error("Please enter a number");
//     } else {
//       if (age <= 0) {
//         console.error("Please enter a number that starts from 1");
//       } else {
//         age = Number(age);
//         if (age >= 18 && age < 100) {
//           console.log("You can vote");
//         } else {
//           console.log("You can't vote");
//         }
//       }
//     }
//   }
// }

// SHORTER

// let input = prompt("Enter your age ");
// if (input === null) console.error("Please enter something");

// let age = input.trim();
// age=Number(age)

// if (!age) console.error("Please enter a valid number");
// else if (age <= 0)
//   console.error("Please enter a positive number starts from 1");
// else console.log(age >= 18 && age < 100 ? "You can vote" : "You can't vote");

//  Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

// for (let i = 1; i < 11; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }

// for (let i = 1; i < 11; i++) {
//   for (let j = 1; j < 11; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.

// let count = 0;

// for (let i = 1; i < 16; i++) {
//   if (i > 8) count++;
// }

// console.log(count);

// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

// let password="Debanjali";
// let user_pass=prompt("Enter your password");

// if(password===user_pass) console.log("You are logged in ");

// Level 2 – Slightly Tougher but Logical
// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// let correctPass = "Debanjali";
// let attempt = 1;
// let pass = prompt("Enter password");

// while (attempt < 3 && pass !== correctPass) {
//   pass = prompt("Try again ");
//   attempt++;
// }

// if(pass===correctPass){
//     console.log("Stop");
// }
// else{
//     console.log("Account Locked");

// }

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes"

// let counter = 0;
// let word = prompt("Enter a word");

// while (word !== "stop") {
//   if (word === "yes") {
//     counter++;
//   }
//   word = prompt("Enter a word");
// }

// console.log(`You typed the ${counter} no. of Yes`);

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// for (let i = 1; i < 51; i++) {
//   if(i%7===0){
//     console.log(i);

//   }
// }

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// sum = 0;

// for (let i = 0; i < 31; i++) {
//   if (i % 2 !== 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// let num = +prompt("Enter a number");

// while (num % 2 !== 0) {
//   num = +prompt("Enter again");
// }

// console.log("You stopped");

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// let user1 = +prompt("Enter 1st number");
// let user2 = +prompt("Enter last number");

// if (user1 > user2) {
//   console.log("You can't do this");
// } else {
//   for (let i = (user1)+1; i < user2; i++) {
//     console.log(i);
//   }
// }

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// let count = 0;
// for (let i = 1; i < 21; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//     count++;
//   }
//   if (count === 3) break;
// }

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// let positiveCount = 0;
// let attempt = 1;

// let num = +prompt("Enter your number");

// while (attempt <= 5) {
//   if (num > 0) {
//     positiveCount++;
//   }
//   num = +prompt("Enter again");
//   attempt++;
// }

// console.log(positiveCount);

//another way
// let positiveCount = 0;
// for (let i = 0; i <=5; i++) {
//   let num=+prompt("Enter a number")
//   if(num>0){
//     positiveCount++
//   }
// }
// console.log(positiveCount);

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance

let withdraw = 0;
let balance = 1000;

while (withdraw < 3) {
  let price = +prompt("Enter your price");

  if (balance >= price) {
    balance = balance - price;

    withdraw++;
  } else {
    console.log("you have not sufficient balance", balance);
  }
}
console.log(" balance:", balance);
