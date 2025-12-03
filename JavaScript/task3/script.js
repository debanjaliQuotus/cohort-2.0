// 1- Write a higher order function `runTwice(fn)` that takes another function and execute it two times.

// function runTwice(abc) {
//   console.log("Executed-1");

//   abc();
//   abc();
// }

// runTwice(function () {
//   console.log("Executed-2");
// });

// 2- Create one pure function that always returns same output for the given input , and one impure function using a global variable.

// function pure(a){
//   return a+2
// }
// let ans=pure(13)
// console.log(ans);

// let a=0

// function impure(){
//     return a++
// }
// impure()
// console.log(a);

// 3- Write a function that uses object destructuring inside parameters to extract and print name and age .

// function extractObj({name,age}){
//     console.log(name,age);

// }

// extractObj({
//     name:"Deba",
//     age:27,
//     branch:"CSE"
// })

// 4- Demonstrate the difference between normal function and arrow function when used as object methods (the 'this' issue).

// 5- Given an array of numbers , use 'map()' to create a new array where each number is squared.

// let arr = [1, 2, 3, 4, 5];

// let sqr = arr.map((num) => {
//   return num * num;
// });

// console.log(sqr);

// 6- Use 'filter()' to get only even numbers from an array .

// let arr=[1,2,3,4,5,6,7,8]

// let evenArr=arr.filter((num=>{
//     if(num%2===0) return num

// }))

// console.log(evenArr);

// 7- Use 'reduce()' to find the total salary from an array of numbers '[1000,2000,3000]'.

// let salary = [1000, 2000, 3000];

// let sum = salary.reduce(
//   (acc,
//   num) => {
//     return acc + num;
//   },0)
  


// console.log(sum);


// 8- create an array of names and use `some()` and `every()` to test a condition (e.g. all names longer than 3 chars)

// let names=['chagala','dukhana','bro','dhana','sukoon']

// let anyLongName=names.some(name=>name.length>3)
// let anyLongNameCheck=names.every(name=>name.length>3)

// console.log(anyLongName);
// console.log(anyLongNameCheck);

// 9- create an object 'user' and test the behaviour of 'Object.freeze()' and 'Object.seal()' by adding/changing keys.

// let obj={
//     name:"Deba",
//     age:22,
//     branch:"CSE",
// }
// Object.seal(obj)
// // Object.freeze(obj)
// obj.city="Bdk"
// obj.name="SHSH"
// console.log(obj);

// 10- Create a nested object (`user->adrees->city) and access the city name inside it .

let obj={
    name:"Deba",
    address:{
        city:"BBSR",
    }
    
}
    console.log(obj.address.city);
