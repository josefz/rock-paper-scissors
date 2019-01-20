class View {
    constructor( view ) {
        this.template = view.template;
        this.events = view.events;
    }

    render( target, model ) {
        target.innerHTML = this.template( model );
    }
}

export default View;
