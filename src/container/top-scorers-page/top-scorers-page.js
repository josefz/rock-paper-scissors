import Component from "/../../lib/component.js";

const htmlTemplate = () => `
        <div>
           <h1>TopScorers</h1>
        </div>
    `;

let TopScorersPage = new Component( {
    name: 'top-scorers-page',
    model: {},
    view: {
        template: htmlTemplate
    },
    controller: {}
} );

export default TopScorersPage;
