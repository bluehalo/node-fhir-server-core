const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');

class Patient_Communication extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Patient_Communication';
	}

	// The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. "en" for English, or "en-US" for American English versus "en-EN" for England English.
	get language () {
		return this._language;
	}

	set language ( new_value ) {
		this._language = new CodeableConcept(new_value);
	}

	// Indicates whether or not the patient prefers this language (over other languages he masters up a certain level).
	get preferred () {
		return this._preferred;
	}

	set preferred ( new_value ) {
		this._preferred = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			language: this._language,
			preferred: this._preferred
		});
	}

}

module.exports = Patient_Communication;
