const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class NamingSystem extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'NamingSystem';
		Object.assign(this, opt);
	}

	// This is a NamingSystem resource
	static get __resourceType() {
		return 'NamingSystem';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__NamingSystem = new_value;
	}

	// The descriptive name of this particular identifier type or code system.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// Indicates whether the naming system is \'ready for use\' or not.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Indicates the purpose for the naming system - what kinds of things does it make unique?.
	get kind() {
		return this.__kind;
	}

	set kind(new_value) {
		this.__kind = new_value;
	}

	// The name of the individual or organization that published the naming system.
	get publisher() {
		return this.__publisher;
	}

	set publisher(new_value) {
		this.__publisher = new_value;
	}

	// Contacts to assist a user in finding and communicating with the publisher.
	get contact() {
		return this.__contact;
	}

	set contact(new_value) {
		const NamingSystemContact = require('./NamingSystemContact');
		this.__contact = Array.isArray(new_value)
			? new_value.map(val => new NamingSystemContact(val))
			: [new NamingSystemContact(new_value)];
	}

	// The name of the organization that is responsible for issuing identifiers or codes for this namespace and ensuring their non-collision.
	get responsible() {
		return this.__responsible;
	}

	set responsible(new_value) {
		this.__responsible = new_value;
	}

	// The date  (and optionally time) when the system was registered or published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the registration changes.
	get date() {
		return this.__date;
	}

	set date(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this.__date = new_value;
	}

	// Categorizes a naming system for easier search by grouping related naming systems.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// Details about what the namespace identifies including scope, granularity, version labeling, etc.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of naming systems.
	get useContext() {
		return this.__useContext;
	}

	set useContext(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__useContext = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc.
	get usage() {
		return this.__usage;
	}

	set usage(new_value) {
		this.__usage = new_value;
	}

	// Indicates how the system may be identified when referenced in electronic exchange.
	get uniqueId() {
		return this.__uniqueId;
	}

	set uniqueId(new_value) {
		const NamingSystemUniqueId = require('./NamingSystemUniqueId');
		this.__uniqueId = Array.isArray(new_value)
			? new_value.map(val => new NamingSystemUniqueId(val))
			: [new NamingSystemUniqueId(new_value)];
	}

	// For naming systems that are retired, indicates the naming system that should be used in their place (if any).
	get replacedBy() {
		return this.__replacedBy;
	}

	set replacedBy(new_value) {
		const Reference = require('./Reference');
		this.__replacedBy = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			name: this.__name,
			status: this.__status,
			kind: this.__kind,
			publisher: this.__publisher,
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
			responsible: this.__responsible,
			date: this.__date,
			type: this.__type && this.__type.toJSON(),
			description: this.__description,
			useContext: this.__useContext && this.__useContext.map(v => v.toJSON()),
			usage: this.__usage,
			uniqueId: this.__uniqueId && this.__uniqueId.map(v => v.toJSON()),
			replacedBy: this.__replacedBy && this.__replacedBy.toJSON(),
		});
	}
}

module.exports = NamingSystem;
