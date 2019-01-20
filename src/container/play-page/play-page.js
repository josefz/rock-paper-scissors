import Component from "/../../lib/component.js";

const htmlTemplate = ( model ) => {
    return `
            <div id="play-page">
               <header class="header">
                    <nav>
                        <div>Points: ${model.user.points}</div>
                    </nav>
               </header>
               <div class="content">
                    <div class="selection-phase">
                        <div class="content-title">Choose an option</div>
                        <div class="content-options">
                            <div id="option-rock" class="option">Rock</div>
                            <div class="option">Paper</div>
                            <div class="option">Scissors</div>
                        </div>
                    </div>
                </div>
            </div>
        `
};

let PlayPage = new Component( {
    name: 'play-page',
    model: {
        user: {
            name: null,
            points: 12,
            games: []
        }
    },
    view: {
        template: htmlTemplate,
        events: [{
            selector: '#option-rock',
            type: 'click',
            eventHandler: 'selectOption'
        }]
    },
    controller: {
        updateModel(){
            console.log('update model');
        },
        eventHandlers: {
            selectOption(e){
                const target = e.currentTarget;
                console.log('works', target);
            }
        }
    }
} );

export default PlayPage;
