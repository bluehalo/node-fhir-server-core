const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');

class ClaimResponse_ProcessNote extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ClaimResponse_ProcessNote';
	}

	// An integer associated with each note which may be referred to from each service line item.
	get number () {
		return this._number;
	}

	set number ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field number`);
		}
		this._number = new_value;
	}

	// The note purpose: Print/Display.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// The note text.
	get text () {
		return this._text;
	}

	set text ( new_value ) {
		this._text = new_value;
	}

	// The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. "en" for English, or "en-US" for American English versus "en-EN" for England English.
	get language () {
		return this._language;
	}

	set language ( new_value ) {
		this._language = new CodeableConcept(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			number: this._number,
			type: this._type,
			text: this._text,
			language: this._language
		});
	}

}

module.exports = ClaimResponse_ProcessNote;
