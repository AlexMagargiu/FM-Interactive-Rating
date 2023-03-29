function switchDisplay(){
    let baseDisplay = document.querySelector(".base");
    let thanksDisplay = document.querySelector(".thank-you")
    if (baseDisplay.style.display === "flex"){
        thanksDisplay.style.display = "none";
    } else{
        thanksDisplay.style.display = "flex";
        baseDisplay.style.display = "none";
    }
}

function getValue(){
    let number = document.querySelector("input[type=radio]:checked");
    if(number){
        document.querySelector(".get-value").innerHTML = number.value;
        switchDisplay();
    } else{
        alert("Please choose a rating");
    }
}

