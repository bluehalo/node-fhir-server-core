const BackboneElement = require('./BackboneElement');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class CompositionAttester extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CompositionAttester';
		Object.assign(this, opt);
	}

	// This is a CompositionAttester resource
	static get __resourceType() {
		return 'CompositionAttester';
	}

	// The type of attestation the authenticator offers.
	get mode() {
		return this.__mode;
	}

	set mode(new_value) {
		this.__mode = Array.isArray(new_value) ? new_value : [new_value];
	}

	// When composition was attested by the party.
	get time() {
		return this.__time;
	}

	set time(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field time`);
		}
		this.__time = new_value;
	}

	// Who attested the composition in the specified way.
	get party() {
		return this.__party;
	}

	set party(new_value) {
		const Reference = require('./Reference');
		this.__party = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			mode: this.__mode,
			time: this.__time,
			party: this.__party && this.__party.toJSON(),
		});
	}
}

module.exports = CompositionAttester;
