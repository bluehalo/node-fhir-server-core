const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class ImmunizationVaccinationProtocol extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImmunizationVaccinationProtocol';
		Object.assign(this, opt);
	}

	// This is a ImmunizationVaccinationProtocol resource
	static get __resourceType() {
		return 'ImmunizationVaccinationProtocol';
	}

	// Nominal position in a series.
	get doseSequence() {
		return this.__doseSequence;
	}

	set doseSequence(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field doseSequence`);
		}
		this.__doseSequence = new_value;
	}

	// Contains the description about the protocol under which the vaccine was administered.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Indicates the authority who published the protocol.  E.g. ACIP.
	get authority() {
		return this.__authority;
	}

	set authority(new_value) {
		const Reference = require('./Reference');
		this.__authority = new Reference(new_value);
	}

	// One possible path to achieve presumed immunity against a disease - within the context of an authority.
	get series() {
		return this.__series;
	}

	set series(new_value) {
		this.__series = new_value;
	}

	// The recommended number of doses to achieve immunity.
	get seriesDoses() {
		return this.__seriesDoses;
	}

	set seriesDoses(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field seriesDoses`);
		}
		this.__seriesDoses = new_value;
	}

	// The targeted disease.
	get targetDisease() {
		return this.__targetDisease;
	}

	set targetDisease(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__targetDisease = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Indicates if the immunization event should \'count\' against  the protocol.
	get doseStatus() {
		return this.__doseStatus;
	}

	set doseStatus(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__doseStatus = new CodeableConcept(new_value);
	}

	// Provides an explanation as to why an immunization event should or should not count against the protocol.
	get doseStatusReason() {
		return this.__doseStatusReason;
	}

	set doseStatusReason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__doseStatusReason = new CodeableConcept(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			doseSequence: this.__doseSequence,
			description: this.__description,
			authority: this.__authority && this.__authority.toJSON(),
			series: this.__series,
			seriesDoses: this.__seriesDoses,
			targetDisease: this.__targetDisease && this.__targetDisease.map(v => v.toJSON()),
			doseStatus: this.__doseStatus && this.__doseStatus.toJSON(),
			doseStatusReason: this.__doseStatusReason && this.__doseStatusReason.toJSON(),
		});
	}
}

module.exports = ImmunizationVaccinationProtocol;
