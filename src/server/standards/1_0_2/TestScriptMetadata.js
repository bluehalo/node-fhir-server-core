const BackboneElement = require('./BackboneElement');

class TestScriptMetadata extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScriptMetadata';
		Object.assign(this, opt);
	}

	// This is a TestScriptMetadata resource
	static get __resourceType() {
		return 'TestScriptMetadata';
	}

	// A link to the FHIR specification that this test is covering.
	get link() {
		return this.__link;
	}

	set link(new_value) {
		const TestScriptMetadataLink = require('./TestScriptMetadataLink');
		this.__link = Array.isArray(new_value)
			? new_value.map(val => new TestScriptMetadataLink(val))
			: [new TestScriptMetadataLink(new_value)];
	}

	// Capabilities that must exist and are assumed to function correctly on the FHIR server being tested.
	get capability() {
		return this.__capability;
	}

	set capability(new_value) {
		const TestScriptMetadataCapability = require('./TestScriptMetadataCapability');
		this.__capability = Array.isArray(new_value)
			? new_value.map(val => new TestScriptMetadataCapability(val))
			: [new TestScriptMetadataCapability(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			link: this.__link && this.__link.map(v => v.toJSON()),
			capability: this.__capability && this.__capability.map(v => v.toJSON()),
		});
	}
}

module.exports = TestScriptMetadata;
