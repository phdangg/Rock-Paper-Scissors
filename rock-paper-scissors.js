// Get all buttons with the class 'button-box'
var buttons = document.querySelectorAll('.button-box');
const mainContainer = document.querySelector('.main-container');

// Iterate over the buttons and add an event listener to each one
buttons.forEach(function(button) {

    button.addEventListener('click', function() {
        // Get the id of the clicked button (rock, paper, or scissors)
        var choice = button.id;
        
        // Perform actions based on the clicked button
        if (choice === 'rock') {
            console.log('Rock button clicked!');
            let result = playRound('rock',getComputerChoice());
            printResult(result);
            // Add your rock button logic here
        } else if (choice === 'paper') {
            console.log('Paper button clicked!');
            let result = playRound('paper',getComputerChoice());
            printResult(result);
            // Add your paper button logic here
        } else if (choice === 'scissors') {
            console.log('Scissors button clicked!');
            let result = playRound('scissors',getComputerChoice());
            printResult(result);
            // Add your scissors button logic here
        }
    });
});

function printResult(result){
    let p = document.querySelector('.result-content');
    p.textContent = result;
    mainContainer.appendChild(p);
}
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
        computerSelection = getComputerChoice();
        playerSelection = prompt();
        console.log(playRound(playerSelection,computerSelection));
    }
}