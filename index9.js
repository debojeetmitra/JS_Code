//template literals = delimited with (`)
//        instead of double or single quotes
//        allows embeded variables and expressions


// let userName = "Bro";
// let items = 3;
// let total = 75;


// console.log("Hello", userName);
// console.log("You Have",items,"items in your cart");
// console.log("Your total is $", total);


// console.log(`Hello ${userName}`);
// console.log(`You have ${items} items in your cart`);
// console.log(`Your total is ${total}`);

// let text = 
// `Hello ${userName}<br>
// You have ${items} items in your cart<br>
// Your total is ${total}`

// console.log(text);
// document.getElementById("myLabel").innerHTML = text;



//toLocaleString() = returns a string with a language 
//                   sensitive representation of this number

// number.toLocaleString(locale, {options});

//'locale' = specify that language (undefined = default)
//'options' = object with formatting options

let myNum = 0.5;

// myNum = myNum.toLocaleString("en-US"); //US-English
// myNum = myNum.toLocaleString("hi-IN"); // hindi

// myNum = myNum.toLocaleString("de-DE") // Standard German

// myNum= myNum.toLocaleString("en-US", {style:"currency", currency:"USD"})

// myNum= myNum.toLocaleString("hi-IN", {style:"currency", currency:"INR"})

//myNum= myNum.toLocaleString("de-DE", {style:"currency", currency:"EUR"})

// myNum= myNum.toLocaleString(undefined, {style:"percent"})

//  myNum= myNum.toLocaleString(undefined, {style:"unit", unit:"celsius"});


// console.log(myNum);