var diceCont1 = document.getElementById('randomCont1');
var diceCont2 = document.getElementById('randomCont2');
var rollButt = document.getElementById('rollButton');
var diceAns = document.getElementById('answer');


function rollDice() {
    rollOne = Math.floor(Math.random() * 6) + 1;
    rollTwo = Math.floor(Math.random() * 6) + 1;
    
    diceCont1.innerHTML = rollOne;
    diceCont2.innerHTML = rollTwo;
    
    var rollSum = rollOne + rollTwo;
    var rollMessage;
    
    if(rollOne === rollTwo) {
        rollMessage = 'YOU ROLLED A DOUBLE! You get to roll again';
        diceAns.innerHTML = rollMessage;
    } else {
        rollMessage = "You've rolled " + rollSum + "!";
        diceAns.innerHTML = rollMessage;
    }  
}

rollButt.addEventListener('click', function() {
    rollDice();
    }, false);
