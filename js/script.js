{
/* Functions */

const getMoveName = function (argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

const displayResult = function (argComputerMove, argPlayerMove) {
  printMessage('Mój ruch to: ' + argComputerMove);
  printMessage('Twój ruch to: ' + argPlayerMove);
  if (argPlayerMove == 'nieznany ruch') {
    return 'Błędnie wpisałeś swój wybór! Spróbuj jeszcze raz :)';
  } else if ( argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień' ) {
    return 'Ty wygrywasz!';
  } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce' || argComputerMove == 'papier' && argPlayerMove == 'kamień' || argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
    return 'Ja wygrywam!';
  } else {
    return 'Jest remis!';
  }
}

const playGame = function (playerInput) {
clearMessages();
  /* Random Computer Move */

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  const argComputerMove = getMoveName(randomNumber);

  /* Player Move */

  const argPlayerMove = getMoveName(playerInput);

  /* Printing Results */

  printMessage(displayResult(argComputerMove, argPlayerMove));
}

/* Reactive Buttons */

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
}
