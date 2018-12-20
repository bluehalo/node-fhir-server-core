const BackboneElement = require('./BackboneElement');

class FamilyMemberHistoryCondition extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'FamilyMemberHistoryCondition';
		Object.assign(this, opt);
	}

	// This is a FamilyMemberHistoryCondition resource
	static get __resourceType() {
		return 'FamilyMemberHistoryCondition';
	}

	// The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like \'cancer\' depending on how much is known about the condition and the capabilities of the creating system.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// Indicates what happened as a result of this condition.  If the condition resulted in death, deceased date is captured on the relation.
	get outcome() {
		return this.__outcome;
	}

	set outcome(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__outcome = new CodeableConcept(new_value);
	}

	// Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
	get onsetAge() {
		return this.__onsetAge;
	}

	set onsetAge(new_value) {
		const Age = require('./Age');
		this.__onsetAge = new Age(new_value);
	}

	// Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
	get onsetRange() {
		return this.__onsetRange;
	}

	set onsetRange(new_value) {
		const Range = require('./Range');
		this.__onsetRange = new Range(new_value);
	}

	// Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
	get onsetPeriod() {
		return this.__onsetPeriod;
	}

	set onsetPeriod(new_value) {
		const Period = require('./Period');
		this.__onsetPeriod = new Period(new_value);
	}

	// Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
	get onsetString() {
		return this.__onsetString;
	}

	set onsetString(new_value) {
		this.__onsetString = new_value;
	}

	// An area where general notes can be placed about this specific condition.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code && this.__code.toJSON(),
			outcome: this.__outcome && this.__outcome.toJSON(),
			onsetAge: this.__onsetAge && this.__onsetAge.toJSON(),
			onsetRange: this.__onsetRange && this.__onsetRange.toJSON(),
			onsetPeriod: this.__onsetPeriod && this.__onsetPeriod.toJSON(),
			onsetString: this.__onsetString,
			note: this.__note && this.__note.map(v => v.toJSON()),
		});
	}
}

module.exports = FamilyMemberHistoryCondition;
