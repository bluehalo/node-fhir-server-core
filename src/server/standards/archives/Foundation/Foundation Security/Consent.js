const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Reference = require('./types/Reference');
const Period = require('./types/Period');
const Attachment = require('./types/Attachment');
const Coding = require('./types/Coding');

class Data {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// meaning	Σ	1..1	code	instance | related | dependents | authoredby
	// ConsentDataMeaning (Required)
	set meaning(meaning) {
		this._meaning = new Code(meaning);
	}

	get meaning() {
		return this._meaning;
	}

	// reference	Σ	1..1	Reference(Any)	The actual data reference
	set reference(reference) {
		this._reference = new Reference(reference);
	}

	get reference() {
		return this._reference;
	}

	toJSON() {
		return {
			meaning: this._meaning,
			reference: this._reference,
		};
	}
}

class Policy {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// authority	I	0..1	uri	Enforcement source for policy
	set authority(authority) {
		this._authority = authority;
	}

	get authority() {
		return this._authority;
	}

	// uri	I	0..1	uri	Specific policy covered by this consent
	set uri(uri) {
		this._uri = uri;
	}

	get uri() {
		return this._uri;
	}

	toJSON() {
		return {
			authority: this._authority,
			uri: this._uri,
		};
	}
}

class Actor {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// role		1..1	CodeableConcept	How the actor is involved
	// SecurityRoleType (Extensible)
	set role(role) {
		this._role = new CodeableConcept(role);
	}

	get role() {
		return this._role;
	}

	// reference		1..1	Reference(Device | Group | CareTeam | Organization | Patient | Practitioner | RelatedPerson)	Resource for the actor (or group, by role)
	set reference(reference) {
		this._reference = new Reference(reference);
	}

	get reference() {
		return this._reference;
	}

	toJSON() {
		return {
			role: this._role,
			reference: this._reference,
		};
	}
}

class Except {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type	Σ	1..1	code	deny | permit
	// ConsentExceptType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// period	Σ	0..1	Period	Timeframe for this exception
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// action	Σ	0..*	CodeableConcept	Actions controlled by this exception
	// Consent Action Codes (Example)
	set action(action) {
		if (Array.isArray(action)) {
			this._action = action.map((i) => new CodeableConcept(i));
		} else {
			this._action = [new CodeableConcept(action)];
		}
	}

	get action() {
		return this._action;
	}

	// securityLabel	Σ	0..*	Coding	Security Labels that define affected resources
	// All Security Labels (Extensible)
	set securityLabel(securityLabel) {
		if (Array.isArray(securityLabel)) {
			this._securityLabel = securityLabel.map((i) => new Coding(i));
		} else {
			this._securityLabel = [new Coding(securityLabel)];
		}
	}

	get securityLabel() {
		return this._securityLabel;
	}

	// purpose	Σ	0..*	Coding	Context of activities covered by this exception
	// PurposeOfUse (Extensible)
	set purpose(purpose) {
		if (Array.isArray(purpose)) {
			this._purpose = purpose.map((i) => new Coding(i));
		} else {
			this._purpose = [new Coding(purpose)];
		}
	}

	get purpose() {
		return this._purpose;
	}

	// class	Σ	0..*	Coding	e.g. Resource Type, Profile, or CDA etc
	// Consent Content Class (Extensible)
	set exceptClass(exceptClass) {
		if (Array.isArray(exceptClass)) {
			this._exceptClass = exceptClass.map((i) => new Coding(i));
		} else {
			this._exceptClass = [new Coding(exceptClass)];
		}
	}

	get exceptClass() {
		return this._exceptClass;
	}

	// code	Σ	0..*	Coding	e.g. LOINC or SNOMED CT code, etc in the content
	// Consent Content Codes (Example)
	set code(code) {
		if (Array.isArray(code)) {
			this._code = code.map((i) => new Coding(i));
		} else {
			this._code = [new Coding(code)];
		}
	}

	get code() {
		return this._code;
	}

	// dataPeriod	Σ	0..1	Period	Timeframe for data controlled by this exception
	set dataPeriod(dataPeriod) {
		this._dataPeriod = new Period(dataPeriod);
	}

	get dataPeriod() {
		return this._dataPeriod;
	}

	// actor	Σ	0..*	BackboneElement	Who|what controlled by this exception (or group, by role)
	set actor(actor) {
		if (Array.isArray(actor)) {
			this._actor = actor.map((i) => new Actor(i));
		} else {
			this._actor = [new Actor(actor)];
		}
	}

	get actor() {
		return this._actor;
	}

	// data	Σ	0..*	BackboneElement	Data controlled by this exception
	set data(data) {
		if (Array.isArray(data)) {
			this._data = data.map((i) => new Data(i));
		} else {
			this._data = [new Data(data)];
		}
	}

	get data() {
		return this._data;
	}

	toJSON() {
		return {
			type: this._type,
			period: this._period,
			action: this._action,
			securityLabel: this._securityLabel,
			purpose: this._purpose,
			exceptClass: this._exceptClass,
			code: this._code,
			dataPeriod: this._dataPeriod,
			actor: this._actor,
			data: this._data,
		};
	}
}

