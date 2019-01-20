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

class View {
    constructor( view ) {
        this.template = view.template;
        this.events = view.events;
    }

    render( target, model ) {
        target.innerHTML = this.template( model );
    }
}

class Controller {
    constructor( controller, model, view ) {
        this.model = model;
        this.view = view;
        this.controller = controller;
        this.updateModel = controller.updateModel || null;

        //Define dynamically event handlers
        if ( controller.eventHandlers ) {
            Object.keys( controller.eventHandlers ).forEach( eventHandler => {
                this[ eventHandler ] = controller.eventHandlers[ eventHandler ];
            } );
        }
    }

}

export default Component;
