import View from './view.js';
import Controller from './controller.js';

class Component {
    constructor( component ) {
        this.name = component.name;
        this.model = component.model;
        this.view = new View( component.view );
        this.controller = new Controller( component.controller, component.model, component.view );
    }

    load( target ) {
        //Update model
        this.controller.updateModel && this.controller.updateModel();
        // Load view
        this.view.render( target, this.model );
        //Wire up events
        this.view.events && this.view.events.forEach( event => {
            target.querySelector( event.selector ).addEventListener( event.type, this.controller[ event.eventHandler ] );
        } );
    }
}

export default Component;
