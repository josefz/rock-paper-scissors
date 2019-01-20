class EventManager {
    constructor() {
        this.events = {};
    }

    registerEvent( name, target, type, callback ) {
        if ( !this.events[ name ] ) {
            this.events[ name ] = {
                target: target,
                type: type,
                callback: callback
            }
        }
    }
}

const eventManager = new EventManager();

export default eventManager;
