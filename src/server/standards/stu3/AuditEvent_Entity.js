const BackboneElement = require('./BackboneElement');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const Coding = require('./Coding');
const AuditEvent_Detail = require('./AuditEvent_Detail');

class AuditEvent_Entity extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'AuditEvent_Entity';
	}

	// Identifies a specific instance of the entity. The reference should always be version specific.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// Identifies a specific instance of the entity. The reference should be version specific.
	get reference () {
		return this._reference;
	}

	set reference ( new_value ) {
		this._reference = new Reference(new_value);
	}

	// The type of the object that was involved in this audit event.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new Coding(new_value);
	}

	// Code representing the role the entity played in the event being audited.
	get role () {
		return this._role;
	}

	set role ( new_value ) {
		this._role = new Coding(new_value);
	}

	// Identifier for the data life-cycle stage for the entity.
	get lifecycle () {
		return this._lifecycle;
	}

	set lifecycle ( new_value ) {
		this._lifecycle = new Coding(new_value);
	}

	// Security labels for the identified entity.
	get securityLabel () {
		return this._securityLabel;
	}

	set securityLabel ( new_value ) {
		this._securityLabel = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// A name of the entity in the audit event.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// Text that describes the entity in more detail.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// The query parameters for a query-type entities.
	get query () {
		return this._query;
	}

	set query ( new_value ) {
		this._query = new_value;
	}

	// Tagged value pairs for conveying additional information about the entity.
	get detail () {
		return this._detail;
	}

	set detail ( new_value ) {
		this._detail = Array.isArray(new_value) ? new_value.map(val => new AuditEvent_Detail(val)) : [new AuditEvent_Detail(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			identifier: this._identifier,
			reference: this._reference,
			type: this._type,
			role: this._role,
			lifecycle: this._lifecycle,
			securityLabel: this._securityLabel,
			name: this._name,
			description: this._description,
			query: this._query,
			detail: this._detail
		});
	}

}

module.exports = AuditEvent_Entity;
