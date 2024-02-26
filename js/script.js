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
    let winner;
    if (playerSelection === computerSelection){
        winner = 'tie';
    }else if (playerSelection === 'rock'){
        if (computerSelection === 'paper'){
            winner = 'computer';
        }else if (computerSelection === 'scissors'){
            winner = 'player';
        }
    }else if (playerSelection === 'paper'){
        if (computerSelection === 'rock'){
            winner = 'player';
        }else if (computerSelection === 'scissors'){
            winner = 'computer';
        }
    }else if (playerSelection === 'scissors'){
        if (computerSelection === 'rock'){
            winner = 'computer';
        }else if (computerSelection === 'paper'){
            winner = 'player';
        }
    }
    
    switch (winner){
        case 'computer':
            return `computer`;
            break;
        case 'player':
            return `player`;
            break;
        case 'tie':
            return `tie`;
            break;
        default:
            return 'invalid';
            break;
    }

}

  //console.log(playRound(playerSelection, computerSelection));

function playGame(){
    let playerWinCount = 0;
    let computerWinCount = 0;
    
    let winner;
    for(let i=1; i<=5; i++){
        let playerSelection = prompt('Enter your choice between Rock, Paper or Scissors');
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
        return `Computer won. Rounds Won: ${computerWinCount}`
    }else if (playerWinCount>computerWinCount){
        return `You won. Rounds Won: ${playerWinCount}`;
    }else if (playerWinCount === computerWinCount){
        return 'Its a tie';
    }
    else{
        return 'Error';
    }
}

console.log(playGame());