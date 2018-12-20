const BackboneElement = require('./BackboneElement');

class TestScriptDestination extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScriptDestination';
		Object.assign(this, opt);
	}

	// This is a TestScriptDestination resource
	static get __resourceType() {
		return 'TestScriptDestination';
	}

	// Abstract name given to a destination server in this test script.  The name is provided as a number starting at 1.
	get index() {
		return this.__index;
	}

	set index(new_value) {
		this.__index = new_value;
	}

	// The type of destination profile the test system supports.
	get profile() {
		return this.__profile;
	}

	set profile(new_value) {
		const Coding = require('./Coding');
		this.__profile = new Coding(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			index: this.__index,
			profile: this.__profile && this.__profile.toJSON(),
		});
	}
}

module.exports = TestScriptDestination;
