const BackboneElement = require('./BackboneElement');

class PatientCommunication extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'PatientCommunication';
		Object.assign(this, opt);
	}

	// This is a PatientCommunication resource
	static get __resourceType() {
		return 'PatientCommunication';
	}

	// The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. \'en\' for English, or \'en-US\' for American English versus \'en-EN\' for England English.
	get language() {
		return this.__language;
	}

	set language(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__language = new CodeableConcept(new_value);
	}

	// Indicates whether or not the patient prefers this language (over other languages he masters up a certain level).
	get preferred() {
		return this.__preferred;
	}

	set preferred(new_value) {
		this.__preferred = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			language: this.__language && this.__language.toJSON(),
			preferred: this.__preferred,
		});
	}
}

module.exports = PatientCommunication;
