const Element = require('./Element');
const XhtmlScalar = require('./scalars/Xhtml.scalar');

class Narrative extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Narrative';
		Object.assign(this, opt);
	}

	// This is a Narrative resource
	static get __resourceType() {
		return 'Narrative';
	}

	// The status of the narrative - whether it\'s entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The actual narrative content, a stripped down version of XHTML.
	get div() {
		return this.__div;
	}

	set div(new_value) {
		// Throw if new value does not match the pattern
		let pattern = XhtmlScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field div`);
		}
		this.__div = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			status: this.__status,
			div: this.__div,
		});
	}
}

module.exports = Narrative;
