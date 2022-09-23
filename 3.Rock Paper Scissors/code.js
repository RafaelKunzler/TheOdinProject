let score = 0;

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
        console.log("It's a Draw!")
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Scissors") {
            console.log(youLose(playerSelection, computerSelection));
            }
        else if (computerSelection == "Rock") {
            console.log(youWin(playerSelection, computerSelection));        
            }
        else { 
            console.log("It's a Draw!")
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Paper") {
            console.log(youWin(playerSelection, computerSelection));        
            } 
        else if (computerSelection == "Rock") {
            console.log(youLose(playerSelection, computerSelection));
            }  
        else { 
            console.log("It's a Draw!")
        }       
    }           
    
}

function game(){
    for(let i = 0; i < 5; i++){
        const text = prompt("Choose (Rock / Paper / Scissors)");
        const newText = titleCase(text);
        const playerSelection = newText;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)        
    }
    if (score > 0) {
        console.log("Congratulations, You won the match!")
    } else if (score < 0) {
        console.log("Oh no, You lost the match!")
    } else 
        console.log("Sorry, but it's a draw!")
    
}
  


function youLose(playerSelection, computerSelection){   
    score--
    return ("You Lose! " + computerSelection + " beats " + playerSelection);
    
    
}

function youWin(playerSelection, computerSelection){
    score++
    return ("You Win! " + playerSelection + " beats " + computerSelection);
    
}

function titleCase(string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
 

game()
