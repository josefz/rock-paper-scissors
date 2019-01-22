import GAME_CONFIG from './game-config.js';

class Round {
    constructor( choice ) {
        this.userchoice = choice;
        this.computerChoice = randomChoice();
        this.winner = calculateWinner( this.userchoice, this.computerChoice );
        this.points = GAME_CONFIG.pointsPerGame;
    }
}

function randomChoice() {
    return GAME_CONFIG.movements[ Math.floor( Math.random() * GAME_CONFIG.movements.length ) ];
}

function calculateWinner( userChoice, computerChoice ) {
    if ( userChoice === computerChoice ) {
        return 'draw';
    } else {
        return (GAME_CONFIG.winsAgainstMap[ userChoice ][ 0 ] === computerChoice) ? 'user' : 'computer';
    }
}

export default Round;
