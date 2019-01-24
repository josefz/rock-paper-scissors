import Controller from './controller';

const controllerDefinition = {
    eventHandlers: {
        function1() {
            return 'ok1';
        },
        function2() {
            return 'ok2';
        }
    }
};

const modelDefinition = {
    test: true
};

describe( 'Controller:', () => {
    let controller;

    beforeAll( () => {
        controller = new Controller( controllerDefinition, modelDefinition );
    } );

    test( 'class should be defined', () => {
        expect( Controller ).toBeDefined();
        expect( controller ).toBeInstanceOf( Controller );
    } );

    test( 'should have a controller and a model attached', () => {
        expect( controller.controller ).toBeDefined();
        expect( controller.model ).toEqual( {test: true} );
    } );

    test( 'should create methods for all the eventHandlers sent in the definition', () => {
        expect( controller.function1() ).toBe( 'ok1' );
        expect( controller.function2() ).toBe( 'ok2' );
    } );
} );

