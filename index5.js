
document.getElementById("myButton").onclick = function(){
   
    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");



    if(myCheckBox.checked){
        console.log("You are subscribed");
    } else{
        console.log("You are not Subscribed");
    }
    if(visaBtn.checked){
        console.log("You are paying with visa btn");
    }
    else if(mastercardBtn.checked){
        console.log("You are paying with visa btn");
    }else if(paypalBtn.checked){
        console.log("You are paying with paypal btn");
    }else{
        console.log("You must select a payment type");
    }
}