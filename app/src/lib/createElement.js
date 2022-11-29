const isHtmlOrComponentOrString = (arg) => {
    return arg !== undefined && (arg instanceof HTMLElement || typeof arg === 'string' || 'isComponent' in arg);
}

const assignAttributes = (htmlElement, attributes) => {
    attributes.forEach(([key, value]) => {
        if(typeof value === 'boolean') {
	    htmlElement[key] = value;
	    return;
	}
	if(typeof value === 'string') {
	    htmlElement.setAttribute(key, value);
	}
    });
}

const assignEvents = (htmlElement, events) => {
    events.forEach(([key, value]) => {
        htmlElement.addEventListener(key.slice(2), value);
    });
}

export default (type, ...args) => {
    const element = document.createElement(type);
    const attributes = args.find(arg => {
        return !isHtmlOrComponentOrString(arg)
    });
    const innerContent = args.filter(isHtmlOrComponentOrString);

    if(attributes) {
        const attr = Object
		    .entries(attributes)
		    .filter(([key]) => !key.startsWith('on'));
	const events = Object
		    .entries(attributes)
		    .filter(([key]) => key.startsWith('on'));

	assignAttributes(element, attr);
	assignEvents(element, events);
    }

    if(innerContent) {
    	innerContent.forEach((child) => {
	    if(typeof child !== 'string' && 'isComponent' in child) {
	        const rendered = child.render();
		if(Array.isArray(rendered)) {
		    element.append(...rendered);
		} else {
		    element.append(rendered);
		}
	    } else {
	        element.append(child);
	    }
	});
    }

    return element;
}
