const BackboneElement = require('./BackboneElement');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class DetectedIssueMitigation extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DetectedIssueMitigation';
		Object.assign(this, opt);
	}

	// This is a DetectedIssueMitigation resource
	static get __resourceType() {
		return 'DetectedIssueMitigation';
	}

	// Describes the action that was taken or the observation that was made that reduces/eliminates the risk associated with the identified issue.
	get action() {
		return this.__action;
	}

	set action(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__action = new CodeableConcept(new_value);
	}

	// Indicates when the mitigating action was documented.
	get date() {
		return this.__date;
	}

	set date(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this.__date = new_value;
	}

	// Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
	get author() {
		return this.__author;
	}

	set author(new_value) {
		const Reference = require('./Reference');
		this.__author = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			action: this.__action && this.__action.toJSON(),
			date: this.__date,
			author: this.__author && this.__author.toJSON(),
		});
	}
}

module.exports = DetectedIssueMitigation;
