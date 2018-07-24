const DomainResource = require('./DomainResource');
const ContactDetail = require('./ContactDetail');
const CodeableConcept = require('./CodeableConcept');
const UsageContext = require('./UsageContext');
const NamingSystem_UniqueId = require('./NamingSystem_UniqueId');
const Reference = require('./Reference');

class NamingSystem extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'NamingSystem';
	}

	// This is a NamingSystem resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['NamingSystem'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// A natural language name identifying the naming system. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// The status of this naming system. Enables tracking the life-cycle of the content.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['draft', 'active', 'retired', 'unknown'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// Indicates the purpose for the naming system - what kinds of things does it make unique?
	get kind () {
		return this._kind;
	}

	set kind ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['codesystem', 'identifier', 'root'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field kind`);
		}
		this._kind = new_value;
	}

	// The date  (and optionally time) when the naming system was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the naming system changes.
	get date () {
		return this._date;
	}

	set date ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this._date = new_value;
	}

	// The name of the individual or organization that published the naming system.
	get publisher () {
		return this._publisher;
	}

	set publisher ( new_value ) {
		this._publisher = new_value;
	}

	// Contact details to assist a user in finding and communicating with the publisher.
	get contact () {
		return this._contact;
	}

	set contact ( new_value ) {
		this._contact = Array.isArray(new_value) ? new_value.map(val => new ContactDetail(val)) : [new ContactDetail(new_value)];
	}

	// The name of the organization that is responsible for issuing identifiers or codes for this namespace and ensuring their non-collision.
	get responsible () {
		return this._responsible;
	}

	set responsible ( new_value ) {
		this._responsible = new_value;
	}

	// Categorizes a naming system for easier search by grouping related naming systems.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// A free text natural language description of the naming system from a consumer's perspective. Details about what the namespace identifies including scope, granularity, version labeling, etc.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate naming system instances.
	get useContext () {
		return this._useContext;
	}

	set useContext ( new_value ) {
		this._useContext = Array.isArray(new_value) ? new_value.map(val => new UsageContext(val)) : [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the naming system is intended to be used.
	get jurisdiction () {
		return this._jurisdiction;
	}

	set jurisdiction ( new_value ) {
		this._jurisdiction = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc.
	get usage () {
		return this._usage;
	}

	set usage ( new_value ) {
		this._usage = new_value;
	}

	// Indicates how the system may be identified when referenced in electronic exchange.
	get uniqueId () {
		return this._uniqueId;
	}

	set uniqueId ( new_value ) {
		this._uniqueId = Array.isArray(new_value) ? new_value.map(val => new NamingSystem_UniqueId(val)) : [new NamingSystem_UniqueId(new_value)];
	}

	// For naming systems that are retired, indicates the naming system that should be used in their place (if any).
	get replacedBy () {
		return this._replacedBy;
	}

	set replacedBy ( new_value ) {
		this._replacedBy = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
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
			replacedBy: this._replacedBy
		});
	}

}

module.exports = NamingSystem;
