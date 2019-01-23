import View from '../view.js';
import Controller from '../controller.js';

class Component {
    constructor( component ) {
        this.target = null;
        this.name = component.name;
        this.model = component.model;
        this.view = new View( component.view );
        this.controller = new Controller( component.controller, component.model );
    }

    load( target ) {
        if ( target ) {
            this.target = target;
        }
        // Load view
        this.view.render( this.target, this.model );
        //Wire up events
        this.view.events && this.view.events.forEach( event => {
            this.target.querySelectorAll( event.selector ).forEach( elem => elem.addEventListener( event.type, this.controller[ event.eventHandler ] ) );
        } );
    }
}

export default Component;
