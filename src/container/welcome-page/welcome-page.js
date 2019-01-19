import Component from "/../../lib/component.js";

const htmlTemplate = `
        <div id="main-container">
            <div class="game-title-container">
                <div class="game-title">
                    ROCK PAPER SCISSORS
                </div>
                <div class="game-logo">
                    <img src="../images/logo.png">
                </div>
            </div>
            <div class="game-options">
                <div class="game-option game-option__orange">
                    <a href="/#/play">Play</a>
                </div>
                <div class="game-option game-option__green">
                    <!--<button onclick="">Top Scorers</button>-->
                    <a href="/#/top-scorers">Top Scorers</a>
                </div>
            </div>
        </div>
    `;

let WelcomePage = new Component( {
    model: {},
    view: htmlTemplate,
    controller: {}
} );

export default WelcomePage;
