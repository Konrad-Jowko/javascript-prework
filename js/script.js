/* Functions */

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2){
    return 'papier';
  } else if(argMoveId == 3){
    return 'nożyce';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove){
  printMessage('Mój ruch to: ' + argComputerMove);
  printMessage('Twój ruch to: ' + argPlayerMove);
  if(argPlayerMove == 'nieznany ruch') {
    return 'Błędnie wpisałeś swój wybór! Spróbuj jeszcze raz :)';
  } else if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    return 'Ty wygrywasz!';
  } else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    return 'Ja wygrywam!';
  } else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    return 'Jest remis!';
  } else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
    return 'Jest remis!';
  }else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    return 'Ty wygrywasz!';
  } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    return 'Ja wygrywam!';
  } else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    return 'Ja wygrywam!';
  }else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    return 'Jest remis!';
  } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    return 'Ty wygrywasz!';
  }

}

/* Random Computer Move */

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

/* Player Move */

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

/* Printing Results */

printMessage(displayResult(argComputerMove, argPlayerMove));
