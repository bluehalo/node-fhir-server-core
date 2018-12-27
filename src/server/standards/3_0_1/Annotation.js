const Element = require('./Element');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class Annotation extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Annotation';
		Object.assign(this, opt);
	}

	// This is a Annotation resource
	static get __resourceType() {
		return 'Annotation';
	}

	// The individual responsible for making the annotation.
	get authorReference() {
		return this.__authorReference;
	}

	set authorReference(new_value) {
		const Reference = require('./Reference');
		this.__authorReference = new Reference(new_value);
	}

	// The individual responsible for making the annotation.
	get authorString() {
		return this.__authorString;
	}

	set authorString(new_value) {
		this.__authorString = new_value;
	}

	// Indicates when this particular annotation was made.
	get time() {
		return this.__time;
	}

	set time(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field time`);
		}
		this.__time = new_value;
	}

	// The text of the annotation.
	get text() {
		return this.__text;
	}

	set text(new_value) {
		this.__text = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			authorReference: this.__authorReference && this.__authorReference.toJSON(),
			authorString: this.__authorString,
			time: this.__time,
			text: this.__text,
		});
	}
}

module.exports = Annotation;
