let clicked = false;
function funnyMove(){
    alert("bruh");
    if (clicked){
        let button1 = document.getElementById("clicked");
        button1.innerHTML = "Click me";
        button1.id = "funnyButton";
    } else{
        let button1 = document.getElementById("funnyButton");
        button1.innerHTML = "Teehee";
        button1.id = "clicked";
    }
    
    
    
    
}