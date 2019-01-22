import Component from '../../lib/component.js';
import Game from '../../lib/game.js';

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
                                <div class="option" data-choice="rock">
                                    <div class="option__logo">
                                        <img src="../images/rock-logo.png">
                                    </div>
                                    <div class="option__name">
                                        Rock
                                    </div>
                                </div>
                                <div class="option" data-choice="paper">
                                    <div class="option__logo">
                                        <img src="../images/paper-logo.png">
                                    </div>
                                    <div class="option__name">
                                        Paper
                                    </div>
                                </div>
                                <div class="option" data-choice="scissors">
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
                            <div class="game-manager__message">
                               Choose your weapon!
                            </div>
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
                        ${renderComputerChoice(model.gameStatus)}
                    </div>
                </div>
                <div class="footer">
                    <div>
                        <div>Round: ${model.game.round}</div>
                    </div>
                    <div class="game-button game-button--red">
                        <a href="/">Exit</a>
                    </div>
                </div>
            </div>
        `
};

const renderComputerChoice = ( gameStatus ) => {
    if (!gameStatus.active){
        return `
                <div class="computer-option">
                    <div class="option">
                        ?
                     </div>
                </div>
                `
    } else {

        return `
                <div class="computer-option">
                    <div class="option-${gameStatus.computerChoice}"></div>                   
                </div>
                `
    }
};

let PlayPage = new Component( {
    name: 'play-page',
    model: {
        game: new Game(),
        gameStatus: {
            active: false
        }
    },
    view: {
        template: htmlTemplate,
        events: [ {
            selector: '.option',
            type: 'click',
            eventHandler: 'selectOption'
        } ]
    },
    controller: {
        eventHandlers: {
            selectOption( e ) {
                const choice = e.currentTarget.dataset.choice;
                //First we stop user animation and start computer animation
                PlayPage.model.gameStatus.active = true;
                const newRound = PlayPage.model.game.newRound( choice );
                PlayPage.model.gameStatus.computerChoice = newRound.computerChoice;
                PlayPage.load();
            }
        }
    }
} );

export default PlayPage;
