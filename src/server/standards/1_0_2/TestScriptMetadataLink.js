const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class TestScriptMetadataLink extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScriptMetadataLink';
		Object.assign(this, opt);
	}

	// This is a TestScriptMetadataLink resource
	static get __resourceType() {
		return 'TestScriptMetadataLink';
	}

	// URL to a particular requirement or feature within the FHIR specification.
	get url() {
		return this.__url;
	}

	set url(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field url`);
		}
		this.__url = new_value;
	}

	// Short description of the link.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			url: this.__url,
			description: this.__description,
		});
	}
}

module.exports = TestScriptMetadataLink;
