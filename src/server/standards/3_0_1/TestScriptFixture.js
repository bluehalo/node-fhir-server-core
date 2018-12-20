const BackboneElement = require('./BackboneElement');

class TestScriptFixture extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScriptFixture';
		Object.assign(this, opt);
	}

	// This is a TestScriptFixture resource
	static get __resourceType() {
		return 'TestScriptFixture';
	}

	// Whether or not to implicitly create the fixture during setup. If true, the fixture is automatically created on each server being tested during setup, therefore no create operation is required for this fixture in the TestScript.setup section.
	get autocreate() {
		return this.__autocreate;
	}

	set autocreate(new_value) {
		this.__autocreate = new_value;
	}

	// Whether or not to implicitly delete the fixture during teardown. If true, the fixture is automatically deleted on each server being tested during teardown, therefore no delete operation is required for this fixture in the TestScript.teardown section.
	get autodelete() {
		return this.__autodelete;
	}

	set autodelete(new_value) {
		this.__autodelete = new_value;
	}

	// Reference to the resource (containing the contents of the resource needed for operations).
	get resource() {
		return this.__resource;
	}

	set resource(new_value) {
		const Reference = require('./Reference');
		this.__resource = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			autocreate: this.__autocreate,
			autodelete: this.__autodelete,
			resource: this.__resource && this.__resource.toJSON(),
		});
	}
}

module.exports = TestScriptFixture;
