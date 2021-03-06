function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}
/*START GAME*/


const playGame = function(playerInput) {
    clearMessages();

    const getMoveName = function(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else(printMessage('Nie znam ruchu o id ' + argMoveId + '.'));
        return 'nieznany ruch';
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1),
        argcomputerMove = getMoveName(randomNumber),
        argplayerMove = getMoveName(playerInput);
    console.log('Wylosowana liczba to: ' + randomNumber);
    console.log('Gracz wpisał: ' + playerInput);

    printMessage('Twój ruch to: ' + argplayerMove);
    let resultComputer = 0;
    let resultPlayer = 0;

    const displayResult = function(argcomputerMove, argplayerMove) {
        console.log(argcomputerMove + argplayerMove);
        printMessage('Zagrałem ' + argcomputerMove + ', a Ty ' + argplayerMove);

        if (argcomputerMove == 'kamień' && argplayerMove == 'papier') {
            printMessage('Ty wygrywasz!');
            resultPlayer = resultPlayer + 1
        } else if (argcomputerMove == 'papier' && argplayerMove == 'kamień') {
            printMessage('Komputer wygrywa!');
            resultComputer = resultComputer + 1
        } else if (argcomputerMove == 'kamień' && argplayerMove == 'kamień') {
            printMessage('Remis!');
        } else if (argcomputerMove == 'papier' && argplayerMove == 'papier') {
            printMessage('Remis!');
        } else if (argcomputerMove == 'papier' && argplayerMove == 'nożyce') {
            printMessage('Ty wygrywasz!');
            resultPlayer = resultPlayer + 1
        } else if (argcomputerMove == 'nozyce' && argplayerMove == 'papier') {
            printMessage('Komputer wygrywa!');
            resultComputer = resultComputer + 1
        } else if (argcomputerMove == 'nożyce' && argplayerMove == 'nożyce') {
            printMessage('Remis!');
        } else if (argcomputerMove == 'nożyce' && argplayerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
            resultPlayer = resultPlayer + 1
        } else if (argcomputerMove == 'kamień' && argplayerMove == 'nożyce') {
            printMessage('Komputer wygrywa!');
            resultComputer = resultComputer + 1
        }

    }
    displayResult(argcomputerMove, argplayerMove)
    printMessage(" <div class=\"result\"> Gracz " + resultPlayer + ", Computer " + resultComputer + "</div>")


}
document.getElementById("play-rock").addEventListener("click", function() {
    playGame(1);
});

document.getElementById("play-paper").addEventListener("click", function() {
    playGame(2);
});
document.getElementById("play-scissors").addEventListener("click", function() {
    playGame(3);
});
/*playGame(3);

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
/*
    if (playerInput == '1') {
        playerMove = 'kamień';
    } else if (playerInput == '2') {
        playerMove = 'papier';
    } else if (playerInput == '3') {
        playerMove = 'nożyce';
    }
    */
/*
if (randomNumber == 1) {
    computerMove = 'kamień';
} else if (randoNumber == 2) {
    computerMove = 'papier';
} else if (randoNumber == 3) {
    computerMove = 'nozyce';
}
printMessage('Mój ruch to: ' + argcomputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce');*/