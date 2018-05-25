const Element = require('./Element');
const CodeableConcept = require('./CodeableConcept');
const Period = require('./Period');
const Reference = require('./Reference');

class Identifier extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Identifier';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Identifier';
	}

	// The purpose of this identifier.
	get use () {
		return this._use;
	}

	set use ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['usual', 'official', 'temp', 'secondary'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field use`);
		}
		this._use = new_value;
	}

	// A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._type = new CodeableConcept(new_value);
	}

	// Establishes the namespace for the value - that is, a URL that describes a set values that are unique.
	get system () {
		return this._system;
	}

	set system ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._system = new_value;
	}

	// The portion of the identifier typically relevant to the user and which is unique within the context of the system.
	get value () {
		return this._value;
	}

	set value ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._value = new_value;
	}

	// Time period during which identifier is/was valid for use.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._period = new Period(new_value);
	}

	// Organization that issued/manages the identifier.
	get assigner () {
		return this._assigner;
	}

	set assigner ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._assigner = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			use: this.use,
			type: this.type && this.type.toJSON(),
			system: this.system,
			value: this.value,
			period: this.period && this.period.toJSON(),
			assigner: this.assigner && this.assigner.toJSON()
		});
	}

}

module.exports = Identifier;
