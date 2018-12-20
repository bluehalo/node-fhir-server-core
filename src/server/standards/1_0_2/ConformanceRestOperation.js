const BackboneElement = require('./BackboneElement');

class ConformanceRestOperation extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConformanceRestOperation';
		Object.assign(this, opt);
	}

	// This is a ConformanceRestOperation resource
	static get __resourceType() {
		return 'ConformanceRestOperation';
	}

	// The name of a query, which is used in the _query parameter when the query is called.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// Where the formal definition can be found.
	get definition() {
		return this.__definition;
	}

	set definition(new_value) {
		const Reference = require('./Reference');
		this.__definition = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			name: this.__name,
			definition: this.__definition && this.__definition.toJSON(),
		});
	}
}

module.exports = ConformanceRestOperation;
