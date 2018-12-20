const BackboneElement = require('./BackboneElement');

class CapabilityStatementDocument extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CapabilityStatementDocument';
		Object.assign(this, opt);
	}

	// This is a CapabilityStatementDocument resource
	static get __resourceType() {
		return 'CapabilityStatementDocument';
	}

	// Mode of this document declaration - whether an application is a producer or consumer.
	get mode() {
		return this.__mode;
	}

	set mode(new_value) {
		this.__mode = new_value;
	}

	// A description of how the application supports or uses the specified document profile.  For example, when documents are created, what action is taken with consumed documents, etc.
	get documentation() {
		return this.__documentation;
	}

	set documentation(new_value) {
		this.__documentation = new_value;
	}

	// A constraint on a resource used in the document.
	get profile() {
		return this.__profile;
	}

	set profile(new_value) {
		const Reference = require('./Reference');
		this.__profile = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			mode: this.__mode,
			documentation: this.__documentation,
			profile: this.__profile && this.__profile.toJSON(),
		});
	}
}

module.exports = CapabilityStatementDocument;
