class Controller {
    constructor( controller, model ) {
        this.model = model;
        this.controller = controller;

        //Define dynamically event handlers
        if ( controller.eventHandlers ) {
            Object.keys( controller.eventHandlers ).forEach( eventHandler => {
                this[ eventHandler ] = controller.eventHandlers[ eventHandler ];
            } );
        }
    }
}

export default Controller;
