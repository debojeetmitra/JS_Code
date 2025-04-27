// Hypotenuse of a Triangle

let a;
let b;
let c;

// a=window.prompt("Enter a side A");
// a= Number(a);

// b=window.prompt("Enter a side b");
// b=Number(b);

// c=Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

// console.log(c);


document.getElementById("submitButton").onClick = function(){
a=document.getElementById("aTextBox").value;
a= Number(a);

b=document.getElementById("bTextBox").value;
b=Number(b);

c=Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

document.getElementById("cLabel").innerHTML = "Side C:" +c;

}