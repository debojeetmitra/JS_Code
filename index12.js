//arrow function = compact alternative to traditional function expression

// const greeting = (username)=>{
//     console.log(`Hello ${username}`);
// }

// greeting("Debojeet");

// const percent = (x,y) =>  x/y * 100;

// console.log(`${percent(45 , 50)}%`);

// let grades = [100, 50, 120, 60, 80, 90];

// grades.sort((x,y) =>y-x);
// grades.forEach((element) =>console.log(element));

// let cards = [
//     "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
//   ];

// shuffle(cards);

// // console.log(cards);
// cards.forEach(card => console.log(card))

// function shuffle(array){
//     let currentIndex = array.length;

//     while(currentIndex != 0){
//         let randomIndex = Math.floor(Math.random() *array.length);
//         currentIndex-=1;

//         let temp = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temp;
//     }

//     return array;
// }

//nested functions = Functions inside other functions.
//

// let username = "Debo";
// let userInbox = 1;

// login();

// function login(){
//     displayUserName();
//     displayUserInbox();

//     function displayUserName(){
//         console.log(`Welcome ${username}`);
//     }

//     function displayUserInbox(){
//         console.log(`You have ${userInbox} new messages`);
//     }
// }




//closure = A function with preserved and private data.
//          Give you access to an outer function's scope
//          from an inner function 


// document.getElementById("loginButton").onclick = login();


// userInbox = 478;


// function login(){
//     let username = "Debo";
//     let userInbox = 1;
// function alertUser() {
 
//   alert(`${username} you have ${userInbox} new messages`);
//   userInbox = 0;
// }
// return alertUser;
// }

//Map = object that holds key-value pairs of any data type

// const store = new Map([
//     ["tshirt",20],
//     ["jeans",30],
//     ["socks",10]
// ]);

// let shoppingCart = 0;

// // shoppingCart += store.get("tshirt");
// // shoppingCart += store.get("jeans");

// // store.set("hat", 40);
// // store.delete("hat");

// // console.log(store.has("underwear"));

// console.log(store.size);



// console.log(shoppingCart);

// store.forEach((value,key) => console.log(`${key} $${value}`));



//object = A group of properties and methods
//         properties = what an object has
//         methods = what an object can do
//         use . to access properties/methods

// const car = {
//     model: "Mustang",
//     color:"red",
//     year: 2023,

//     drive: function(){
//         console.log("Car drive");
//     },
//     brake: function(){
//         console.log("car brake");
//     }
// }

// const car2 = {
//     model: "Bmw",
//     color:"blue",
//     year: 2024,

//     drive: function(){
//         console.log("Car drive");
//     },
//     brake: function(){
//         console.log("car brake");
//     }
// }


// car.brake();

// console.log(car2.year);


//this = reference to a particular object
//       the object depends on the immediate context


// const car1 = {
//     model: "Mustang",
//     color:"red",
//     year: 2023,

//     drive: function(){
//         console.log(`You drive ${this.model}`);
//     }
// }

// const car2 = {
//     model: "Bmw",
//     color:"blue",
//     year: 2024,

//     drive: function(){
//         console.log(`You drive ${this.model}`);
//     }
// }

// car1.drive();
// car2.drive();

// this.name = "Debo";
// console.log(this.name);


