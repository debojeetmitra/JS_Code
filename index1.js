// How to accept user input

// Easy way with window input

// let username = window.prompt("What's your name?");
// console.log(username);

//Difficult Way with HTML boxes

let username;

document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}