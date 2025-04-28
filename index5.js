
document.getElementById("myButton").onclick = function(){
   
    const myCheckBox = document.getElementById("myCheckBox")
    if(myCheckBox.checked){
        console.log("You are subscribed");
    } else{
        console.log("You are not Subscribed");
    }
}