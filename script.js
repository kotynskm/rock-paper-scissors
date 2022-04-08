// create a function called computerPlay that randomly picks "rock", "paper", or "scissors"
function computerPlay(){
    const choices = ['rock','paper','scissors'];
    let index = Math.floor(Math.random() * choices.length);
    let choice = choices[index];
    return choice;
    }
    
// function that plays a round of the game, determines the winner or if it's a tie
    function playRound(playerSelection, computerSelection){
        
        if (playerSelection === "rock" && computerSelection === "scissors"){
          return "You won! Rock beats scissors!";
         
        }else if (playerSelection === "paper" && computerSelection === "rock"){
          return "You won! Paper beats rock!";
         
        }else if (playerSelection === "scissors" && computerSelection === "paper"){
          return "You won! Scissors beats paper!";
         
        }else if(playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "scissors"){
          return "It's a tie!";
        }else {
          return "Computer wins this round!";
            
        }
        
      }