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

export default Controller;
