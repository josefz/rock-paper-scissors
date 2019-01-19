import Component from "/../../lib/component.js";

const htmlTemplate = `
        <div>
           <h1>TopScorers</h1>
        </div>
    `;

let TopScorersPage = new Component({
    model: {},
    view: htmlTemplate,
    controller: {}
});

export default TopScorersPage;
