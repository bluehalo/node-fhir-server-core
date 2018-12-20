const DomainResource = require('./DomainResource');
const UnsignedIntScalar = require('./scalars/UnsignedInt.scalar');

class Group extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Group';
		Object.assign(this, opt);
	}

	// This is a Group resource
	static get __resourceType() {
		return 'Group';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Group = new_value;
	}

	// A unique business identifier for this group.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Indicates whether the record for the group is available for use or is merely being retained for historical purposes.
	get active() {
		return this.__active;
	}

	set active(new_value) {
		this.__active = new_value;
	}

	// Identifies the broad classification of the kind of resources the group includes.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.
	get actual() {
		return this.__actual;
	}

	set actual(new_value) {
		this.__actual = new_value;
	}

	// Provides a specific type of resource the group includes; e.g. \'cow\', \'syringe\', etc.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// A label assigned to the group for human identification and communication.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// A count of the number of resource instances that are part of the group.
	get quantity() {
		return this.__quantity;
	}

	set quantity(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UnsignedIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field quantity`);
		}
		this.__quantity = new_value;
	}

	// Identifies the traits shared by members of the group.
	get characteristic() {
		return this.__characteristic;
	}

	set characteristic(new_value) {
		const GroupCharacteristic = require('./GroupCharacteristic');
		this.__characteristic = Array.isArray(new_value)
			? new_value.map(val => new GroupCharacteristic(val))
			: [new GroupCharacteristic(new_value)];
	}

	// Identifies the resource instances that are members of the group.
	get member() {
		return this.__member;
	}

	set member(new_value) {
		const GroupMember = require('./GroupMember');
		this.__member = Array.isArray(new_value)
			? new_value.map(val => new GroupMember(val))
			: [new GroupMember(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			active: this.__active,
			type: this.__type,
			actual: this.__actual,
			code: this.__code && this.__code.toJSON(),
			name: this.__name,
			quantity: this.__quantity,
			characteristic: this.__characteristic && this.__characteristic.map(v => v.toJSON()),
			member: this.__member && this.__member.map(v => v.toJSON()),
		});
	}
}

module.exports = Group;
