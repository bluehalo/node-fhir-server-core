const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');

class Immunization_VaccinationProtocol extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Immunization_VaccinationProtocol';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Immunization_VaccinationProtocol';
	}

	// Nominal position in a series.
	get doseSequence () {
		return this._doseSequence;
	}

	set doseSequence ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field doseSequence`);
		}
		this._doseSequence = new_value;
	}

	// Contains the description about the protocol under which the vaccine was administered.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._description = new_value;
	}

	// Indicates the authority who published the protocol.  E.g. ACIP.
	get authority () {
		return this._authority;
	}

	set authority ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._authority = new Reference(new_value);
	}

	// One possible path to achieve presumed immunity against a disease - within the context of an authority.
	get series () {
		return this._series;
	}

	set series ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._series = new_value;
	}

	// The recommended number of doses to achieve immunity.
	get seriesDoses () {
		return this._seriesDoses;
	}

	set seriesDoses ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field seriesDoses`);
		}
		this._seriesDoses = new_value;
	}

	// The targeted disease.
	get targetDisease () {
		return this._targetDisease;
	}

	set targetDisease ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._targetDisease = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Indicates if the immunization event should "count" against  the protocol.
	get doseStatus () {
		return this._doseStatus;
	}

	set doseStatus ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._doseStatus = new CodeableConcept(new_value);
	}

	// Provides an explanation as to why an immunization event should or should not count against the protocol.
	get doseStatusReason () {
		return this._doseStatusReason;
	}

	set doseStatusReason ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._doseStatusReason = new CodeableConcept(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			doseSequence: this.doseSequence,
			description: this.description,
			authority: this.authority && this.authority.toJSON(),
			series: this.series,
			seriesDoses: this.seriesDoses,
			targetDisease: this.targetDisease && this.targetDisease.toJSON(),
			doseStatus: this.doseStatus && this.doseStatus.toJSON(),
			doseStatusReason: this.doseStatusReason && this.doseStatusReason.toJSON()
		});
	}

}

module.exports = Immunization_VaccinationProtocol;
