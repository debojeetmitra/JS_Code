//get = binds an object property to a function
//      when that property is accessed

//set = binds an object property to a function
//      when that property is assigned a value


// class Car{
//     constructor(power){
//         this._power = power;
//         this._gas = 100;
//     }
//     get power(){
//         return `${this._power}hp`;
//     }
//     get gas(){
//         return `${this._gas}L (${this._gas / 50 * 100}%)`
//     }
//     set gas(value){
//         if(value > 50){
//             value = 50
//         }
//         else if(value < 0){
//             value = 0;
//         }
//         this._gas = value;
//     }
// }

// let car = new Car(400);
// car.gas = 3000000000000;

// console.log(car.power);
// console.log(car.gas);


// JS object as an argument

// class Car{

//     constructor(model,year,color){
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
// }

// const car1 = new Car("Mustang",2023,"red");
// const car2 = new Car("Corvette",2024,"blue");
// const car3 = new Car("Lambo",2022,"yellow");

// changeColor(car3, "gold");
// displayInfo(car3);

// function displayInfo(car){
//     console.log(car.model);
//     console.log(car.year);
//     console.log(car.color);
// }

// function changeColor(car, color){
//     car.color = color;
// }


// Creating an array of objects

// class Car{

//     constructor(model,year,color){
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }

//     drive(){
//         console.log(`You drive the ${this.model}`);
//     }
// }


// const car1 = new Car("Mustang",2023,"red");
// const car2 = new Car("Corvette",2024,"blue");
// const car3 = new Car("Lambo",2022,"yellow");
// const car4 = new Car("Ferrai",2045,"white")

// const cars = [car1,car2,car3,car4];

// // console.log(cars[0].model);
// // console.log(cars[1].model);
// // console.log(cars[2].model);

// // cars[0].drive();
// // cars[1].drive();
// // cars[2].drive();

// startRace(cars);

// function startRace(cars){
//     for(const car of cars){
//         car.drive();
//     }
// }



//anonymous objects = objects without a name
//                    Not directly referenced 
//                    Less syntax. No need for unique names

//  class Card{
//     constructor(value,suit){
//         this.value = value;
//         this.suit = suit;
//     }
//  }



//  let cards = [ new Card("A", "Hearts"),
//  new Card("A", "Spades"),
//  new Card("A", "Diamonds"),
//  new Card("2", "Clubs"),
//  new Card("2", "Hearts"),
//  new Card("2", "Spades"),
//  new Card("2", "Diamonds"),
//  new Card("2", "Clubs")];

// //  console.log(cards[1].value + cards[2].suit);

// cards.forEach(card=> console.log(`${card.value} ${card.suit}`));

//error = object with a descripition of 
//        something went wrong

//throw = executes a user defined error

try {
    let x=window.prompt("Enter a #");
    x=Number(x);

    if(isNaN(x)) throw "That was not a number";
    if(x=="") throw "That was empty";
} catch (error) {
    console.log(error);
}
finally{
    console.log("This always execute");
}