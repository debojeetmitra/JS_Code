//class = a blueprint for creating objects
//        define what properties and methods they have
//        use a constructor for unique properties



// class Player{
//     score = 0;

//     pause(){
//         console.log("You paused the game");
//     }
//     exit(){
//         console.log("You exited the game");
//     }
// }

// const player1 = new Player();

// const player2 = new Player();

// player1.score += 1;
// console.log(player1.score);
// console.log(player2.score);

// player1.pause()
// player1.exit()


//constructor = a special method of a class
//                accepts arguments and assigns properties

// class Student{
      
//     constructor(name,age,gpa){
//         this.name = name;
//         this.age = age;
//         this.gpa = gpa;
//     } study(){
//         console.log(`${this.name} is stuyding`);
//     }
// }

// const student1 = new Student("Debo",20,3,4);
// const student2 = new Student("Harsh",20,3);

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);

// student1.study()


// console.log(student2.name);
// console.log(student2.age);
// console.log(student2.gpa);

// student2.study()


//static = belongs to the class , not the ojects
//         properties: useful for caches, fixed config
//         methods: useful for utility functions





// class Car{ 

//     static numberOfCars = 0;

//     constructor(model){
//         this.model = model;
//         Car.numberOfCars += 1;
//     }

//     static startRace(){
//         console.log("3...2...1..GO!");
//     }
// }


// const car1 = new Car("Mustang");
// const car2 = new Car("Corvette");
// const car3 = new Car("BMW");
// const car4 = new Car("Ferrari");
// const car5 = new Car("Lambo");

// console.log(Car.numberOfCars);

// Car.startRace()


//inheritance = a child class can inherit all the
//              methods and properties from another class


// class Animal{
//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }

//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }

// }


// class Rabbit extends Animal{

//     name = "rabbit";

   

//     run(){
//         console.log(`This ${this.name} is running`);
//     }
// }


// class Fish extends Animal{

//     name = "fish";

    

//     swim(){
//         console.log(`This ${this.name} is swimming`);
//     }
// }


// class Hawk extends Animal{

//     name = "hawk";

    

//     fly(){
//         console.log(`This ${this.name} is flying`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();


// console.log(hawk.alive);
// hawk.eat();
// hawk.sleep();
// hawk.fly();


//super = Refers to the parent class.
//        Commonly used to invoke constructor of a parent class


class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
class Rabbit extends Animal{
     
    constructor(name, age, runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("rabbit",1,60);
const fish = new Fish("fish",2,40);
const hawk = new Hawk("hawk",3,80);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);