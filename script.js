
document.getElementById(funnyButton).addEventListener("click", funnyMove);

function funnyMove(){
    alert("You've been alerted!");
    var button1 = document.getElementById(funnyButton);
    button1.innerHTML = "Teehee";
    button1.id = "clicked";
}