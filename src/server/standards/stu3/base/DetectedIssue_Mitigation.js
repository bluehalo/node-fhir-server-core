const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class DetectedIssue_Mitigation extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DetectedIssue_Mitigation';
	}

	// Describes the action that was taken or the observation that was made that reduces/eliminates the risk associated with the identified issue.
	get action () {
		return this._action;
	}

	set action ( new_value ) {
		this._action = new CodeableConcept(new_value);
	}

	// Indicates when the mitigating action was documented.
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

	// Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
	get author () {
		return this._author;
	}

	set author ( new_value ) {
		this._author = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			action: this._action,
			date: this._date,
			author: this._author
		});
	}

}

module.exports = DetectedIssue_Mitigation;
