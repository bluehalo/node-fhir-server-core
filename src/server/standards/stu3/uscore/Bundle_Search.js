const BackboneElement = require('./BackboneElement');

class Bundle_Search extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Bundle_Search';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Bundle_Search';
	}

	// Why this entry is in the result set - whether it's included as a match or because of an _include requirement.
	get mode () {
		return this._mode;
	}

	set mode ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['match', 'include', 'outcome'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field mode`);
		}
		this._mode = new_value;
	}

	// When searching, the server's search ranking score for the entry.
	get score () {
		return this._score;
	}

	set score ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field score`);
		}
		this._score = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			mode: this.mode,
			score: this.score
		});
	}

}

module.exports = Bundle_Search;
