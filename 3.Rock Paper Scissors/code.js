let scorePc = 0;
let scorePlayer = 0;
let round = 0;
let maxRound = 5;

document.getElementById("rock").addEventListener("click", rock);

function rock() {    
    playerSelection = "Rock";    
    game();
}

document.getElementById("paper").addEventListener("click", paper);

function paper() {    
    playerSelection = "Paper";
    game();
}

document.getElementById("scissors").addEventListener("click", scissors);

function scissors() {    
    playerSelection = "Scissors";
    game();
}

function getComputerChoice(){
    const random = Math.floor(Math.random() * 3) + 1;
    if (random == 1){
        if(round > 0){
            document.getElementById("pcRock").classList.add("clicked");
        }
        round++;        
        return "Rock";
    } else if (random == 2){
        if(round > 0){
            document.getElementById("pcPaper").classList.add("clicked");
        }
        round++;        
        return "Paper";
    } else{
        if(round > 0){
            document.getElementById("pcScissors").classList.add("clicked");
        }
        round++;        
        return "Scissors";
    }    
}

function playRound(playerSelection, computerSelection){    
    console.log(playerSelection);
    console.log(computerSelection);             
    if (playerSelection == "Rock"){
        if (computerSelection == "Paper") {
            console.log(youLose(playerSelection, computerSelection));                        
        }
        else if (computerSelection == "Scissors"){
            console.log(youWin(playerSelection, computerSelection));        
        } else { 
            console.log(draw(playerSelection));
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Scissors") {
            console.log(youLose(playerSelection, computerSelection));
        }
        else if (computerSelection == "Rock") {
            console.log(youWin(playerSelection, computerSelection));        
        }
        else { 
             console.log(draw(playerSelection));
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Paper") {
            console.log(youWin(playerSelection, computerSelection));        
        } 
        else if (computerSelection == "Rock") {
            console.log(youLose(playerSelection, computerSelection));
        }  
        else { 
            console.log(draw(playerSelection));
        }       
        }          
        score();
        
        console.log(scorePlayer);        
        console.log(scorePc);          
        
}

function game(){    
    if (scorePc < maxRound){
        if (scorePlayer < maxRound) {  
        removeClicked();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        document.getElementById("playerScore").textContent= scorePlayer;
    }
    } else {
        round = 0;          
    }
    endGame();              
}

function endGame() {
    if (scorePlayer >= maxRound) {
        win();
        playAgain();
        removeHov(); 
        removeClicked();
    } else if (scorePc >= maxRound) {
        lose();
        playAgain();
        removeHov(); 
        removeClicked();
    }  
}
  
function score() {    
    const element = document.getElementById("playerScore");
    element.innerHTML = scorePlayer;

    const element2 = document.getElementById("pcScore");
    element2.innerHTML = scorePc;
}

function youLose(playerSelection, computerSelection){   
    scorePc++
    const txt = document.getElementById("msg");
    txt.innerHTML = "" ;
    let roundMsg = document.createElement('msg')
    roundMsg.innerHTML = "You Lose! " + computerSelection + " beats " + playerSelection;
    msg.appendChild(roundMsg);  
        
}

function youWin(playerSelection, computerSelection){
    scorePlayer++
    const txt = document.getElementById("msg");
    txt.innerHTML = "" ;
    let roundMsg = document.createElement('msg')
    roundMsg.innerHTML = "You Win! " + playerSelection + " beats " + computerSelection;
    msg.appendChild(roundMsg);     
}

function draw(playerSelection) {
    const txt = document.getElementById("msg");
    txt.innerHTML = "" ;
    let roundMsg = document.createElement('msg')
    roundMsg.innerHTML = "It's a draw between " + playerSelection + "'s!";
    msg.appendChild(roundMsg);
}

function win() {
    const txt = document.getElementById("msg");
    txt.innerHTML = "" ;
    let roundMsg = document.createElement('msg')
    roundMsg.innerHTML = "Congratulations, You won the match!"
    
    msg.appendChild(roundMsg);
}

function lose() {
    const txt = document.getElementById("msg");
    txt.innerHTML = "" ;
    let roundMsg = document.createElement('msg');
    roundMsg.innerHTML = "Oh no, You lost the match!";   
    msg.appendChild(roundMsg);
}

function removeClicked(){
    var element = document.querySelectorAll(".container");
    for (let i = 0; i < element.length; i++) {
        element[i].classList.remove("clicked")
    }
}

function removeHov(){
    var element = document.querySelectorAll(".hov");
    for (let i = 0; i < element.length; i++) {
        element[i].classList.remove("hov")
    }
}

/*function clicked() {
    var clicked = document.querySelectorAll(".player");
    for(let i = 0; i < clicked.length; i++){
        clicked[i].addEventListener("mouseover", function(e){
            if (e.which == 1){
                this.classList.add("clicked")
                console.log("clicked")
            }
            if (e.shiftKey){
                console.log("shift")
            }
        });
    }
}*/

function playAgain(){            
    let div = document.createElement("msg")  
    let playAgain = document.createElement('div');  
    playAgain.style.display = "flex";
    playAgain.style.justifyContent = "center";
    playAgain.style.alignItems = "center";
    let btn = document.createElement('button')  
    btn.innerHTML = "<a href='index.html'>Play again!</a>"; 
    msg.appendChild(playAgain);
    playAgain.appendChild(btn);
}

game();
