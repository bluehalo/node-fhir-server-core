const BackboneElement = require('./BackboneElement');

class MeasureGroupStratifier extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MeasureGroupStratifier';
		Object.assign(this, opt);
	}

	// This is a MeasureGroupStratifier resource
	static get __resourceType() {
		return 'MeasureGroupStratifier';
	}

	// The identifier for the stratifier used to coordinate the reported data back to this stratifier.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// The criteria for the stratifier. This must be the name of an expression defined within a referenced library.
	get criteria() {
		return this.__criteria;
	}

	set criteria(new_value) {
		this.__criteria = new_value;
	}

	// The path to an element that defines the stratifier, specified as a valid FHIR resource path.
	get path() {
		return this.__path;
	}

	set path(new_value) {
		this.__path = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			identifier: this.__identifier && this.__identifier.toJSON(),
			criteria: this.__criteria,
			path: this.__path,
		});
	}
}

module.exports = MeasureGroupStratifier;
