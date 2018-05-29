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
		this._code = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Links to other relevant information, including pathology reports.
	get detail () {
		return this._detail;
	}

	set detail ( new_value ) {
		this._detail = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this._code && this._code.map(v => v.toJSON()),
			detail: this._detail && this._detail.map(v => v.toJSON())
		});
	}

}

module.exports = Condition_Evidence;
