const BackboneElement = require('./BackboneElement');
const CodeScalar = require('./scalars/Code.scalar');
const Base64BinaryScalar = require('./scalars/Base64Binary.scalar');

class CapabilityStatementRestSecurityCertificate extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CapabilityStatementRestSecurityCertificate';
		Object.assign(this, opt);
	}

	// This is a CapabilityStatementRestSecurityCertificate resource
	static get __resourceType() {
		return 'CapabilityStatementRestSecurityCertificate';
	}

	// Mime type for a certificate.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field type`);
		}
		this.__type = new_value;
	}

	// Actual certificate.
	get blob() {
		return this.__blob;
	}

	set blob(new_value) {
		// Throw if new value does not match the pattern
		let pattern = Base64BinaryScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field blob`);
		}
		this.__blob = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type,
			blob: this.__blob,
		});
	}
}

module.exports = CapabilityStatementRestSecurityCertificate;
