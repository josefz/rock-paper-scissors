import View from './view';

describe( 'View:', () => {
    const template = (model) => `<div class="${model.greetings}">Hi!</div>`;
    const events = [ {
        selector: '.option',
        type: 'click',
        eventHandler: 'selectOption'
    }, {
        selector: '#retry-button',
        type: 'click',
        eventHandler: 'retry'
    } ];
    const view = new View({
        template: template,
        events: events
    });

    test( 'class should be defined', () => {
        expect( View ).toBeDefined();
        expect( view ).toBeInstanceOf( View );
    } );

    test( 'should receive a template function and a list of events', () => {
        expect( view.template ).toBeInstanceOf( Function );
        expect( view.template ).toBeInstanceOf( Function );
        expect( view.events ).toBeInstanceOf( Array );
        expect( view.events ).toEqual( events );
    } );

    test( 'should have a render function that inserts the html the template in the given target', () => {
        const elem = document.createElement('div');
        const model ={
            greetings: 'hi-class'
        };
        expect( view.render ).toBeInstanceOf( Function );
        view.render(elem, model);
        expect(elem.innerHTML).toEqual('<div class="hi-class">Hi!</div>');
    } );

} );

