const BackboneElement = require('./BackboneElement');
const Coding = require('./Coding');

class ExpansionProfile_Designation1 extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ExpansionProfile_Designation1';
	}

	// The language this designation is defined for.
	get language () {
		return this._language;
	}

	set language ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field language`);
		}
		this._language = new_value;
	}

	// Which kinds of designation to include in the expansion.
	get use () {
		return this._use;
	}

	set use ( new_value ) {
		this._use = new Coding(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			language: this._language,
			use: this._use
		});
	}

}

module.exports = ExpansionProfile_Designation1;
