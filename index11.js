//array.forEach() = executes a provided callback function
//                  once for each array element


// let students = ["Spongebob","patrick","squidward"];
// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element, index, array){
//     array[index] = element[0].toUpperCase() + element.substring(1);
// }

// function print(element){
//     console.log(element);
// }

//array.map() = executes a provided callback function
//              once for each element
//              AND creates a new array


// let numbers = [1,2,3,4,5];
// let squares = numbers.map(square);
// let cubes = numbers.map(cube);


// squares.forEach(print);
// cubes.forEach(print);

// function square(element){
//     return Math.pow(element,2);
// }

// function cube(element){
//     return Math.pow(element,3);
// }

// function print(element){
//     console.log(element);
// }



//array.filter() = creates a new array with all elements
//                 that pass the test provided by a function

// let ages = [18,20,77,7,33];
// let adults = ages.filter(checkAge);

// adults.forEach(print);

// function checkAge(element){
//     return element >= 18;
// }

// function print(element){
//     console.log(element);
// }


//array.reduce() = reduces an array to a single value

// let prices = [5,10,15,20,25,30];
// let total = prices.reduce(checkOut);

// console.log(`The total is :$${total}`);

// function checkOut(total,element){
//     return total + element;
// }



//sort an array of numbers

// let grades = [100, 50, 90, 60,80,70];

// grades = grades.sort(ascendingSort);

// grades.forEach(print);

// function descendingSort(x,y){
//     return y-x;
// }

// function ascendingSort(x,y){
//     return x-y;
// }

// function print(element){
//     console.log(element);
// }


//function expression = function without a name (anonymous function)
//                      avoid polluting the global scope with names
//                      Write it, then forget about it



// const greeting = function() {
//     console.log("HI there!");
// }

// greeting();


// let count = 0;

// function increaseCount(){
//     count += 1;
//     document.getElementById("myLabel").innerHTML = count;
// }

// function descendingCount() {
//     count -= 1;
//     document.getElementById("myLabel").innerHTML = count;
// }


let count = 0;

document.getElementById("increaseBtn").onclick = function(){
    count += 1;
    document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("decreaseBtn").onclick = function(){
    count -= 1;
    document.getElementById("myLabel").innerHTML = count;
}