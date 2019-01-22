const GAME_CONFIG = {

    // Each game gives N points to winner
    pointsPerGame: 1,

    // User movements
    movements: [ 'rock', 'paper', 'scissors' ],

    // Hashmap of Movements:
    // Object key wins over values in the array
    // I.E. Rock wins over Scissors
    winsAgainstMap: {
        rock: [ 'scissors' ],
        paper: [ 'rock' ],
        scissors: [ 'paper' ]
    }
};

export default GAME_CONFIG;
