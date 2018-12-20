const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class TestScriptMetadataCapability extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScriptMetadataCapability';
		Object.assign(this, opt);
	}

	// This is a TestScriptMetadataCapability resource
	static get __resourceType() {
		return 'TestScriptMetadataCapability';
	}

	// Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.
	get required() {
		return this.__required;
	}

	set required(new_value) {
		this.__required = new_value;
	}

	// Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.
	get validated() {
		return this.__validated;
	}

	set validated(new_value) {
		this.__validated = new_value;
	}

	// Description of the capabilities that this test script is requiring the server to support.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Which origin server these requirements apply to.
	get origin() {
		return this.__origin;
	}

	set origin(new_value) {
		this.__origin = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Which server these requirements apply to.
	get destination() {
		return this.__destination;
	}

	set destination(new_value) {
		this.__destination = new_value;
	}

	// Links to the FHIR specification that describes this interaction and the resources involved in more detail.
	get link() {
		return this.__link;
	}

	set link(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field link`);
		}
		this.__link = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Minimum capabilities required of server for test script to execute successfully.   If server does not meet at a minimum the referenced capability statement, then all tests in this script are skipped.
	get capabilities() {
		return this.__capabilities;
	}

	set capabilities(new_value) {
		const Reference = require('./Reference');
		this.__capabilities = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			required: this.__required,
			validated: this.__validated,
			description: this.__description,
			origin: this.__origin,
			destination: this.__destination,
			link: this.__link,
			capabilities: this.__capabilities && this.__capabilities.toJSON(),
		});
	}
}

module.exports = TestScriptMetadataCapability;
