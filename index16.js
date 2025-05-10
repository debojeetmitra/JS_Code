// const promise = new Promise((resolve, reject)=>{
//     let fileLoaded = false;

//     if(fileLoaded){
//         resolve("File loaded");
//     }else{
//         reject("File not loaded");
//     }
// });

// promise.then(value => console.log(value))
//        .catch(error => console.log(error));

//promise = object that encapsulates the result of an asynchronous operations
//          let asynchronous methods return values like synchronous methods
//          "I promise to return something in the future"

//         The state is "pending" then: "fulfilled" or "rejected"
//         The result is what can be returned
//         2 parts producing and consuming

// const wait = time => new Promise(resolve => {
//     setTimeout(resolve, time);
// });

// wait(3000).then(() => console.log("Thanks for waiting"));

// async = makes a function return a promise
// await = makes a function wait for a promise

// async function loadFile() {
//     let fileLoaded = true;

//     if(fileLoaded){
//         return "File loaded";
//     }else{
//         throw "File not loaded";
//     }
// }

// loadFile().then(value => console.log(value))
//           .catch(error => console.log(error));

// await = makes a function wait for a promise

// async function loadFile() {
//   const promise = new Promise((resolve, reject) => {
//     let fileLoaded = false;

//     if (fileLoaded) {
//       resolve("File loaded");
//     } else {
//       reject("File not loaded");
//     }
//   });
//   try {
//     document.getElementById("myH1").innerHTML = await promise;
//   } catch (error) {
//     document.getElementById("myH1").innerHTML = error;
//   }
// }



// loadFile();



//The idea behind a module is that it's a file of reusable code
//We can import sections of pre-written code to use whenever we want
//Great for any general utility values and functions
//Helps to make your code more reusable and maintanable
//Think of modules as seperate chapters of a book

//import {PI, getArea, getCircumference} from "./math_util.js";
import * as MathUtil from "./math_util.js";

console.log(MathUtil.PI);

let circumference = MathUtil.getCircumference(10);
console.log(circumference);

let area = MathUtil.getArea(10);
console.log(area);