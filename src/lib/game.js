import Round from './round.js';

class Game {
    constructor() {
        this.userPoints = 0;
        this.computerPoints = 0;
        this.draws = 0;
        this.round = 0;
        this.rounds = [];
    }

    newRound( choice ) {
        const newRound = new Round( choice );
        switch ( newRound.winner ) {
            case 'user':
                this.userPoints = this.userPoints + newRound.points;
                break;
            case 'computer':
                this.computerPoints = this.computerPoints + newRound.points;
                break;
            case 'draw':
                this.draws = this.draws + newRound.points;
                break;
        }
        if ( newRound.winner === 'user' ) {

        } else if ( newRound.winner === 'computer' ) {

        }
        this.round++;
        this.rounds.push( newRound );
        return newRound;
    }
}

export default Game;
