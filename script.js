
document.getElementById("funnyButton").addEventListener("click", funnyMove);
document.write(1 + 5);

function funnyMove(){
    alert("You've been alerted!");
    let button1 = document.getElementById("funnyButton");
    button1.innerHTML = "Teehee";
    button1.id = "clicked";
}