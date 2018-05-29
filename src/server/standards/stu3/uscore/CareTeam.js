const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Period = require('./Period');
const CareTeam_Participant = require('./CareTeam_Participant');
const Annotation = require('./Annotation');

class CareTeam extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'CareTeam';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CareTeam';
	}

	// This is a CareTeam resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['CareTeam'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// This records identifiers associated with this care team that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Indicates the current state of the care team.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['proposed', 'active', 'suspended', 'inactive', 'entered-in-error'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// Identifies what kind of team.  This is to support differentiation between multiple co-existing teams, such as care plan team, episode of care team, longitudinal care team.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		this._category = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A label for human use intended to distinguish like teams.  E.g. the "red" vs. "green" trauma teams.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// Identifies the patient or group whose intended care is handled by the team.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// The encounter or episode of care that establishes the context for this care team.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		this._context = new Reference(new_value);
	}

	// Indicates when the team did (or is intended to) come into effect and end.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	// Identifies all people and organizations who are expected to be involved in the care team.
	get participant () {
		return this._participant;
	}

	set participant ( new_value ) {
		this._participant = Array.isArray(new_value) ? new_value.map(val => new CareTeam_Participant(val)) : [new CareTeam_Participant(new_value)];
	}

	// Describes why the care team exists.
	get reasonCode () {
		return this._reasonCode;
	}

	set reasonCode ( new_value ) {
		this._reasonCode = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Condition(s) that this care team addresses.
	get reasonReference () {
		return this._reasonReference;
	}

	set reasonReference ( new_value ) {
		this._reasonReference = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The organization responsible for the care team.
	get managingOrganization () {
		return this._managingOrganization;
	}

	set managingOrganization ( new_value ) {
		this._managingOrganization = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Comments made about the CareTeam.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			status: this._status,
			category: this._category && this._category.map(v => v.toJSON()),
			name: this._name,
			subject: this._subject && this._subject.toJSON(),
			context: this._context && this._context.toJSON(),
			period: this._period && this._period.toJSON(),
			participant: this._participant && this._participant.map(v => v.toJSON()),
			reasonCode: this._reasonCode && this._reasonCode.map(v => v.toJSON()),
			reasonReference: this._reasonReference && this._reasonReference.map(v => v.toJSON()),
			managingOrganization: this._managingOrganization && this._managingOrganization.map(v => v.toJSON()),
			note: this._note && this._note.map(v => v.toJSON())
		});
	}

}

module.exports = CareTeam;
