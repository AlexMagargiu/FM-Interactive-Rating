function switchDisplay(){
     if(getValue() != true){
        return;
    } 
    let baseDisplay = document.querySelector(".base");
    let thanksDisplay = document.querySelector(".thank-you")
    if (baseDisplay.style.display === "flex"){
        thanksDisplay.style.display = "none";
    } else{
        thanksDisplay.style.display = "flex";
        baseDisplay.style.display = "none";
    }
}


//First idea => too long 
/* function getValue(){
    const poor = document.getElementById("1");
    const bad = document.getElementById("2");
    const decent = document.getElementById("3");
    const good = document.getElementById("4");
    const excellent = document.getElementById("5");
    if(poor.checked){
        document.querySelector(".get-value").innerHTML = poor.value;
    } else if(bad.checked){
        document.querySelector(".get-value").innerHTML = bad.value;
    } else if(decent.checked){
        document.querySelector(".get-value").innerHTML = decent.value;
    } else if(good.checked){
        document.querySelector(".get-value").innerHTML = good.value;
    } else if(excellent.checked){
        document.querySelector(".get-value").innerHTML = excellent.value;
    } else{
        alert("You've not chosen a number");
        return false;
    }
    return true;
} */

function getValue(){
    let number = document.querySelector("input[type=radio]:checked");
    if(number && number.checked){
        document.querySelector(".get-value").innerHTML = number.value;
        return true;
    } else{
        alert("You've not chosen a number");
        return false;
    }
}

