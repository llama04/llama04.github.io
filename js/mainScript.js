let clicked = false;
function funnyMove(){
    if (clicked){
        alert("bruh");
        let button2 = document.getElementById("clicked");
        button2.innerHTML = "Click me";
        button2.id = "funnyBtn";
    } else{
        alert("Hahahe");
        let button1 = document.getElementById("funnyBtn");
        button1.innerHTML = "Teehee";
        button1.id = "clicked";
    }
    clicked = !clicked;
}
function showLogin(){
    document.getElementById("popup").style.display = "inline";
}
function hideLogin(){
    document.getElementById("popup").style.display = "close";
}
function goRegister(){
    window.location.href="./register.html";
}
