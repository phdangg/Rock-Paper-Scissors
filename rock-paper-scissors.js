
function getComputerChoice(){
    choices = ["Rock","Paper","Scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === null) {
        return "Game canceled.";
    }
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection)
        return "It's a tie! Both chose " + playerSelection;
    else if ((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")) {
                return "You Win! " +  playerSelection + " beats " +  computerSelection;
           }
    else
        return "You Lose! " +  computerSelection + " beats " +  playerSelection;
       
}
function game(){
    for (let i =0;i<5;i++){
        comptuterSelection = getComputerChoice();
        playerSelection = prompt();
        console.log(playRound(playerSelection,comptuterSelection));
    }
}