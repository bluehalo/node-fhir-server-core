const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class ValueSetExpansion extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ValueSetExpansion';
		Object.assign(this, opt);
	}

	// This is a ValueSetExpansion resource
	static get __resourceType() {
		return 'ValueSetExpansion';
	}

	// An identifier that uniquely identifies this expansion of the valueset. Systems may re-use the same identifier as long as the expansion and the definition remain the same, but are not required to do so.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field identifier`);
		}
		this.__identifier = new_value;
	}

	// The time at which the expansion was produced by the expanding system.
	get timestamp() {
		return this.__timestamp;
	}

	set timestamp(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field timestamp`);
		}
		this.__timestamp = new_value;
	}

	// The total number of concepts in the expansion. If the number of concept nodes in this resource is less than the stated number, then the server can return more using the offset parameter.
	get total() {
		return this.__total;
	}

	set total(new_value) {
		this.__total = new_value;
	}

	// If paging is being used, the offset at which this resource starts.  I.e. this resource is a partial view into the expansion. If paging is not being used, this element SHALL not be present.
	get offset() {
		return this.__offset;
	}

	set offset(new_value) {
		this.__offset = new_value;
	}

	// A parameter that controlled the expansion process. These parameters may be used by users of expanded value sets to check whether the expansion is suitable for a particular purpose, or to pick the correct expansion.
	get parameter() {
		return this.__parameter;
	}

	set parameter(new_value) {
		const ValueSetExpansionParameter = require('./ValueSetExpansionParameter');
		this.__parameter = Array.isArray(new_value)
			? new_value.map(val => new ValueSetExpansionParameter(val))
			: [new ValueSetExpansionParameter(new_value)];
	}

	// The codes that are contained in the value set expansion.
	get contains() {
		return this.__contains;
	}

	set contains(new_value) {
		const ValueSetExpansionContains = require('./ValueSetExpansionContains');
		this.__contains = Array.isArray(new_value)
			? new_value.map(val => new ValueSetExpansionContains(val))
			: [new ValueSetExpansionContains(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			identifier: this.__identifier,
			timestamp: this.__timestamp,
			total: this.__total,
			offset: this.__offset,
			parameter: this.__parameter && this.__parameter.map(v => v.toJSON()),
			contains: this.__contains && this.__contains.map(v => v.toJSON()),
		});
	}
}

module.exports = ValueSetExpansion;
