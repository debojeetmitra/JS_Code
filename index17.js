// DOM = Document Object Model(API)
//       An interface for changing the content of a page


// console.log(document);
// console.dir(document);

// console.log(document.title);
// console.log(document.URL);


// document.title = "Hola";
// document.location = "http://linkedin.com";

// document.body.style.backgroundColor = "red";
// document.getElementById("myDiv").innerHTML = "Hola";


// let element = document.getElementById("myTitle");
// element.style.backgroundColor = "green";

// let fruits = document.getElementsByName("fruits");

// fruits.forEach(fruit =>{
//     if(fruit.checked){
//         console.log(fruit.value);
//     }
// })

// let vegetables = document.getElementsByTagName("li");
// vegetables[2].style.backgroundColor = 'red';

// let desserts = document.getElementsByClassName("desserts");
// // desserts[0].style.backgroundColor = "aqua";


// let element = document.querySelector("#myTitle");
// element.style.backgroundColor = "aqua";


// let element = document.querySelector(".desserts");
// element.style.backgroundColor = "aqua";

// let elements = document.querySelectorAll("li");
// elements.forEach(element => {
//     element.style.backgroundColor = "aqua";
// })

// JS DOM Traversal

let element = document.querySelector("#dessert");
let child = Array.from(element.children);

child.forEach(child => child.style.backgroundColor = "aqua")

// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSiblings
// .previousElementSibling
// .children[]
// Array.from(.children)


// Above are the DOM Traversal