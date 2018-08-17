const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');

class EnrollmentRequest extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'EnrollmentRequest';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'EnrollmentRequest';
	}

	// This is a EnrollmentRequest resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['EnrollmentRequest'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// The Response business identifier.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The status of the resource instance.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field status`);
		}
		this._status = new_value;
	}

	// The date when this resource was created.
	get created () {
		return this._created;
	}

	set created ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field created`);
		}
		this._created = new_value;
	}

	// The Insurer who is target  of the request.
	get insurer () {
		return this._insurer;
	}

	set insurer ( new_value ) {
		this._insurer = new Reference(new_value);
	}

	// The practitioner who is responsible for the services rendered to the patient.
	get provider () {
		return this._provider;
	}

	set provider ( new_value ) {
		this._provider = new Reference(new_value);
	}

	// The organization which is responsible for the services rendered to the patient.
	get organization () {
		return this._organization;
	}

	set organization ( new_value ) {
		this._organization = new Reference(new_value);
	}

	// Patient Resource.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// Reference to the program or plan identification, underwriter or payor.
	get coverage () {
		return this._coverage;
	}

	set coverage ( new_value ) {
		this._coverage = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			status: this._status,
			created: this._created,
			insurer: this._insurer && this._insurer.toJSON(),
			provider: this._provider && this._provider.toJSON(),
			organization: this._organization && this._organization.toJSON(),
			subject: this._subject && this._subject.toJSON(),
			coverage: this._coverage && this._coverage.toJSON()
		});
	}

}

module.exports = EnrollmentRequest;
