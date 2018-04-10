const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Reference = require('./types/Reference');
const Attachment = require('./types/Attachment');
const Coding = require('./types/Coding');
const Period = require('./types/Period');

class Related {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// identifier	Σ	0..1	Identifier	Identifier of related objects or events
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// ref	Σ	0..1	Reference(Any)	Related Resource
	set ref(ref) {
		this._ref = new Reference(ref);
	}

	get ref() {
		return this._ref;
	}

	toJSON() {
		return {
			identifier: this._identifier,
			ref: this._ref,
		};
	}
}

class Context {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// encounter	Σ	0..1	Reference(Encounter)	Context of the document content
	set encounter(encounter) {
		this._encounter = new Reference(encounter);
	}

	get encounter() {
		return this._encounter;
	}

	// event	Σ	0..*	CodeableConcept	Main clinical acts documented
	// v3 Code System ActCode (Example)
	set event(event) {
		if (Array.isArray(event)) {
			this._event = event.map((i) => new CodeableConcept(i));
		} else {
			this._event = [new CodeableConcept(event)];
		}
	}

	get event() {
		return this._event;
	}

	// period	Σ	0..1	Period	Time of service that is being documented
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// facilityType	Σ	0..1	CodeableConcept	Kind of facility where patient was seen
	// Facility Type Code Value Set (Example)
	set facilityType(facilityType) {
		this._facilityType = new CodeableConcept(facilityType);
	}

	get facilityType() {
		return this._facilityType;
	}

	// practiceSetting	Σ	0..1	CodeableConcept	Additional details about where the content was created (e.g. clinical specialty)
	// Practice Setting Code Value Set (Example)
	set practiceSetting(practiceSetting) {
		this._practiceSetting = new CodeableConcept(practiceSetting);
	}

	get practiceSetting() {
		return this._practiceSetting;
	}

	// sourcePatientInfo	Σ	0..1	Reference(Patient)	Patient demographics from source
	set sourcePatientInfo(sourcePatientInfo) {
		this._sourcePatientInfo = new Reference(sourcePatientInfo);
	}

	get sourcePatientInfo() {
		return this._sourcePatientInfo;
	}

	// related	Σ	0..*	BackboneElement	Related identifiers or resources
	set related(related) {
		if (Array.isArray(related)) {
			this._related = related.map((i) => new Related(i));
		} else {
			this._related = [new Related(related)];
		}
	}

	get related() {
		return this._related;
	}

	toJSON() {
		return {
			encounter: this._encounter,
			event: this._event,
			period: this._period,
			facilityType: this._facilityType,
			practiceSetting: this._practiceSetting,
			sourcePatientInfo: this._sourcePatientInfo,
			related: this._related,
		};
	}
}

class Content {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// attachment	Σ	1..1	Attachment	Where to access the document
	set attachment(attachment) {
		this._attachment = new Attachment(attachment);
	}

	get attachment() {
		return this._attachment;
	}

	// format	Σ	0..1	Coding	Format/content rules for the document
	// DocumentReference Format Code Set (Preferred)
	set format(format) {
		this._format = new Coding(format);
	}

	get format() {
		return this._format;
	}

	toJSON() {
		return {
			attachment: this._attachment,
			format: this._format,
		};
	}
}

class RelatesTo {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code	Σ	1..1	code	replaces | transforms | signs | appends
	// DocumentRelationshipType (Required)
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	// target	Σ	1..1	Reference(DocumentReference)	Target of the relationship
	set target(target) {
		this._target = new Reference(target);
	}

	get target() {
		return this._target;
	}

	toJSON() {
		return {
			code: this._code,
			target: this._target,
		};
	}
}

