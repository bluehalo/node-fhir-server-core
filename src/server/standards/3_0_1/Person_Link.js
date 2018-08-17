const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class Person_Link extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Person_Link';
	}

	// The resource to which this actual person is associated.
	get target () {
		return this._target;
	}

	set target ( new_value ) {
		this._target = new Reference(new_value);
	}

	// Level of assurance that this link is actually associated with the target resource.
	get assurance () {
		return this._assurance;
	}

	set assurance ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['level1', 'level2', 'level3', 'level4'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field assurance`);
		}
		this._assurance = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			target: this._target && this._target.toJSON(),
			assurance: this._assurance
		});
	}

}

module.exports = Person_Link;
