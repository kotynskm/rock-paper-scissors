let playerScore = 0;
let computerScore = 0;
// plays a round of the game until max score of 5 is reached then declares the winner
function game(){
    while(playerScore < 5 && computerScore < 5){
      let userAnswer = getUserInput();
      let computerAnswer = computerPlay();
      playRound(userAnswer,computerAnswer);
      if(playerScore === 5){
        console.log("Player wins the game!");
      }else if(computerScore === 5){
        console.log("Computer wins the game!");
      }
    }  
  }

  game();
// function that gets input from the user using window prompt
function getUserInput(){
    let userInput = prompt("Rock, paper, or scissors?");
    userInput = userInput.toLowerCase();
    return userInput;
  }
  
  
// function that randomly picks "rock", "paper", or "scissors" for the computer
function computerPlay(){
    const choices = ['rock','paper','scissors'];
    let index = Math.floor(Math.random() * choices.length);
    let choice = choices[index];
    return choice;
    }
   

// function that plays a round of the game, determines the winner or if it's a tie
function playRound(playerSelection, computerSelection){
    // return a string to declare the winner, or if it's a tie
    if (playerSelection === "rock" && computerSelection === "scissors"){
      playerScore++;
      console.log("You won! Rock beats scissors!");
      
    }else if (playerSelection === "paper" && computerSelection === "rock"){
      playerScore++;
      console.log("You won! Paper beats rock!");
     
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
      playerScore++;
      console.log("You won! Scissors beats paper!");
     
    }else if(playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "scissors"){
      console.log("It's a tie!");
    }else {
      computerScore++;
      console.log("Computer wins this round!");
        
    }
  console.log(playerScore + " " + computerScore);
  }