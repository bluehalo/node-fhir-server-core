const Element = require('./Element');
const Reference = require('./Reference');

class Annotation extends Element {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Annotation';
	}

	// The individual responsible for making the annotation.
	get authorReference () {
		return this._authorReference;
	}

	set authorReference ( new_value ) {
		this._authorReference = new Reference(new_value);
	}

	// The individual responsible for making the annotation.
	get authorString () {
		return this._authorString;
	}

	set authorString ( new_value ) {
		this._authorString = new_value;
	}

	// Indicates when this particular annotation was made.
	get time () {
		return this._time;
	}

	set time ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field time`);
		}
		this._time = new_value;
	}

	// The text of the annotation.
	get text () {
		return this._text;
	}

	set text ( new_value ) {
		this._text = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			authorReference: this._authorReference,
			authorString: this._authorString,
			time: this._time,
			text: this._text
		});
	}

}

module.exports = Annotation;
