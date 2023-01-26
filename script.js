const choices = ["rock", "paper", "scissors"]

function getComputerChoice(choices){
        return choices[Math.floor(Math.random()*choices.length)];
}

let playerSelection;
let computerSelection;

function Round(playerSelection, computerSelection){
        playerSelection = prompt("Pick rock, paper, or scissors").toLowerCase();
        computerSelection = getComputerChoice(choices);
        if (playerSelection == "rock"){
                if (computerSelection == "paper"){
                        alert("You lose, paper beats rock");
                        return 1;
                }
                else if(computerSelection == "scissors"){
                        alert("You win, rock beats scissors");
                        return 0;
                }
                else{
                        alert("Its match");
                        return 2;
                }
        }
        else if(playerSelection == "paper"){
                if (computerSelection == "rock"){
                        alert("You win, paper beats rock");
                        return 1;
                }
                else if(computerSelection == "scissors"){
                        alert("You lose, scissors beats paper");
                        return 0;
                }
                else{
                        alert("Its match");
                        return 2;
                }
        }
        else if(playerSelection == "scissors"){
                if (computerSelection == "rock"){
                        alert("You lose, rock beats scissors");
                        return 0;
                }
                else if(computerSelection == "paper"){
                        alert("You win, scissors beat paper");
                        return 1;
                }
                else{
                        alert("Its match");
                        return 2;
                }
        }
}

function game(){
        let playerScore = 0;
        let computerScore = 0;
        for(let i = 0; i < 5; i++){
                if (Round(playerSelection,computerSelection) == 1){
                        playerScore += 1;
                }
                else if(Round(playerSelection, computerSelection) == 0){
                        computerScore += 1;
                }
                else{
                        playerScore += 0;
                        computerScore +=0;
                }
                
        }
        if(playerScore > computerScore){
                alert("You win " + playerScore + ":" + computerScore);
        }
        else if(playerScore < computerScore){
                alert("Computer win " + computerScore + ":" + playerScore );
        }
        else{
                alert("Remis " + playerScore + ":" + computerScore);
        }

}






console.log(game());
//console.log(getComputerChoice(choices));