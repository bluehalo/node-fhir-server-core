const BackboneElement = require('./BackboneElement');
const ValueSet_Include = require('./ValueSet_Include');

class ValueSet_Compose extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ValueSet_Compose';
	}

	// If a locked date is defined, then the Content Logical Definition must be evaluated using the current version as of the locked date for referenced code system(s) and value set instances where ValueSet.compose.include.version is not defined.
	get lockedDate () {
		return this._lockedDate;
	}

	set lockedDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field lockedDate`);
		}
		this._lockedDate = new_value;
	}

	// Whether inactive codes - codes that are not approved for current use - are in the value set. If inactive = true, inactive codes are to be included in the expansion, if inactive = false, the inactive codes will not be included in the expansion. If absent, the behavior is determined by the implementation, or by the applicable ExpansionProfile (but generally, inactive codes would be expected to be included).
	get inactive () {
		return this._inactive;
	}

	set inactive ( new_value ) {
		this._inactive = new_value;
	}

	// Include one or more codes from a code system or other value set(s).
	get include () {
		return this._include;
	}

	set include ( new_value ) {
		this._include = Array.isArray(new_value) ? new_value.map(val => new ValueSet_Include(val)) : [new ValueSet_Include(new_value)];
	}

	// Exclude one or more codes from the value set based on code system filters and/or other value sets.
	get exclude () {
		return this._exclude;
	}

	set exclude ( new_value ) {
		this._exclude = Array.isArray(new_value) ? new_value.map(val => new ValueSet_Include(val)) : [new ValueSet_Include(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			lockedDate: this._lockedDate,
			inactive: this._inactive,
			include: this._include && this._include.map(v => v.toJSON()),
			exclude: this._exclude && this._exclude.map(v => v.toJSON())
		});
	}

}

module.exports = ValueSet_Compose;
