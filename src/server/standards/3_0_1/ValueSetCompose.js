const BackboneElement = require('./BackboneElement');
const DateScalar = require('./scalars/Date.scalar');

class ValueSetCompose extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ValueSetCompose';
		Object.assign(this, opt);
	}

	// This is a ValueSetCompose resource
	static get __resourceType() {
		return 'ValueSetCompose';
	}

	// If a locked date is defined, then the Content Logical Definition must be evaluated using the current version as of the locked date for referenced code system(s) and value set instances where ValueSet.compose.include.version is not defined.
	get lockedDate() {
		return this.__lockedDate;
	}

	set lockedDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field lockedDate`);
		}
		this.__lockedDate = new_value;
	}

	// Whether inactive codes - codes that are not approved for current use - are in the value set. If inactive = true, inactive codes are to be included in the expansion, if inactive = false, the inactive codes will not be included in the expansion. If absent, the behavior is determined by the implementation, or by the applicable ExpansionProfile (but generally, inactive codes would be expected to be included).
	get inactive() {
		return this.__inactive;
	}

	set inactive(new_value) {
		this.__inactive = new_value;
	}

	// Include one or more codes from a code system or other value set(s).
	get include() {
		return this.__include;
	}

	set include(new_value) {
		const ValueSetComposeInclude = require('./ValueSetComposeInclude');
		this.__include = Array.isArray(new_value)
			? new_value.map(val => new ValueSetComposeInclude(val))
			: [new ValueSetComposeInclude(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			lockedDate: this.__lockedDate,
			inactive: this.__inactive,
			include: this.__include && this.__include.map(v => v.toJSON()),
		});
	}
}

module.exports = ValueSetCompose;
