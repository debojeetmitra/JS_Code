//array - think of it as a variable
//        that can store multiple values

// let fruits = ["apple","orange","banana"];

// fruits[2] = "coconut";

// fruits.push("lemon");   //add an element
// fruits.pop();           //removes last element
// fruits.unshift("mango"); //add element to beginning
// fruits.shift();          //removes element from beginning

// let length = fruits.length;
// let index = fruits.indexOf("apple");


// console.log(index);


//Looping in an Array in JS
// let prices = [5,10,15,20,25];

// // for(let i=prices.length-1;i>=0;i-=1){
// //     console.log(prices[i]);
// // }


// for(let price of prices){
//     console.log(price);
// }

//Sort an array of Strings in JS
// let fruits = ["banana","apple","orange","mango"];

// fruits = fruits.sort();
// fruits = fruits.sort().reverse();


// for(let fruit of fruits){
//     console.log(fruit);
// }

//2D array = An array of arrays


// let fruits = ["apples","oranges","bananas"];
// let vegetables = ["carrots","onions","potatoes"];
// let meats = ["eggs","chicken","fish"];

// let groceryList = [fruits,vegetables,meats];

// groceryList[2][0] = "steak";

// for(let list of groceryList){
//      for(let food of list){
//         console.log(food);
//      }
// }

//spread operator = allows an iterable such as an
//                  array or string to be expanded
//                  in places where zero or more
//                  arguments are expected
//                  (unpacks the elements)

// let username = "Bro Code";
// let numbers = [1,2,3,4,5,6,7,8];
// console.log(...numbers);

// let numbers = [1,2,3,4,5,6,7,8,9];

// let maximum = Math.max(...numbers);
// console.log(maximum);


// let class1 = ["Spongebob","Patrick","Sandy"];
// let class2 = ["Squidward","Mr.Krabs","Plankton"];

// class1.push(...class2);

// console.log(...class1);



//rest parameters = represents an indefinite number
//...                  of parameters
//                  (packs argument into an array)
 
// let a = 1;
// let b=2;
// let c=3;
// let d=4;
// let e=5;

// console.log(sum(a,b,b,c,c,d));



// function sum(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total += number;
//     }
//     return total;
// }


//callback = a function passed as an argument
//           to another function

//   Ensures that a function is not going
//   to run before a task is completed
//   Helps us develop asynchronous code
//   (When one function has to wait for another function)
//   that helps us avoid errors and potential problems
//   Ex.Wait for a file to load


sum(2, 3, displayDom);

function sum(x,y,callback){
    let result = x + y;
    callback(result);
}


function displayConsole(output){
    console.log(output);
}

function displayDom(output){
    document.getElementById("myLabel").innerHTML = output;
}