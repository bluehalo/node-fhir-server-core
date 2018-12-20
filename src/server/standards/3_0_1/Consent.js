const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const UriScalar = require('./scalars/Uri.scalar');

class Consent extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Consent';
		Object.assign(this, opt);
	}

	// This is a Consent resource
	static get __resourceType() {
		return 'Consent';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Consent = new_value;
	}

	// Unique identifier for this copy of the Consent Statement.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// Indicates the current state of this consent.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The patient/healthcare consumer to whom this consent applies.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// Relevant time or time-period when this Consent is applicable.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// When this  Consent was issued / created / indexed.
	get dateTime() {
		return this.__dateTime;
	}

	set dateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field dateTime`);
		}
		this.__dateTime = new_value;
	}

	// Either the Grantor, which is the entity responsible for granting the rights listed in a Consent Directive or the Grantee, which is the entity responsible for complying with the Consent Directive, including any obligations or limitations on authorizations and enforcement of prohibitions.
	get consentingParty() {
		return this.__consentingParty;
	}

	set consentingParty(new_value) {
		const Reference = require('./Reference');
		this.__consentingParty = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Who or what is controlled by this consent. Use group to identify a set of actors by some property they share (e.g. \'admitting officers\').
	get actor() {
		return this.__actor;
	}

	set actor(new_value) {
		const ConsentActor = require('./ConsentActor');
		this.__actor = Array.isArray(new_value)
			? new_value.map(val => new ConsentActor(val))
			: [new ConsentActor(new_value)];
	}

	// Actions controlled by this consent.
	get action() {
		return this.__action;
	}

	set action(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__action = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The organization that manages the consent, and the framework within which it is executed.
	get organization() {
		return this.__organization;
	}

	set organization(new_value) {
		const Reference = require('./Reference');
		this.__organization = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document.
	get sourceAttachment() {
		return this.__sourceAttachment;
	}

	set sourceAttachment(new_value) {
		const Attachment = require('./Attachment');
		this.__sourceAttachment = new Attachment(new_value);
	}

	// The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document.
	get sourceIdentifier() {
		return this.__sourceIdentifier;
	}

	set sourceIdentifier(new_value) {
		const Identifier = require('./Identifier');
		this.__sourceIdentifier = new Identifier(new_value);
	}

	// The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document.
	get sourceReference() {
		return this.__sourceReference;
	}

	set sourceReference(new_value) {
		const Reference = require('./Reference');
		this.__sourceReference = new Reference(new_value);
	}

	// The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
	get policy() {
		return this.__policy;
	}

	set policy(new_value) {
		const ConsentPolicy = require('./ConsentPolicy');
		this.__policy = Array.isArray(new_value)
			? new_value.map(val => new ConsentPolicy(val))
			: [new ConsentPolicy(new_value)];
	}

	// A referece to the specific computable policy.
	get policyRule() {
		return this.__policyRule;
	}

	set policyRule(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field policyRule`);
		}
		this.__policyRule = new_value;
	}

	// A set of security labels that define which resources are controlled by this consent. If more than one label is specified, all resources must have all the specified labels.
	get securityLabel() {
		return this.__securityLabel;
	}

	set securityLabel(new_value) {
		const Coding = require('./Coding');
		this.__securityLabel = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// The context of the activities a user is taking - why the user is accessing the data - that are controlled by this consent.
	get purpose() {
		return this.__purpose;
	}

	set purpose(new_value) {
		const Coding = require('./Coding');
		this.__purpose = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// Clinical or Operational Relevant period of time that bounds the data controlled by this consent.
	get dataPeriod() {
		return this.__dataPeriod;
	}

	set dataPeriod(new_value) {
		const Period = require('./Period');
		this.__dataPeriod = new Period(new_value);
	}

	// The resources controlled by this consent, if specific resources are referenced.
	get data() {
		return this.__data;
	}

	set data(new_value) {
		const ConsentData = require('./ConsentData');
		this.__data = Array.isArray(new_value) ? new_value.map(val => new ConsentData(val)) : [new ConsentData(new_value)];
	}

	// An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
	get except() {
		return this.__except;
	}

	set except(new_value) {
		const ConsentExcept = require('./ConsentExcept');
		this.__except = Array.isArray(new_value)
			? new_value.map(val => new ConsentExcept(val))
			: [new ConsentExcept(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.toJSON(),
			status: this.__status,
			category: this.__category && this.__category.map(v => v.toJSON()),
			patient: this.__patient && this.__patient.toJSON(),
			period: this.__period && this.__period.toJSON(),
			dateTime: this.__dateTime,
			consentingParty: this.__consentingParty && this.__consentingParty.map(v => v.toJSON()),
			actor: this.__actor && this.__actor.map(v => v.toJSON()),
			action: this.__action && this.__action.map(v => v.toJSON()),
			organization: this.__organization && this.__organization.map(v => v.toJSON()),
			sourceAttachment: this.__sourceAttachment && this.__sourceAttachment.toJSON(),
			sourceIdentifier: this.__sourceIdentifier && this.__sourceIdentifier.toJSON(),
			sourceReference: this.__sourceReference && this.__sourceReference.toJSON(),
			policy: this.__policy && this.__policy.map(v => v.toJSON()),
			policyRule: this.__policyRule,
			securityLabel: this.__securityLabel && this.__securityLabel.map(v => v.toJSON()),
			purpose: this.__purpose && this.__purpose.map(v => v.toJSON()),
			dataPeriod: this.__dataPeriod && this.__dataPeriod.toJSON(),
			data: this.__data && this.__data.map(v => v.toJSON()),
			except: this.__except && this.__except.map(v => v.toJSON()),
		});
	}
}

module.exports = Consent;
