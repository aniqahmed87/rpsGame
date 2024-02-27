function getComputerChoice(){
    
    //get a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);
    //if randomNumber is 0, return rock
    if (randomNumber === 0){
        return 'rock'
    //elseif randomNumber is 1, return paper
    }else if(randomNumber === 1){
        return 'paper'
    //elseif randomNumber is 2, return scissors
    }else if(randomNumber === 2){
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection){
    
    if (playerSelection === computerSelection){
        return 'tie';
    }else if (playerSelection === 'rock'){
        if (computerSelection === 'paper'){
            return 'computer';
        }else if (computerSelection === 'scissors'){
            return 'player';
        }
    }else if (playerSelection === 'paper'){
        if (computerSelection === 'rock'){
            return 'player';
        }else if (computerSelection === 'scissors'){
            return 'computer';
        }
    }else if (playerSelection === 'scissors'){
        if (computerSelection === 'rock'){
            return 'computer';
        }else if (computerSelection === 'paper'){
            return 'player';
        }
    }else {
        return 'invalid';
    }

}

function playGame(){
    let playerWinCount = 0;
    let computerWinCount = 0;
    
    let winner;
    for(let i=1; i<=5; i++){
        let playerSelection = prompt(`Round# ${i} | Enter your choice between Rock, Paper or Scissors`);
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        winner = playRound(playerSelection,computerSelection);
        switch(winner){
            case 'computer':
                computerWinCount++;
                console.log(`Round#${i}: You lose this round! - Computer: ${computerSelection} beat Player: ${playerSelection}`);
                break;
            case 'player':
                playerWinCount++;
                console.log(`Round#${i}: You win this round! - Player: ${playerSelection} beat Computer: ${computerSelection}`);
                break;
            case 'tie':
                console.log(`Round#${i}: Its a Tie! - Player: ${playerSelection} same as Computer: ${computerSelection}`);
                break;
            case 'invalid':
                console.log(`Round#${i}: Invalid user choice - ${playerSelection}. Round wasted!`);
                break;
        }
    }
    if (computerWinCount>playerWinCount){
        return `Computer won. Rounds Won: ${computerWinCount} of 5`;
    }else if (playerWinCount>computerWinCount){
        return `You won. Rounds Won: ${playerWinCount} of 5`;
    }else if (playerWinCount === computerWinCount){
        return 'Its a tie';
    }
    else{
        return 'Error';
    }
}

console.log(playGame());