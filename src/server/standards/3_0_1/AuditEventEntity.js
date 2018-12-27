const BackboneElement = require('./BackboneElement');
const Base64BinaryScalar = require('./scalars/Base64Binary.scalar');

class AuditEventEntity extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'AuditEventEntity';
		Object.assign(this, opt);
	}

	// This is a AuditEventEntity resource
	static get __resourceType() {
		return 'AuditEventEntity';
	}

	// Identifies a specific instance of the entity. The reference should always be version specific.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// Identifies a specific instance of the entity. The reference should be version specific.
	get reference() {
		return this.__reference;
	}

	set reference(new_value) {
		const Reference = require('./Reference');
		this.__reference = new Reference(new_value);
	}

	// The type of the object that was involved in this audit event.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const Coding = require('./Coding');
		this.__type = new Coding(new_value);
	}

	// Code representing the role the entity played in the event being audited.
	get role() {
		return this.__role;
	}

	set role(new_value) {
		const Coding = require('./Coding');
		this.__role = new Coding(new_value);
	}

	// Identifier for the data life-cycle stage for the entity.
	get lifecycle() {
		return this.__lifecycle;
	}

	set lifecycle(new_value) {
		const Coding = require('./Coding');
		this.__lifecycle = new Coding(new_value);
	}

	// Security labels for the identified entity.
	get securityLabel() {
		return this.__securityLabel;
	}

	set securityLabel(new_value) {
		const Coding = require('./Coding');
		this.__securityLabel = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// A name of the entity in the audit event.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// Text that describes the entity in more detail.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The query parameters for a query-type entities.
	get query() {
		return this.__query;
	}

	set query(new_value) {
		// Throw if new value does not match the pattern
		let pattern = Base64BinaryScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field query`);
		}
		this.__query = new_value;
	}

	// Tagged value pairs for conveying additional information about the entity.
	get detail() {
		return this.__detail;
	}

	set detail(new_value) {
		const AuditEventEntityDetail = require('./AuditEventEntityDetail');
		this.__detail = Array.isArray(new_value)
			? new_value.map(val => new AuditEventEntityDetail(val))
			: [new AuditEventEntityDetail(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			identifier: this.__identifier && this.__identifier.toJSON(),
			reference: this.__reference && this.__reference.toJSON(),
			type: this.__type && this.__type.toJSON(),
			role: this.__role && this.__role.toJSON(),
			lifecycle: this.__lifecycle && this.__lifecycle.toJSON(),
			securityLabel: this.__securityLabel && this.__securityLabel.map(v => v.toJSON()),
			name: this.__name,
			description: this.__description,
			query: this.__query,
			detail: this.__detail && this.__detail.map(v => v.toJSON()),
		});
	}
}

module.exports = AuditEventEntity;
