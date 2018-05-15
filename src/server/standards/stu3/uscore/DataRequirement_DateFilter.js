const BackboneElement = require('./BackboneElement');
const Period = require('./Period');
const Duration = require('./Duration');

class DataRequirement_DateFilter extends BackboneElement {

	constructor ( opts ) {
		super();
		this._resourceType = 'DataRequirement_DateFilter';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DataRequirement_DateFilter';
	}

	// The date-valued attribute of the filter. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant. The path must resolve to an element of type dateTime, Period, Schedule, or Timing.
	get path () {
		return this._path;
	}

	set path ( new_value ) {
		this._path = new_value;
	}

	// The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration from now.
	get valueDateTime () {
		return this._valueDateTime;
	}

	set valueDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueDateTime`);
		}
		this._valueDateTime = new_value;
	}

	// The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration from now.
	get valuePeriod () {
		return this._valuePeriod;
	}

	set valuePeriod ( new_value ) {
		this._valuePeriod = new Period(new_value);
	}

	// The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration from now.
	get valueDuration () {
		return this._valueDuration;
	}

	set valueDuration ( new_value ) {
		this._valueDuration = new Duration(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			path: this._path,
			valueDateTime: this._valueDateTime,
			valuePeriod: this._valuePeriod,
			valueDuration: this._valueDuration
		});
	}

}

module.exports = DataRequirement_DateFilter;
