const BackboneElement = require('./BackboneElement');

class ElementDefinition_Constraint extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'ElementDefinition_Constraint';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ElementDefinition_Constraint';
	}

	// Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality.
	get key () {
		return this._key;
	}

	set key ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field key`);
		}
		this._key = new_value;
	}

	// Description of why this constraint is necessary or appropriate.
	get requirements () {
		return this._requirements;
	}

	set requirements ( new_value ) {
		this._requirements = new_value;
	}

	// Identifies the impact constraint violation has on the conformance of the instance.
	get severity () {
		return this._severity;
	}

	set severity ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['error', 'warning'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field severity`);
		}
		this._severity = new_value;
	}

	// Text that can be used to describe the constraint in messages identifying that the constraint has been violated.
	get human () {
		return this._human;
	}

	set human ( new_value ) {
		this._human = new_value;
	}

	// A [FHIRPath](http://hl7.org/fluentpath) expression of constraint that can be executed to see if this constraint is met.
	get expression () {
		return this._expression;
	}

	set expression ( new_value ) {
		this._expression = new_value;
	}

	// An XPath expression of constraint that can be executed to see if this constraint is met.
	get xpath () {
		return this._xpath;
	}

	set xpath ( new_value ) {
		this._xpath = new_value;
	}

	// A reference to the original source of the constraint, for traceability purposes.
	get source () {
		return this._source;
	}

	set source ( new_value ) {
		this._source = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			key: this._key,
			requirements: this._requirements,
			severity: this._severity,
			human: this._human,
			expression: this._expression,
			xpath: this._xpath,
			source: this._source
		});
	}

}

module.exports = ElementDefinition_Constraint;
