const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class Patient_Link extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Patient_Link';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Patient_Link';
	}

	// The other patient resource that the link refers to.
	get other () {
		return this._other;
	}

	set other ( new_value ) {
		this._other = new Reference(new_value);
	}

	// The type of link between this patient resource and another patient resource.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['replaced-by', 'replaces', 'refer', 'seealso'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			other: this.other && this.other.toJSON(),
			type: this.type
		});
	}

}

module.exports = Patient_Link;
