const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Goal_Target = require('./Goal_Target');
const Annotation = require('./Annotation');

class Goal extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Goal';
	}

	// This is a Goal resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Goal'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// This records identifiers associated with this care plan that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Indicates whether the goal has been reached and is still considered relevant.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['proposed', 'accepted', 'planned', 'in-progress', 'on-target', 'ahead-of-target', 'behind-target', 'sustaining', 'achieved', 'on-hold', 'cancelled', 'entered-in-error', 'rejected'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// Indicates a category the goal falls within.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		this._category = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Identifies the mutually agreed level of importance associated with reaching/sustaining the goal.
	get priority () {
		return this._priority;
	}

	set priority ( new_value ) {
		this._priority = new CodeableConcept(new_value);
	}

	// Human-readable and/or coded description of a specific desired objective of care, such as "control blood pressure" or "negotiate an obstacle course" or "dance with child at wedding".
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new CodeableConcept(new_value);
	}

	// Identifies the patient, group or organization for whom the goal is being established.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// The date or event after which the goal should begin being pursued.
	get startDate () {
		return this._startDate;
	}

	set startDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field startDate`);
		}
		this._startDate = new_value;
	}

	// The date or event after which the goal should begin being pursued.
	get startCodeableConcept () {
		return this._startCodeableConcept;
	}

	set startCodeableConcept ( new_value ) {
		this._startCodeableConcept = new CodeableConcept(new_value);
	}

	// Indicates what should be done by when.
	get target () {
		return this._target;
	}

	set target ( new_value ) {
		this._target = new Goal_Target(new_value);
	}

	// Identifies when the current status.  I.e. When initially created, when achieved, when cancelled, etc.
	get statusDate () {
		return this._statusDate;
	}

	set statusDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field statusDate`);
		}
		this._statusDate = new_value;
	}

	// Captures the reason for the current status.
	get statusReason () {
		return this._statusReason;
	}

	set statusReason ( new_value ) {
		this._statusReason = new_value;
	}

	// Indicates whose goal this is - patient goal, practitioner goal, etc.
	get expressedBy () {
		return this._expressedBy;
	}

	set expressedBy ( new_value ) {
		this._expressedBy = new Reference(new_value);
	}

	// The identified conditions and other health record elements that are intended to be addressed by the goal.
	get addresses () {
		return this._addresses;
	}

	set addresses ( new_value ) {
		this._addresses = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Any comments related to the goal.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Identifies the change (or lack of change) at the point when the status of the goal is assessed.
	get outcomeCode () {
		return this._outcomeCode;
	}

	set outcomeCode ( new_value ) {
		this._outcomeCode = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Details of what's changed (or not changed).
	get outcomeReference () {
		return this._outcomeReference;
	}

	set outcomeReference ( new_value ) {
		this._outcomeReference = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			status: this._status,
			category: this._category,
			priority: this._priority,
			description: this._description,
			subject: this._subject,
			startDate: this._startDate,
			startCodeableConcept: this._startCodeableConcept,
			target: this._target,
			statusDate: this._statusDate,
			statusReason: this._statusReason,
			expressedBy: this._expressedBy,
			addresses: this._addresses,
			note: this._note,
			outcomeCode: this._outcomeCode,
			outcomeReference: this._outcomeReference
		});
	}

}

module.exports = Goal;
