const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Period = require('./Period');
const Consent_Actor = require('./Consent_Actor');
const Attachment = require('./Attachment');
const Consent_Policy = require('./Consent_Policy');
const Coding = require('./Coding');
const Consent_Data = require('./Consent_Data');
const Consent_Except = require('./Consent_Except');

class Consent extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Consent';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Consent';
	}

	// This is a Consent resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Consent'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Unique identifier for this copy of the Consent Statement.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// Indicates the current state of this consent.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['draft', 'proposed', 'active', 'rejected', 'inactive', 'entered-in-error'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		this._category = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The patient/healthcare consumer to whom this consent applies.
	get patient () {
		return this._patient;
	}

	set patient ( new_value ) {
		this._patient = new Reference(new_value);
	}

	// Relevant time or time-period when this Consent is applicable.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	// When this  Consent was issued / created / indexed.
	get dateTime () {
		return this._dateTime;
	}

	set dateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field dateTime`);
		}
		this._dateTime = new_value;
	}

	// Either the Grantor, which is the entity responsible for granting the rights listed in a Consent Directive or the Grantee, which is the entity responsible for complying with the Consent Directive, including any obligations or limitations on authorizations and enforcement of prohibitions.
	get consentingParty () {
		return this._consentingParty;
	}

	set consentingParty ( new_value ) {
		this._consentingParty = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Who or what is controlled by this consent. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
	get actor () {
		return this._actor;
	}

	set actor ( new_value ) {
		this._actor = Array.isArray(new_value) ? new_value.map(val => new Consent_Actor(val)) : [new Consent_Actor(new_value)];
	}

	// Actions controlled by this consent.
	get action () {
		return this._action;
	}

	set action ( new_value ) {
		this._action = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The organization that manages the consent, and the framework within which it is executed.
	get organization () {
		return this._organization;
	}

	set organization ( new_value ) {
		this._organization = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document.
	get sourceAttachment () {
		return this._sourceAttachment;
	}

	set sourceAttachment ( new_value ) {
		this._sourceAttachment = new Attachment(new_value);
	}

	// The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document.
	get sourceIdentifier () {
		return this._sourceIdentifier;
	}

	set sourceIdentifier ( new_value ) {
		this._sourceIdentifier = new Identifier(new_value);
	}

	// The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document.
	get sourceReference () {
		return this._sourceReference;
	}

	set sourceReference ( new_value ) {
		this._sourceReference = new Reference(new_value);
	}

	// The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
	get policy () {
		return this._policy;
	}

	set policy ( new_value ) {
		this._policy = Array.isArray(new_value) ? new_value.map(val => new Consent_Policy(val)) : [new Consent_Policy(new_value)];
	}

	// A referece to the specific computable policy.
	get policyRule () {
		return this._policyRule;
	}

	set policyRule ( new_value ) {
		this._policyRule = new_value;
	}

	// A set of security labels that define which resources are controlled by this consent. If more than one label is specified, all resources must have all the specified labels.
	get securityLabel () {
		return this._securityLabel;
	}

	set securityLabel ( new_value ) {
		this._securityLabel = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// The context of the activities a user is taking - why the user is accessing the data - that are controlled by this consent.
	get purpose () {
		return this._purpose;
	}

	set purpose ( new_value ) {
		this._purpose = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// Clinical or Operational Relevant period of time that bounds the data controlled by this consent.
	get dataPeriod () {
		return this._dataPeriod;
	}

	set dataPeriod ( new_value ) {
		this._dataPeriod = new Period(new_value);
	}

	// The resources controlled by this consent, if specific resources are referenced.
	get data () {
		return this._data;
	}

	set data ( new_value ) {
		this._data = Array.isArray(new_value) ? new_value.map(val => new Consent_Data(val)) : [new Consent_Data(new_value)];
	}

	// An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
	get except () {
		return this._except;
	}

	set except ( new_value ) {
		this._except = Array.isArray(new_value) ? new_value.map(val => new Consent_Except(val)) : [new Consent_Except(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.toJSON(),
			status: this._status,
			category: this._category && this._category.map(v => v.toJSON()),
			patient: this._patient && this._patient.toJSON(),
			period: this._period && this._period.toJSON(),
			dateTime: this._dateTime,
			consentingParty: this._consentingParty && this._consentingParty.map(v => v.toJSON()),
			actor: this._actor && this._actor.map(v => v.toJSON()),
			action: this._action && this._action.map(v => v.toJSON()),
			organization: this._organization && this._organization.map(v => v.toJSON()),
			sourceAttachment: this._sourceAttachment && this._sourceAttachment.toJSON(),
			sourceIdentifier: this._sourceIdentifier && this._sourceIdentifier.toJSON(),
			sourceReference: this._sourceReference && this._sourceReference.toJSON(),
			policy: this._policy && this._policy.map(v => v.toJSON()),
			policyRule: this._policyRule,
			securityLabel: this._securityLabel && this._securityLabel.map(v => v.toJSON()),
			purpose: this._purpose && this._purpose.map(v => v.toJSON()),
			dataPeriod: this._dataPeriod && this._dataPeriod.toJSON(),
			data: this._data && this._data.map(v => v.toJSON()),
			except: this._except && this._except.map(v => v.toJSON())
		});
	}

}

module.exports = Consent;
