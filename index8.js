// break = break out of a loop entirely
// continue = skip an iteration of a loop


// for(let i=1;i<=20;i+=1){
//     if(i==13){
//         continue;
//     }
//     console.log(i);
// }

// nested loop = a loop inside a another loop


// let symbols = window.prompt("Enter a symbol to use");
// let rows = window.prompt("Enter # of rows");
// let columns = window.prompt("Enter # of columns");


// for(let i=1;i<=rows;i++){
//     for(let j=1;j<=columns;j++){
//            document.getElementById("myRectangle").innerHTML += symbols;
//     }
//     document.getElementById("myRectangle").innerHTML += "<br>";
// }


//function = Define code once , and use it many times
//           To perform some code , call the function name.


// start();

// function start(){
//     let username = "Debo";
//     let age = 21;

//     hello(username,age);
// }


// function hello(username,age){
//     console.log("HI");
//     console.log("HI", username);
//     console.log("HI");
//     console.log("HI",age);

// }

// return = returns a value back to the place 
//          where you invoked a function

// let area;
// let width;
// let height;


// width = window.prompt("Enter width");
// height = window.prompt("enter a height");

// area = getArea(width, height);

// console.log("The area is ", area);

// function getArea(width, height){
//     return width * height;
// }

// ternary operator = shortcut for an 'if/else statement'
//                    Takes 3 operands
//                    1.condition with ?
//                    3.expression if false

//   condition ? exprIfTrue : exprIfFalse


// checkWinner(false);

// function checkWinner(win){
//     win ? console.log("You WIn!") : console.log("You Lose");
// }



// variable scope = where a variable is accessible

//let = variables are limited to block scope {}
// var = variables are limited to a function() {}

// global variables = is declared outside any function
//( if global , var will change browser's window properties )


// let name = "Debojeet";