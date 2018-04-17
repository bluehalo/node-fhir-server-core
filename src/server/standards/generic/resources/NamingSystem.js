const DomainResource = require('../types/DomainResource');
const Code = require('../types/Code');
const ContactDetail = require('../types/ContactDetail');
const CodeableConcept = require('../types/CodeableConcept');
const UsageContext = require('../types/UsageContext');
const Reference = require('../types/Reference');
const Period = require('../types/Period');

class UniqueId {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type		1..1	code	oid | uuid | uri | other
	// NamingSystemIdentifierType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// value		1..1	string	The unique identifier
	set value(value) {
		this._value = value;
	}

	get value() {
		return this._value;
	}

	// preferred		0..1	boolean	Is this the id that should be used for this type
	set preferred(preferred) {
		this._preferred = preferred;
	}

	get preferred() {
		return this._preferred;
	}

	// comment		0..1	string	Notes about identifier usage
	set comment(comment) {
		this._comment = comment;
	}

	get comment() {
		return this._comment;
	}

	// period		0..1	Period	When is identifier valid?
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	toJSON() {
		return {
			type: this._type,
			value: this._value,
			preferred: this._preferred,
			comment: this._comment,
			period: this._period,
		};
	}
}

class NamingSystem extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'NamingSystem';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// name	Σ	1..1	string	Name for this naming system (computer friendly)
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// status	?!Σ	1..1	code	draft | active | retired | unknown
	// PublicationStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// kind		1..1	code	codesystem | identifier | root
	// NamingSystemType (Required)
	set kind(kind) {
		this._kind = new Code(kind);
	}

	get kind() {
		return this._kind;
	}

	// date	Σ	1..1	dateTime	Date this was last changed
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// publisher	Σ	0..1	string	Name of the publisher (organization or individual)
	set publisher(publisher) {
		this._publisher = publisher;
	}

	get publisher() {
		return this._publisher;
	}

	// contact	Σ	0..*	ContactDetail	Contact details for the publisher
	set contact(contact) {
		if (Array.isArray(contact)) {
			this._contact = contact.map((i) => new ContactDetail(i));
		} else {
			this._contact = [new ContactDetail(contact)];
		}
	}

	get contact() {
		return this._contact;
	}

	// responsible		0..1	string	Who maintains system namespace?
	set responsible(responsible) {
		this._responsible = responsible;
	}

	get responsible() {
		return this._responsible;
	}

	// type		0..1	CodeableConcept	e.g. driver, provider, patient, bank etc.
	// Identifier Type Codes (Extensible)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// description		0..1	markdown	Natural language description of the naming system
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// useContext	Σ	0..*	UsageContext	Context the content is intended to support
	set useContext(useContext) {
		if (Array.isArray(useContext)) {
			this._useContext = useContext.map((i) => new UsageContext(i));
		} else {
			this._useContext = [new UsageContext(useContext)];
		}
	}

	get useContext() {
		return this._useContext;
	}

	// jurisdiction	Σ	0..*	CodeableConcept	Intended jurisdiction for naming system (if applicable)
	// Jurisdiction ValueSet (Extensible)
	set jurisdiction(jurisdiction) {
		if (Array.isArray(jurisdiction)) {
			this._jurisdiction = jurisdiction.map((i) => new CodeableConcept(i));
		} else {
			this._jurisdiction = [new CodeableConcept(jurisdiction)];
		}
	}

	get jurisdiction() {
		return this._jurisdiction;
	}

	// usage		0..1	string	How/where is it used
	set usage(usage) {
		this._usage = usage;
	}

	get usage() {
		return this._usage;
	}

	// uniqueId		1..*	BackboneElement	Unique identifiers used for system
	set uniqueId(uniqueId) {
		if (Array.isArray(uniqueId)) {
			this._uniqueId = uniqueId.map((i) => new UniqueId(i));
		} else {
			this._uniqueId = [new UniqueId(uniqueId)];
		}
	}

	get uniqueId() {
		return this._uniqueId;
	}

	// replacedBy	I	0..1	Reference(NamingSystem)	Use this instead
	set replacedBy(replacedBy) {
		this._replacedBy = new Reference(replacedBy);
	}

	get replacedBy() {
		return this._replacedBy;
	}

	toJSON() {
		const json = {
			name: this._name,
			status: this._status,
			kind: this._kind,
			date: this._date,
			publisher: this._publisher,
			contact: this._contact,
			responsible: this._responsible,
			type: this._type,
			description: this._description,
			useContext: this._useContext,
			jurisdiction: this._jurisdiction,
			usage: this._usage,
			uniqueId: this._uniqueId,
			replacedBy: this._replacedBy,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.NamingSystem = NamingSystem;
module.exports.UniqueId = UniqueId;
