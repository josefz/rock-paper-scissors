import Game from './game';

//mock for Round class
import Round from '../round/round';

jest.mock( '../round/round', () => {
    //We send the winner as an argument to the mocked function
    return jest.fn().mockImplementation( ( winner ) => {
        return {
            userChoice: 'rock',
            computerChoice: 'rock',
            points: 1,
            winner: winner
        };
    } );
} );

describe( 'Game:', () => {
    let game;

    beforeEach( () => {
        game = new Game();
    } );

    test( 'class should be defined', () => {
        expect( Game ).toBeDefined();
        expect( game ).toBeInstanceOf( Game );
    } );

    test( 'should have all the initial properties set', () => {
        expect( game.userPoints ).toBe( 0 );
        expect( game.computerPoints ).toBe( 0 );
        expect( game.draws ).toBe( 0 );
        expect( game.round ).toBe( 0 );
        expect( game.rounds ).toEqual( [] );
    } );

    test( 'should be able to create and store new rounds', () => {
        const winner = 'user';
        expect( game.newRound ).toBeInstanceOf( Function );
        game.newRound( winner ); //We send the winner to the mocked Fn.
        expect( game.round ).toBe( 1 );
        expect( game.rounds[ 0 ] ).toEqual( {
            userChoice: 'rock',
            computerChoice: 'rock',
            points: 1,
            winner: 'user'
        } );
    } );

    test( 'newRound function should add the points to the right winner', () => {
        //Case Draw
        const winner1 = 'draw';
        game.newRound( winner1 );
        expect( game.draws ).toBe( 1 );
        expect( game.computerPoints ).toBe( 0 );
        expect( game.userPoints ).toBe( 0 );
        //Case user wins
        const winner2 = 'user';
        game.newRound( winner2 );
        expect( game.draws ).toBe( 1 );
        expect( game.computerPoints ).toBe( 0 );
        expect( game.userPoints ).toBe( 1 );

        //Case computer wins
        const winner3 = 'computer';
        game.newRound( winner3 );
        expect( game.draws ).toBe( 1 );
        expect( game.computerPoints ).toBe( 1 );
        expect( game.userPoints ).toBe( 1 );
    } );

} );
