const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class TestScript_Capability extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestScript_Capability';
	}

	// Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.
	get required () {
		return this._required;
	}

	set required ( new_value ) {
		this._required = new_value;
	}

	// Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.
	get validated () {
		return this._validated;
	}

	set validated ( new_value ) {
		this._validated = new_value;
	}

	// Description of the capabilities that this test script is requiring the server to support.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Which origin server these requirements apply to.
	get origin () {
		return this._origin;
	}

	set origin ( new_value ) {
		this._origin = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Which server these requirements apply to.
	get destination () {
		return this._destination;
	}

	set destination ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field destination`);
		}
		this._destination = new_value;
	}

	// Links to the FHIR specification that describes this interaction and the resources involved in more detail.
	get link () {
		return this._link;
	}

	set link ( new_value ) {
		this._link = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Minimum capabilities required of server for test script to execute successfully.   If server does not meet at a minimum the referenced capability statement, then all tests in this script are skipped.
	get capabilities () {
		return this._capabilities;
	}

	set capabilities ( new_value ) {
		this._capabilities = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			required: this._required,
			validated: this._validated,
			description: this._description,
			origin: this._origin,
			destination: this._destination,
			link: this._link,
			capabilities: this._capabilities && this._capabilities.toJSON()
		});
	}

}

module.exports = TestScript_Capability;
