const BackboneElement = require('./BackboneElement');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class ImmunizationReaction extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImmunizationReaction';
		Object.assign(this, opt);
	}

	// This is a ImmunizationReaction resource
	static get __resourceType() {
		return 'ImmunizationReaction';
	}

	// Date of reaction to the immunization.
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

	// Details of the reaction.
	get detail() {
		return this.__detail;
	}

	set detail(new_value) {
		const Reference = require('./Reference');
		this.__detail = new Reference(new_value);
	}

	// Self-reported indicator.
	get reported() {
		return this.__reported;
	}

	set reported(new_value) {
		this.__reported = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			date: this.__date,
			detail: this.__detail && this.__detail.toJSON(),
			reported: this.__reported,
		});
	}
}

module.exports = ImmunizationReaction;
