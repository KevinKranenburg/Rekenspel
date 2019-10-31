const wrapper = document.getElementById("wrapper");
const myAssignment = document.getElementById("myAssignment");
const myAnswer = document.getElementById("myAnswer");
const feedback = document.getElementById("feedback");

let mySum;
let sound = new Audio();

function makeSum(){
    var a = Math.floor(Math.random() * 10);
    var b = Math.floor(Math.random() * 10);
    mySum = a * b;
    myAssignment.innerHTML = a + " x " + b;
    myAnswer.focus();
}


function keyPressed(evt){
    if(evt.keyCode == 13){
        if(eval(mySum) == myAnswer.value){
            feedback.src = "foto/goed.png";
            sound.src = "sound/267528__syseq__good.wav";
            sound.play();
        } else{
            feedback.src = "foto/fout.png";
            sound.src = "sound/420999__eponn__wrong.wav";
            sound.play();
        }
        window.setTimeout(waiting, 2000);
    }

}


function waiting(){
    feedback.src = "foto/feedback.png";
    myAnswer.value = "";
    makeSum();
}
    makeSum();
    myAnswer.addEventListener("keyup", keyPressed, false);

    function displayCalc() {
        generateCalc();
        setTimeout(() => {generateCalc();setTimeout(() => {generateCalc();setTimeout(() => {generateCalc();setTimeout(() => {generateCalc();},200);},200);},200);},200);
        input.value = "";
    }
    
    function generateCalc() {
        firstNum = Math.floor(Math.random() * 10 + 1);
        secondNum = Math.floor(Math.random() * 10 + 1);
        answer = firstNum * secondNum;
        calc.innerHTML = firstNum + " * " + secondNum;
    }
    
    displayCalc();
