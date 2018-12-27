const Element = require('./Element');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class DataRequirementDateFilter extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DataRequirementDateFilter';
		Object.assign(this, opt);
	}

	// This is a DataRequirementDateFilter resource
	static get __resourceType() {
		return 'DataRequirementDateFilter';
	}

	// The date-valued attribute of the filter. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant. The path must resolve to an element of type dateTime, Period, Schedule, or Timing.
	get path() {
		return this.__path;
	}

	set path(new_value) {
		this.__path = new_value;
	}

	// The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration from now.
	get valueDateTime() {
		return this.__valueDateTime;
	}

	set valueDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valueDateTime`);
		}
		this.__valueDateTime = new_value;
	}

	// The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration from now.
	get valuePeriod() {
		return this.__valuePeriod;
	}

	set valuePeriod(new_value) {
		const Period = require('./Period');
		this.__valuePeriod = new Period(new_value);
	}

	// The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration from now.
	get valueDuration() {
		return this.__valueDuration;
	}

	set valueDuration(new_value) {
		const Duration = require('./Duration');
		this.__valueDuration = new Duration(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			path: this.__path,
			valueDateTime: this.__valueDateTime,
			valuePeriod: this.__valuePeriod && this.__valuePeriod.toJSON(),
			valueDuration: this.__valueDuration && this.__valueDuration.toJSON(),
		});
	}
}

module.exports = DataRequirementDateFilter;
