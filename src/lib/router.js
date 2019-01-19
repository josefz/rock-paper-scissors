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
        //ToDo: Unit tests this filter so it only works with the right path
        const hash = window.location.hash;
        const route = this.routes.filter( route => hash === route.path )[ 0 ];

        if ( route ) {
            this.showComponent( route.component );
        } else {
            this.showComponent();
        }
    };

    showComponent( component ) {
        if ( !component ) {
            this.target.innerHTML = '<h3>Not Found</h3>';
        } else {
            this.target.innerHTML = component.view;
        }
    }
}

export default Router;
