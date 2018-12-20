const BackboneElement = require('./BackboneElement');

class CapabilityStatementRestResourceInteraction extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CapabilityStatementRestResourceInteraction';
		Object.assign(this, opt);
	}

	// This is a CapabilityStatementRestResourceInteraction resource
	static get __resourceType() {
		return 'CapabilityStatementRestResourceInteraction';
	}

	// Coded identifier of the operation, supported by the system resource.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		this.__code = new_value;
	}

	// Guidance specific to the implementation of this operation, such as \'delete is a logical delete\' or \'updates are only allowed with version id\' or \'creates permitted from pre-authorized certificates only\'.
	get documentation() {
		return this.__documentation;
	}

	set documentation(new_value) {
		this.__documentation = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code,
			documentation: this.__documentation,
		});
	}
}

module.exports = CapabilityStatementRestResourceInteraction;
