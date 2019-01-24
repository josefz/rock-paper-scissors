import Round from './round';
import GAME_CONFIG from "../game-config";

describe( 'Round:', () => {
    let round;

    beforeAll( () => {
        round = new Round('rock');
    } );

    test( 'class should be defined', () => {
        expect( Round ).toBeDefined();
    } );

    test( 'should have all the default attributes defined', () => {
        expect( round.userchoice ).toBe( 'rock' );
        expect( round.computerChoice ).toBeDefined();
        expect( round.winner ).toBeDefined();
        expect( round.points ).toBeDefined();
    } );

    test( 'winner should be either user, computer or draw with type string', () => {
        const winnerOptions = [ 'user', 'computer', 'draw' ];
        expect( round.userchoice ).toBe( 'rock' );
        expect( winnerOptions.indexOf( round.winner ) ).not.toBe( -1 );
    } );

    test( 'computerChoice should be one of the movements defined', () => {
        expect( GAME_CONFIG.movements.indexOf( round.computerChoice ) ).not.toBe( -1 );
    } );

} );
