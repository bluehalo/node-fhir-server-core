const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class Condition_Evidence extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Condition_Evidence';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Condition_Evidence';
	}

	// A manifestation or symptom that led to the recording of this condition.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._code = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Links to other relevant information, including pathology reports.
	get detail () {
		return this._detail;
	}

	set detail ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._detail = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this.code.map(v => v.toJSON()),
			detail: this.detail.map(v => v.toJSON())
		});
	}

}

module.exports = Condition_Evidence;