class DocumentReference extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'DocumentReference';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// masterIdentifier	Σ	0..1	Identifier	Master Version Specific Identifier
	set masterIdentifier(masterIdentifier) {
		this._masterIdentifier = new Identifier(masterIdentifier);
	}

	get masterIdentifier() {
		return this._masterIdentifier;
	}

	// identifier	Σ	0..*	Identifier	Other identifiers for the document
	set identifier(identifier) {
		if (Array.isArray(identifier)) {
			this._identifier = identifier.map((i) => new Identifier(i));
		} else {
			this._identifier = [new Identifier(identifier)];
		}
	}

	get identifier() {
		return this._identifier;
	}

	// status	?!Σ	1..1	code	current | superseded | entered-in-error
	// DocumentReferenceStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// docStatus	Σ	0..1	code	preliminary | final | appended | amended | entered-in-error
	// CompositionStatus (Required)
	set docStatus(docStatus) {
		this._docStatus = new Code(docStatus);
	}

	get docStatus() {
		return this._docStatus;
	}

	// type	Σ	1..1	CodeableConcept	Kind of document (LOINC if possible)
	// Document Type Value Set (Preferred)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// class	Σ	0..1	CodeableConcept	Categorization of document
	// Document Class Value Set (Example)
	set documentReferenceClass(documentReferenceClass) {
		this._documentReferenceClass = new CodeableConcept(documentReferenceClass);
	}

	get documentReferenceClass() {
		return this._documentReferenceClass;
	}

	// subject	Σ	0..1	Reference(Patient | Practitioner | Group | Device)	Who/what is the subject of the document
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// created	Σ	0..1	dateTime	Document creation time
	set created(created) {
		this._created = created;
	}

	get created() {
		return this._created;
	}

	// indexed	Σ	1..1	instant	When this document reference was created
	set indexed(indexed) {
		this._indexed = indexed;
	}

	get indexed() {
		return this._indexed;
	}

	// author	Σ	0..*	Reference(Practitioner | Organization | Device | Patient | RelatedPerson)	Who and/or what authored the document
	set author(author) {
		if (Array.isArray(author)) {
			this._author = author.map((i) => new Reference(i));
		} else {
			this._author = [new Reference(author)];
		}
	}

	get author() {
		return this._author;
	}

	// authenticator	Σ	0..1	Reference(Practitioner | Organization)	Who/what authenticated the document
	set authenticator(authenticator) {
		this._authenticator = new Reference(authenticator);
	}

	get authenticator() {
		return this._authenticator;
	}

	// custodian	Σ	0..1	Reference(Organization)	Organization which maintains the document
	set custodian(custodian) {
		this._custodian = new Reference(custodian);
	}

	get custodian() {
		return this._custodian;
	}

	// description	Σ	0..1	string	Human-readable description (title)
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// securityLabel	Σ	0..*	CodeableConcept	Document security-tags
	// All Security Labels (Extensible)
	set securityLabel(securityLabel) {
		if (Array.isArray(securityLabel)) {
			this._securityLabel = securityLabel.map((i) => new CodeableConcept(i));
		} else {
			this._securityLabel = [new CodeableConcept(securityLabel)];
		}
	}

	get securityLabel() {
		return this._securityLabel;
	}

	// relatesTo	?!Σ	0..*	BackboneElement	Relationships to other documents
	set relatesTo(relatesTo) {
		if (Array.isArray(relatesTo)) {
			this._relatesTo = relatesTo.map((i) => new RelatesTo(i));
		} else {
			this._relatesTo = [new RelatesTo(relatesTo)];
		}
	}

	get relatesTo() {
		return this._relatesTo;
	}

	// content	Σ	1..*	BackboneElement	Document referenced
	set content(content) {
		if (Array.isArray(content)) {
			this._content = content.map((i) => new Content(i));
		} else {
			this._content = [new Content(content)];
		}
	}

	get content() {
		return this._content;
	}

	// context	Σ	0..1	BackboneElement	Clinical context of document
	set context(context) {
		this._context = new Context(context);
	}

	get context() {
		return this._context;
	}

	toJSON() {
		const json = {
			masterIdentifier: this._masterIdentifier,
			identifier: this._identifier,
			status: this._status,
			docStatus: this._docStatus,
			type: this._type,
			documentReferenceClass: this._documentReferenceClass,
			subject: this._subject,
			created: this._created,
			indexed: this._indexed,
			author: this._author,
			authenticator: this._authenticator,
			custodian: this._custodian,
			description: this._description,
			securityLabel: this._securityLabel,
			relatesTo: this._relatesTo,
			content: this._content,
			context: this._context,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.DocumentReference = DocumentReference;
module.exports.RelatesTo = RelatesTo;
module.exports.Content = Content;
module.exports.Context = Context;
module.exports.Related = Related;
