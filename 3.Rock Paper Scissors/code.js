let scorePc = 0;
let scorePlayer = 0;

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
        return "Rock";
    } else if (random == 2){
        return "Paper";
    } else{
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
        if (scorePc < 5){
            if (scorePlayer < 5) {       
            const computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection)
            document.getElementById("playerScore").textContent= scorePlayer;
        }
    }


        if (scorePlayer >= 5) {
            win();
            playAgain();
        } else if (scorePc >=5) {
            lose();
            playAgain();
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

function removeHover() {
    let element = document.getElementById("rock");
    element.classList.remove("hover");
    let element2 = document.getElementById("paper");
    element2.classList.remove("hover");
    let element3 = document.getElementById("scissors");
    element3.classList.remove("hover");
}

function playAgain(){
    removeHover();        
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
