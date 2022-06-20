// Player's choice
/*
const playerSelection = "Rock";

//Starting Stats

function computerPlay() {
  let options = ["Rock", "Papper", "Scissors"];
  let randOptions = options[Math.floor(Math.random() * options.length)];
  return randOptions;
}



function playRound(player1, computerSelection) {
  player1 = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
  computerSelection = computerPlay();


  console.log(player1);
  console.log(computerSelection);

  if (player1 === "Rock" && computerSelection === "Scissors") {
    return "You win! Rock beats Scissors";
  } else if (player1 === "Rock" && computerSelection === "Papper") {
      return "You lost! Papper beats Rock";
  } else if (player1 === "Papper" && computerSelection === "Scissors") {
    return "You lost! Scissors beats Papper";
  } else if (player1 === "Papper" && computerSelection === "Rock") {
    return "You won! Papper beats Rock";
  } else if (player1 === "Scissors" && computerSelection === "Rock") {
    return "You lost! Rock beats Scissors";
  } else if (player1 === "Scissors" && computerSelection === "Papper") {
    return "You won! Scissors beats Papper";
  } else if (player1 === computerSelection) {
    return "It's a tie";
  }
}

console.log(playRound());
*/

let result = document.getElementById("result");
let explain = document.getElementById("explain");
let playerIcon = document.getElementById("player-icon");
let computerSign = document.getElementById("computer-icon");


let playerScore = 0;
document.getElementById("score-player").innerText = playerScore;
let computerIcon = document.getElementById("computer-icon");
let computerScore = 0;
document.getElementById("score-computer").innerText= computerScore;


let btnRock = document.getElementById("btn-rock");
let btnPapper = document.getElementById("btn-papper");
let btnScissors = document.getElementById("btn-scissors");
let btnReplay = document.getElementById("btn-replay");

function computerPlay() {
  let options = ["Rock", "Papper", "Scissors"];
  let randOptions = options[Math.floor(Math.random() * options.length)];

  if (randOptions === "Rock") {
    computerSign.textContent = "";
    let rockIcon = document.createElement("i");
    rockIcon.classList.add("fa-solid", "fa-hand-back-fist");
    rockIcon.style.color = "#F6C951"
    computerSign.appendChild(rockIcon);
  } else if (randOptions === "Papper") {
    computerSign.textContent = "";
    let papperIcon = document.createElement("i");
    papperIcon.classList.add("fa-solid", "fa-hand");
    papperIcon.style.color = "#F6C951"
    computerSign.appendChild(papperIcon)
  } else {
    computerSign.textContent = "";
    let scissorsIcon = document.createElement("i");
    scissorsIcon.classList.add("fa-solid", "fa-hand-scissors");
    scissorsIcon.style.color = "#F6C951"
    computerSign.appendChild(scissorsIcon);
  }

  return randOptions;
}

console.log(typeof(computerScore))


function playRound(playerSelection) {
  
  let computerSelection = computerPlay();
  explain.innerText = "";
  if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Papper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Papper") {
    playerScore++ //DA DODAM +1
    document.getElementById("score-player").innerText = playerScore;
    console.log(playerScore)
    result.innerText = "You win " + playerSelection + " beats " + computerSelection

  } 
  else if (playerSelection === computerSelection) {
    result.innerText = "It's a tie";
    
  } else {
    computerScore++;
    document.getElementById("score-computer").innerText= computerScore;
    result.innerText = "You lose " + computerSelection  + " beats " + playerSelection
    console.log(computerScore)
  }

  console.log(playerSelection);
  console.log(computerSelection);
  
 
}


btnRock.addEventListener("click", function() {
  playRound("Rock");
  playerIcon.textContent = "";
  let rockIcon = document.createElement("i");
  rockIcon.classList.add("fa-solid", "fa-hand-back-fist");
  rockIcon.style.color = "#F6C951";
  playerIcon.appendChild(rockIcon);
  checkWinner();
});

btnPapper.addEventListener("click", function() {
  playRound("Papper");
  playerIcon.textContent = "";
  let papperIcon = document.createElement("i");
  papperIcon.classList.add("fa-solid", "fa-hand");
  papperIcon.style.color = "#F6C951";
  playerIcon.appendChild(papperIcon)
  checkWinner();
});

btnScissors.addEventListener("click", function() {
  playRound("Scissors");
  playerIcon.textContent = "";
  let scissorsIcon = document.createElement("i");
  scissorsIcon.classList.add("fa-solid", "fa-hand-scissors");
  scissorsIcon.style.color = "#F6C951";
  playerIcon.appendChild(scissorsIcon);
  checkWinner();
})

function checkWinner() { //Ovo treba da zavrsim 
  if (playerScore === 5) {
    result.innerText = "You won! Congratulations!";
    btnRock.disabled = true;
    btnPapper.disabled = true;
    btnScissors.disabled = true;
    btnReplay.classList.add("visible");
  } else if (computerScore === 5) {
    result.innerText = "You lost! Computer won";
    btnRock.disabled = true;
    btnPapper.disabled = true;
    btnScissors.disabled = true;
    btnReplay.classList.add("visible");
  }
}

btnReplay.addEventListener("click", function() {
  result.innerText = "Choose your weapon";
  explain.textContent = "First to win 5 points wins the game";
  playerScore = 0;
  computerScore = 0;
  document.getElementById("score-player").innerText = playerScore;
  document.getElementById("score-computer").innerText= computerScore;
  playerIcon.textContent = "?";
  computerSign.textContent = "?";

  btnRock.disabled = false;
  btnPapper.disabled = false;
  btnScissors.disabled = false;
  btnReplay.classList.remove("visible");  
})