import Router from './router';

describe( 'Router:', () => {
    let router;
    //root element
    const testElement = document.createElement( 'div' );
    testElement.innerHTML = `<div id="app"></div>`;
    //path & component
    const rootPath = '/test';
    const fakeComponent = {
        controller: 'controller',
        model: 'model',
        view: 'view'
    };

    beforeAll( () => {
        router = new Router( '#app' );
        router.target = testElement;
    } );

    test( 'class should be defined', () => {
        expect( Router ).toBeDefined();
    } );

    test( 'should have all the attributes and functions defined', () => {
        expect( router.target ).toEqual( testElement );
        expect( router.routes ).toEqual( [] );
        expect( router.hashChange ).toBeInstanceOf( Function );
        expect( router.addRoute ).toBeInstanceOf( Function );
        expect( router.updateView ).toBeInstanceOf( Function );
    } );

    test( 'should be able to add routes', () => {
        router.addRoute( rootPath, fakeComponent );
        expect( router.routes[ 0 ].path ).toEqual( '/test' );
        expect( router.routes[ 0 ].component.controller ).toEqual( 'controller' );
        expect( router.routes[ 0 ].component.view ).toEqual( 'view' );
        expect( router.routes[ 0 ].component.model ).toEqual( 'model' );
    } );

    test( 'should update the view when invoked', () => {
        const myMock = jest.fn();
        fakeComponent.load = myMock;
        router.updateView( fakeComponent );
        expect( myMock.mock.calls.length ).toBe( 1 );
    } );

    test( 'should render Not found if no component is passed', () => {
        router.updateView();
        router.target.innerHTML = '<h3>Not Found</h3>';
    } );
} );
