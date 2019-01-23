import Component from "/../../lib/component/component.js";

const htmlTemplate = (model) => `
        <div id="welcome-page">
            <div class="game-title-container">
                <div class="game-logo">
                    <img src="../images/logo-v2.png">
                </div>
            </div>
            <div class="game-options">
                <div class="game-button game-button--orange">
                    <a href="/#/play">Play</a>
                </div>
            </div>
    `;

let WelcomePage = new Component( {
    name: 'welcome-page',
    model: {},
    view: {
        template: htmlTemplate
    },
    controller: {}
} );

export default WelcomePage;