class Consent extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Consent';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..1	Identifier	Identifier for this record (external references)
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// status	?!Σ	1..1	code	draft | proposed | active | rejected | inactive | entered-in-error
	// ConsentState (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// category	Σ	0..*	CodeableConcept	Classification of the consent statement - for indexing/retrieval
	// Consent Category Codes (Example)
	set category(category) {
		if (Array.isArray(category)) {
			this._category = category.map((i) => new CodeableConcept(i));
		} else {
			this._category = [new CodeableConcept(category)];
		}
	}

	get category() {
		return this._category;
	}

	// patient	Σ	1..1	Reference(Patient)	Who the consent applies to
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// period	Σ	0..1	Period	Period that this consent applies
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// dateTime	Σ	0..1	dateTime	When this Consent was created or indexed
	set dateTime(dateTime) {
		this._dateTime = dateTime;
	}

	get dateTime() {
		return this._dateTime;
	}

	// consentingParty	Σ	0..*	Reference(Organization | Patient | Practitioner | RelatedPerson)	Who is agreeing to the policy and exceptions
	set consentingParty(consentingParty) {
		if (Array.isArray(consentingParty)) {
			this._consentingParty = consentingParty.map((i) => new Reference(i));
		} else {
			this._consentingParty = [new Reference(consentingParty)];
		}
	}

	get consentingParty() {
		return this._consentingParty;
	}

	// action	Σ	0..*	CodeableConcept	Actions controlled by this consent
	// Consent Action Codes (Example)
	set action(action) {
		if (Array.isArray(action)) {
			this._action = action.map((i) => new CodeableConcept(i));
		} else {
			this._action = [new CodeableConcept(action)];
		}
	}

	get action() {
		return this._action;
	}

	// organization	Σ	0..*	Reference(Organization)	Custodian of the consent
	set organization(organization) {
		if (Array.isArray(organization)) {
			this._organization = organization.map((i) => new Reference(i));
		} else {
			this._organization = [new Reference(organization)];
		}
	}

	get organization() {
		return this._organization;
	}

	// source[x]	Σ	0..1		Source from which this consent is taken
	// sourceAttachment			Attachment
	set sourceAttachment(sourceAttachment) {
		this._sourceAttachment = new Attachment(sourceAttachment);
	}

	get sourceAttachment() {
		return this._sourceAttachment;
	}

	// sourceIdentifier			Identifier
	set sourceIdentifier(sourceIdentifier) {
		this._sourceIdentifier = new Identifier(sourceIdentifier);
	}

	get sourceIdentifier() {
		return this._sourceIdentifier;
	}

	// sourceReference			Reference
	set sourceReference(sourceReference) {
		this._sourceReference = new Reference(sourceReference);
	}

	get sourceReference() {
		return this._sourceReference;
	}

	// policyRule	ΣI	0..1	uri	Policy that this consents to
	set policyRule(policyRule) {
		this._policyRule = policyRule;
	}

	get policyRule() {
		return this._policyRule;
	}

	// securityLabel	Σ	0..*	Coding	Security Labels that define affected resources
	// All Security Labels (Extensible)
	set securityLabel(securityLabel) {
		if (Array.isArray(securityLabel)) {
			this._securityLabel = securityLabel.map((i) => new Coding(i));
		} else {
			this._securityLabel = [new Coding(securityLabel)];
		}
	}

	get securityLabel() {
		return this._securityLabel;
	}

	// purpose	Σ	0..*	Coding	Context of activities for which the agreement is made
	// PurposeOfUse (Extensible)
	set purpose(purpose) {
		if (Array.isArray(purpose)) {
			this._purpose = purpose.map((i) => new Coding(i));
		} else {
			this._purpose = [new Coding(purpose)];
		}
	}

	get purpose() {
		return this._purpose;
	}

	// dataPeriod	Σ	0..1	Period	Timeframe for data controlled by this consent
	set dataPeriod(dataPeriod) {
		this._dataPeriod = new Period(dataPeriod);
	}

	get dataPeriod() {
		return this._dataPeriod;
	}

	// actor	Σ	0..*	BackboneElement	Who|what controlled by this consent (or group, by role)
	set actor(actor) {
		if (Array.isArray(actor)) {
			this._actor = actor.map((i) => new Actor(i));
		} else {
			this._actor = [new Actor(actor)];
		}
	}

	get actor() {
		return this._actor;
	}

	// policy		0..*	BackboneElement	Policies covered by this consent
	set policy(policy) {
		if (Array.isArray(policy)) {
			this._policy = policy.map((i) => new Policy(i));
		} else {
			this._policy = [new Policy(policy)];
		}
	}

	get policy() {
		return this._policy;
	}

	// data	Σ	0..*	BackboneElement	Data controlled by this consent
	set data(data) {
		if (Array.isArray(data)) {
			this._data = data.map((i) => new Data(i));
		} else {
			this._data = [new Data(data)];
		}
	}

	get data() {
		return this._data;
	}

	// except	Σ	0..*	BackboneElement	Additional rule - addition or removal of permissions
	set except(except) {
		if (Array.isArray(except)) {
			this._except = except.map((i) => new Except(i));
		} else {
			this._except = [new Except(except)];
		}
	}

	get except() {
		return this._except;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			category: this._category,
			patient: this._patient,
			period: this._period,
			dateTime: this._dateTime,
			consentingParty: this._consentingParty,
			action: this._action,
			organization: this._organization,
			sourceAttachment: this._sourceAttachment,
			sourceIdentifier: this._sourceIdentifier,
			sourceReference: this._sourceReference,
			policyRule: this._policyRule,
			securityLabel: this._securityLabel,
			purpose: this._purpose,
			dataPeriod: this._dataPeriod,
			actor: this._actor,
			policy: this._policy,
			data: this._data,
			except: this._except,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Consent = Consent;
module.exports.Except = Except;
module.exports.Actor = Actor;
module.exports.Policy = Policy;
module.exports.Data = Data;
