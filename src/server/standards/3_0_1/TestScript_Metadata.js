const BackboneElement = require('./BackboneElement');
const TestScript_Link = require('./TestScript_Link');
const TestScript_Capability = require('./TestScript_Capability');

class TestScript_Metadata extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestScript_Metadata';
	}

	// A link to the FHIR specification that this test is covering.
	get link () {
		return this._link;
	}

	set link ( new_value ) {
		this._link = Array.isArray(new_value) ? new_value.map(val => new TestScript_Link(val)) : [new TestScript_Link(new_value)];
	}

	// Capabilities that must exist and are assumed to function correctly on the FHIR server being tested.
	get capability () {
		return this._capability;
	}

	set capability ( new_value ) {
		this._capability = Array.isArray(new_value) ? new_value.map(val => new TestScript_Capability(val)) : [new TestScript_Capability(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			link: this._link && this._link.map(v => v.toJSON()),
			capability: this._capability && this._capability.map(v => v.toJSON())
		});
	}

}

module.exports = TestScript_Metadata;
