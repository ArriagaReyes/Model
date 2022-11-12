export default class Consequence {
    constructor() {
        this.events = {};
    }

    checkName(name) {
        if(typeof name === 'undefined' || name === '') {
            console.warn('Missing event name');
            return false;
        }

        return true;
    }

    on(name, callback) {
        if(!this.checkName(name)) return null;

        if(typeof callback === 'undefined') {
            console.warn('Missing callback function');
            return false;
        }

        if(this.events[ name ]) {
            console.log(`Overriding original callback for ${name} event`);
        } else {
            console.log(`Creating new ${name} event`);
        }

        this.events[ name ] = callback;
    }

    off(name) {
        if(!this.checkName(name)) return null;

        if(this.events[ name ]) {
            console.log(`Removing ${name} event`);
            delete this.events[ name ];
        } else {
            console.warn(`Could not find ${name} event`);
        }
    }

    trigger(name, args) {
        if(!this.checkName(name)) return null;

        args = !(args instanceof Object) ? {} : args;

        if(!this.events[ name ]) {
            console.warn(`Could not find ${name} event`);
        }

        console.log(`Calling ${name} event`);
        this.events[ name ](args);
    }
}