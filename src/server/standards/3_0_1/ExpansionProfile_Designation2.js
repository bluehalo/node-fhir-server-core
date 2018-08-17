const BackboneElement = require('./BackboneElement');
const Coding = require('./Coding');

class ExpansionProfile_Designation2 extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ExpansionProfile_Designation2';
	}

	// The language this designation is defined for.
	get language () {
		return this._language;
	}

	set language ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field language`);
		}
		this._language = new_value;
	}

	// Which kinds of designation to exclude from the expansion.
	get use () {
		return this._use;
	}

	set use ( new_value ) {
		this._use = new Coding(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			language: this._language,
			use: this._use && this._use.toJSON()
		});
	}

}

module.exports = ExpansionProfile_Designation2;
