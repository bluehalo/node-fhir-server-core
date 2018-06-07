const BackboneElement = require('./BackboneElement');
const Coding = require('./Coding');

class TestScript_Origin extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestScript_Origin';
	}

	// Abstract name given to an origin server in this test script.  The name is provided as a number starting at 1.
	get index () {
		return this._index;
	}

	set index ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field index`);
		}
		this._index = new_value;
	}

	// The type of origin profile the test system supports.
	get profile () {
		return this._profile;
	}

	set profile ( new_value ) {
		this._profile = new Coding(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			index: this._index,
			profile: this._profile
		});
	}

}

module.exports = TestScript_Origin;
