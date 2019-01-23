import Component from '../../lib/component/component.js';
import Game from '../../lib/game/game.js';

const GAME_STATE = {
    CHOOSING: 'choosing',
    RESULT: 'result'
};

const htmlTemplate = ( model ) => {
    return `
            <div id="play-page">
               <div class="content">
                    <div class="panel user-panel">
                        <div class="scoreboard">
                            <div class="scoreboard__title">
                                You
                            </div>
                            <div class="scoreboard__points">
                                ${model.game.userPoints}
                            </div>
                        </div>
                        <div class="options-container">
                            <div class="options-container__options">
                                <div class="option ${renderActiveClass( model.currentRound, 'rock' )}" data-choice="rock">
                                    <div class="option__logo">
                                        <img src="../images/rock-logo.png">
                                    </div>
                                    <div class="option__name">
                                        Rock
                                    </div>
                                </div>
                                <div class="option ${renderActiveClass( model.currentRound, 'paper' )}" data-choice="paper">
                                    <div class="option__logo">
                                        <img src="../images/paper-logo.png">
                                    </div>
                                    <div class="option__name">
                                        Paper
                                    </div>
                                </div>
                                <div class="option ${renderActiveClass( model.currentRound, 'scissors' )}" data-choice="scissors">
                                    <div class="option__logo">
                                        <img src="../images/scissors-logo.png">
                                    </div>
                                    <div class="option__name">
                                        Scissors
                                    </div>
                                </div>
                            </div>
                            <br>                            
                        </div>
                    </div>
                    <div class="panel center-panel">
                        <div class="scoreboard">
                            <div class="scoreboard__title">
                                Draws
                            </div>
                            <div class="scoreboard__points">
                                ${model.game.draws}
                            </div>
                        </div>
                        <div class="game-manager">
                            ${renderResult( model.currentRound )}
                        </div>
                    </div>
                    <div class="panel computer-panel">
                        <div class="scoreboard">
                            <div class="scoreboard__title">
                                Computer
                            </div>
                            <div class="scoreboard__points">
                                ${model.game.computerPoints}
                            </div>
                        </div>
                        ${renderComputerChoice( model.currentRound )}
                    </div>
                </div>
                <div class="footer">
                    <div class="round">Round: ${model.game.round}</div>
                    <div class="game-button game-button--red">
                        <a href="/">Exit</a>
                    </div>
                </div>
            </div>
        `
};

const renderActiveClass = ( round, option ) => {
    if ( !round ) {
        return '';
    }
    return (round.userchoice === option) ? 'chosen' : 'not-chosen';
};

const renderComputerChoice = ( round ) => {
    if ( !round ) {
        return `
                <div class="computer-option">
                    <div class="choosing">
                     </div>
                </div>
                `
    } else {
        return `
                <div class="computer-option">
                    <div class="game-result option-${round.computerChoice}"></div>                   
                </div>
        `
    }
};

const renderResult = ( round ) => {
    if ( !round ) {
        return ` 
            <div class="game-manager__message">
                Choose your weapon!
            </div>
        `
    } else {
        return `
            <div class="game-manager__message">
                ${(round.winner === 'user') ? 'YOU WIN!!!' : (round.winner === 'computer') ? 'Defeated...' : 'Draw!'}
            </div>
            <div id="retry-button" class="game-button game-button--orange">
                <a> Try again?</a>
            </div>
        `
    }
};

let PlayPage = new Component( {
    name: 'play-page',
    model: {
        game: new Game(),
        gameState: {
            currentState: GAME_STATE.CHOOSING
        }
    },
    view: {
        template: htmlTemplate,
        events: [ {
            selector: '.option',
            type: 'click',
            eventHandler: 'selectOption'
        }, {
            selector: '#retry-button',
            type: 'click',
            eventHandler: 'retry'
        } ]
    },
    controller: {
        eventHandlers: {
            selectOption( e ) {
                const choice = e.currentTarget.dataset.choice;
                //We generate new round and then reload the view with the new model
                PlayPage.model.currentRound = PlayPage.model.game.newRound( choice );
                PlayPage.load();
            },
            retry() {
                //We set the currentRound to undefined to start over
                PlayPage.model.currentRound = undefined;
                PlayPage.load();
            }
        }
    }
} );

export default PlayPage;
