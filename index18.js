//Add and Change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more Secure)

// const nameTag = document.createElement("h1");
// nameTag.textContent = window.prompt("Enter your name");
// document.body.append(nameTag)


// const myList = document.querySelector("#fruits");
// const listItem = document.createElement("li");
// listItem.textContent = "mango";
// // myList.append(listItem);
// // myList.prepend(listItem)

// myList.insertBefore(listItem ,myList.getElementsByTagName("li")[2])


//Change CSS properties of an element

// const title = document.getElementById("myTitle");

// title.style.backgroundColor = "rgb(50, 200, 250)";

// title.style.color = "rgb(50, 300, 600)"
// title.style.fontFamily = "consolas";
// title.style.textAlign = "center";
// title.style.border = "7px solid"
// title.style.display = "block"

//JS Events


// const element = document.getElementById("myButton");
// element.onclick = doSomething;

// const element = document.body;

// element.onload = doSomething;
// const element = document.getElementById("myText");
// element.onchange = doSomething;

const element = document.getElementById("myDiv");

// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;

element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;

function doSomething(){
    // alert("Hola")
    element.style.backgroundColor = "red";
}

function doSomethingElse(){
    element.style.backgroundColor = "aqua"
}