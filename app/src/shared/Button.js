import createElement from '../lib/createElement';
import Component from '../lib/Component';

export default class ButtonComponent extends Component {
    constructor({ text, callback, className = 'border-2 border-rose-500' }) {
        super();

	if(typeof text !== 'string' || text == undefined)
	    throw Error('Invalid or missing text');

	if(typeof callback !== 'function' || callback == undefined)
	    throw Error('Invalid or missing callback function');

        this.className = className;
	this.text = text;
	this.callback = callback;
    }

    click(e) {
	e.preventDefault();
        this.callback();
    }

    render() {
    	return createElement('button', this.text, {
	    onclick: this.click.bind(this),
	    'class': this.className
	});
    }
}
