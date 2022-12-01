sessionStorage.wins = 0;
sessionStorage.losses = 0;
function choice(x) {
    sessionStorage.playerchoice=x;
var y =Math.ceil(Math.random()*3);
if (y==1){
    sessionStorage.oppchoice="rock";
}
else if (y==2){
    sessionStorage.oppchoice="scissors";
}
else if (y==3){
    sessionStorage.oppchoice="paper";
}
if ((sessionStorage.playerchoice == "rock") && (sessionStorage.oppchoice == "paper")) {
    sessionStorage.result = "lose";
}
else if ((sessionStorage.playerchoice == "rock") && (sessionStorage.oppchoice == "scissors")){
    sessionStorage.result = "win";
}
else if ((sessionStorage.playerchoice == "paper") && (sessionStorage.oppchoice == "scissors")){
    sessionStorage.result = "lose";
}
else if ((sessionStorage.playerchoice == "paper") && (sessionStorage.oppchoice == "rock")) {
    sessionStorage.result = "win";
}
else if ((sessionStorage.playerchoice == "scissors") && (sessionStorage.oppchoice == "rock")){
    sessionStorage.result = "lose";
}
else if ((sessionStorage.playerchoice == "scissors") && (sessionStorage.oppchoice == "paper")){
    sessionStorage.result = "win";
}else if ((sessionStorage.playerchoice == sessionStorage.oppchoice)){
    sessionStorage.result = "tie"
}
document.getElementById("o-img").src = "svg/" + sessionStorage.oppchoice + ".svg";
if (sessionStorage.result=="win"){
    document.getElementById("result").innerHTML="Congrats you won!";
}
else if (sessionStorage.result=="lose"){
    document.getElementById("result").innerHTML="You lose. Better luck next time.";
}
else if (sessionStorage.result=="tie"){
    document.getElementById("result").innerHTML="It's a tie. Try again.";
}
if (sessionStorage.result == "win") {
    document.getElementById("result").innerHTML="You won!";
    sessionStorage.wins++;
    document.getElementById("pscore").innerHTML = sessionStorage.wins;
}
document.getElementById("result").innerHTML="You lose!";
    sessionStorage.losses++;
    document.getElementById("oscore").innerHTML = sessionStorage.losses;
}
