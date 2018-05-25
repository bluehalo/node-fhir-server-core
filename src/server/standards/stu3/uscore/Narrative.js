const Element = require('./Element');

class Narrative extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Narrative';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Narrative';
	}

	// The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['generated', 'extensions', 'additional', 'empty'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// The actual narrative content, a stripped down version of XHTML.
	get div () {
		return this._div;
	}

	set div ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._div = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			status: this.status,
			div: this.div
		});
	}

}

module.exports = Narrative;
