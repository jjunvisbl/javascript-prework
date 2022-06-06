function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}
/*START GAME*/

function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        argcomputerMove = 'papier';
        return 'papier';
    } else if (argMoveId == 3) {
        argcomputerMove = 'nozyce';
        return 'nozyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argcomputerMove = getMoveName(randomNumber);


/*
if (randomNumber == 1) {
    computerMove = 'kamień';
} else if (randoNumber == 2) {
    computerMove = 'papier';
} else if (randoNumber == 3) {
    computerMove = 'nozyce';
}
printMessage('Mój ruch to: ' + computerMove);
*/
let argplayerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + argplayerInput);

let argplayerMove = getMoveName(argplayerInput);


/*
if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);
*/
function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
    } else if (argcomputerMove == 'papier' && argplayerMove == 'kamień') {
        printMessage('Komputer wygrywa!');
    } else if (argcomputerMove == 'kamień' && argplayerMove == 'kamień') {
        printMessage('Remis!');
    } else if (argcomputerMove == 'papier' && argplayerMove == 'papier') {
        printMessage('Remis!');
    } else if (argcomputerMove == 'papier' && argplayerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
    } else if (argcomputerMove == 'nozyce' && argplayerMove == 'papier') {
        printMessage('Komputer wygrywa!');
    } else if (argcomputerMove == 'nożyce' && argplayerMove == 'nożyce') {
        printMessage('Remis!');
    } else if (argcomputerMove == 'nożyce' && argplayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
    }
}

/*
if (computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'kamień') {
    printMessage('Komputer wygrywa!');
} else if (computerMove == 'kamień' && playerMove == 'kamień') {
    printMessage('Remis!');
} else if (computerMove == 'papier' && playerMove == 'papier') {
    printMessage('Remis!');
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'nozyce' && playerMove == 'papier') {
    printMessage('Komputer wygrywa!');
} else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
    printMessage('Remis!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
};
*/