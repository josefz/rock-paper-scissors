class Router {

    constructor( selector ) {
        this.target = document.querySelector( selector );
        this.routes = [];
        this.hashChange = this.hashChange.bind( this );

        window.addEventListener( 'hashchange', this.hashChange );
        window.addEventListener( 'DOMContentLoaded', this.hashChange );
    }

    addRoute( path, component ) {
        this.routes.push( {
            path,
            component
        } )
    }

    hashChange() {
        const hash = window.location.hash;
        const route = this.routes.filter( route => hash === route.path )[ 0 ];

        if ( route ) {
            this.updateView( route.component );
        } else {
            this.updateView();
        }
    };

    updateView( component ) {
        if ( !component ) {
            this.target.innerHTML = '<h3>Not Found</h3>';
        } else {
            component.load(this.target);
        }
    }
}

export default Router;
