const BackboneElement = require('./BackboneElement');

class ImplementationGuide_Dependency extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ImplementationGuide_Dependency';
	}

	// How the dependency is represented when the guide is published.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['reference', 'inclusion'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// Where the dependency is located.
	get uri () {
		return this._uri;
	}

	set uri ( new_value ) {
		this._uri = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type,
			uri: this._uri
		});
	}

}

module.exports = ImplementationGuide_Dependency;
