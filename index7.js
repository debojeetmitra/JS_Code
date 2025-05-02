// = assignment operator
// == comparison operator
// === strict equality operator

// let x = 3.14;

// if(x === "3.14"){
//     console.log("That is Pi");
// } else{
//     console.log("Not a pi");
// }



// Gives us the ability to check more than 1 condition concurrently
// && AND (Both conditions must be true)
// || OR (Either condition can be true)

// let temp = 15;
// let sunny = true;

// if(temp > 0 && temp < 30 && sunny){
//     console.log("The weather is good");
// } else{
//     console.log("The weather is bad");
// }

// Not logical operator
// typically used to reverse a condition's boolean value
// true -> false and false -> true

// let temp = 15;
// let sunny = false;

// if(!(temp > 0)){
//     console.log("It's cold outside");
// } else{
//     console.log("It's warm outside");
// }
// if(!sunny){
//     console.log("It's cloudy outside");
// }else{
//     console.log("It's sunny outside");
// }


// while loop = repeat some code
//              while some condition is true
//              potentially infinte


// let username = "";

// while(username == "" || username == null){
//     username = window.prompt("Enter your name");
// }
//  console.log("Hello", username);


// while(1==1){
//     console.log("Help me");
// }


// do while loop - do something,
//                 then check the condition
//                 repeat if condition is true


// let username;

// do{
//     username = window.prompt("Enter your name");
// } while(username == "")

//     console.log("Hello", username);


// for loop = repeat some code a certain amount of times


for(let i=90 ;i>0 ;i-=2){
    console.log(i);
}

console.log("Happy New Year");