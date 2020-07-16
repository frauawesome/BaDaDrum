for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);   
}

function handleClick() {
    new Audio("sounds/tom-1.mp3").play();
}

// <img src="images/crash.png"></img>