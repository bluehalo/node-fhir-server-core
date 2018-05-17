const BackboneElement = require('./BackboneElement');
const CapabilityStatement_Security = require('./CapabilityStatement_Security');
const CapabilityStatement_Resource = require('./CapabilityStatement_Resource');
const CapabilityStatement_Interaction1 = require('./CapabilityStatement_Interaction1');
const CapabilityStatement_SearchParam = require('./CapabilityStatement_SearchParam');
const CapabilityStatement_Operation = require('./CapabilityStatement_Operation');

class CapabilityStatement_Rest extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CapabilityStatement_Rest';
	}

	// Identifies whether this portion of the statement is describing the ability to initiate or receive restful operations.
	get mode () {
		return this._mode;
	}

	set mode ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['client', 'server'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field mode`);
		}
		this._mode = new_value;
	}

	// Information about the system's restful capabilities that apply across all applications, such as security.
	get documentation () {
		return this._documentation;
	}

	set documentation ( new_value ) {
		this._documentation = new_value;
	}

	// Information about security implementation from an interface perspective - what a client needs to know.
	get security () {
		return this._security;
	}

	set security ( new_value ) {
		this._security = new CapabilityStatement_Security(new_value);
	}

	// A specification of the restful capabilities of the solution for a specific resource type.
	get resource () {
		return this._resource;
	}

	set resource ( new_value ) {
		this._resource = Array.isArray(new_value) ? new_value.map(val => new CapabilityStatement_Resource(val)) : [new CapabilityStatement_Resource(new_value)];
	}

	// A specification of restful operations supported by the system.
	get interaction () {
		return this._interaction;
	}

	set interaction ( new_value ) {
		this._interaction = Array.isArray(new_value) ? new_value.map(val => new CapabilityStatement_Interaction1(val)) : [new CapabilityStatement_Interaction1(new_value)];
	}

	// Search parameters that are supported for searching all resources for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
	get searchParam () {
		return this._searchParam;
	}

	set searchParam ( new_value ) {
		this._searchParam = Array.isArray(new_value) ? new_value.map(val => new CapabilityStatement_SearchParam(val)) : [new CapabilityStatement_SearchParam(new_value)];
	}

	// Definition of an operation or a named query together with its parameters and their meaning and type.
	get operation () {
		return this._operation;
	}

	set operation ( new_value ) {
		this._operation = Array.isArray(new_value) ? new_value.map(val => new CapabilityStatement_Operation(val)) : [new CapabilityStatement_Operation(new_value)];
	}

	// An absolute URI which is a reference to the definition of a compartment that the system supports. The reference is to a CompartmentDefinition resource by its canonical URL .
	get compartment () {
		return this._compartment;
	}

	set compartment ( new_value ) {
		this._compartment = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			mode: this._mode,
			documentation: this._documentation,
			security: this._security,
			resource: this._resource,
			interaction: this._interaction,
			searchParam: this._searchParam,
			operation: this._operation,
			compartment: this._compartment
		});
	}

}

module.exports = CapabilityStatement_Rest;
