let clicked = false;
function funnyMove(){
    if (clicked){
        alert("bruh");
        let button2 = document.getElementById("clicked");
        button2.innerHTML = "Click me";
        button2.id = "funnyButton";
    } else{
        alert("Hahahe");
        let button1 = document.getElementById("funnyButton");
        button1.innerHTML = "Teehee";
        button1.id = "clicked";
        
    }
    clicked = !clicked;
}