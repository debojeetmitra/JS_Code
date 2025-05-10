//setTimeout() = invokes a function after a number of millionseconds
//               asynchronous function(doesn't pause execution)


// let item = "cryptocurrencies";
// let price = 420.67;

// let timer1=setTimeout(firstMessage,3000);
// let timer2=setTimeout(secondMessage,6000);
// let timer3=setTimeout(thirdMessage,9000);

// function firstMessage(){
//     alert(`Buy this ${item} for ${price}`)
// }

// function secondMessage(){
//     alert(`Buy this for 400`)
// }

// function thirdMessage(){
//     alert(`Buy this for 900`)
// }


// document.getElementById("myButton").onclick = function(){
//     clearTimeout(timer1);
//     clearTimeout(timer2);
//     clearTimeout(timer3);
//     alert("Thanks for buying")

// }


//setInterval() = invokes a function repeatedly after a number
//                milliseconds asynchronous function



// let count = 0;
// let max = window.prompt("Count up to what number");
// max = Number(max);

// const myTimer = setInterval(countUp, 1000);

// function countUp(){
//     count += 1;
//     console.log(count);
//     if(count>=max){
//         clearInterval(myTimer);
//     }
// }

// The data object is used to work with date and times

// let date = new Date()
// let date = new Date(3333334440);
// let date = new Date(2023, 0, 1, 2, 3, 4, 5);
// let date = new Date("January 1, 2023 00:00:00");

// let year = date.getFullYear();
// let dayOfMonth = date.getDate();
// let dayOfWeek = date.getDay();
// let month = date.getMonth();
// let hour = date.getHours()

// date.setFullYear(2024);
// date.setMonth(11);
// date.setDate(31);
// date.setHours(23);
// date.setSeconds(30);


// date = date.toLocaleString();
// document.getElementById("myLabel").innerHTML = formatTime(date);

// function formatDate(date){
//     let year = date.getFullYear();
//     let month = date.getMonth();
//     let day = date.getDate();

//     return `${month}/${day}/${year}`
// }
// function formatTime(date){
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let amOrPm = hours >= 12 ? "pm":"am";

//     hours = (hours % 12) || 12; 

//     return `${hours}:${minutes}:${seconds}${amOrPm}`
// }


//synchronous code = In an ordered sequence
//                   Step-by-step linear instructions
//                   (start now, finish now)

//asynchronous code = Out of sequence
//                    Ex-Access a database
//                       Fetch a file
//                       Tasks that take time
//                    (start now, finish sometime later)

// console.log("Start");
// setTimeout(() => console.log("This is an asynchronous code"), 5000);
// console.log("End");


// console.time() = starts a timer you can use to
//                  track how long an operations take place
//                  Give each timer a unique name.


// //start 
// console.time("Response Time");

// setTimeout(() => console.log("hi"), 3000);
// //end
// console.time("Response Time");