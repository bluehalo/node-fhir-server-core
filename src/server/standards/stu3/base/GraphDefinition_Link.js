const BackboneElement = require('./BackboneElement');
const GraphDefinition_Target = require('./GraphDefinition_Target');

class GraphDefinition_Link extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'GraphDefinition_Link';
	}

	// Path in the resource that contains the link.
	get path () {
		return this._path;
	}

	set path ( new_value ) {
		this._path = new_value;
	}

	// Which slice (if profiled).
	get sliceName () {
		return this._sliceName;
	}

	set sliceName ( new_value ) {
		this._sliceName = new_value;
	}

	// Minimum occurrences for this link.
	get min () {
		return this._min;
	}

	set min ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field min`);
		}
		this._min = new_value;
	}

	// Maximum occurrences for this link.
	get max () {
		return this._max;
	}

	set max ( new_value ) {
		this._max = new_value;
	}

	// Information about why this link is of interest in this graph definition.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Potential target for the link.
	get target () {
		return this._target;
	}

	set target ( new_value ) {
		this._target = Array.isArray(new_value) ? new_value.map(val => new GraphDefinition_Target(val)) : [new GraphDefinition_Target(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			path: this._path,
			sliceName: this._sliceName,
			min: this._min,
			max: this._max,
			description: this._description,
			target: this._target
		});
	}

}

module.exports = GraphDefinition_Link;
