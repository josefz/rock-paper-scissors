import Component from './component';

const componentDefinition = {
    name: 'test-page',
    model: {
        test: 'test'
    },
    view: {
        template: () => `<div></div>`
    },
    controller: {}
};

describe( 'Component:', () => {
    let component;

    beforeAll( () => {
        component = new Component( componentDefinition );
    } );

    test( 'class should be defined', () => {
        expect( Component ).toBeDefined();
        expect( component ).toBeInstanceOf( Component );
    } );

    test( 'should have all the default attributes initialized', () => {
        expect( component.target ).toBe( null );
        expect( component.name ).toBe( 'test-page' );
        expect( component.model ).toEqual( {
            test: 'test'
        } );
        expect( component.view ).toBeDefined();
        expect( component.controller ).toBeDefined();
    } );

    test( 'should to have a load method', () => {
        expect( component.load ).toBeDefined();
    } );

    test( 'should load the view', () => {
        //we mock render function
        const myMock = jest.fn();
        component.view.render = myMock;
        //then we call the load function
        component.load();
        expect( myMock.mock.calls.length ).toBe( 1 );
    } );
} );

