const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Period = require('./Period');
const Coverage_Grouping = require('./Coverage_Grouping');

class Coverage extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Coverage';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Coverage';
	}

	// This is a Coverage resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Coverage'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatination of the Coverage.SubscriberID and the Coverage.dependant.
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

	// The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// The party who 'owns' the insurance policy,  may be an individual, corporation or the subscriber's employer.
	get policyHolder () {
		return this._policyHolder;
	}

	set policyHolder ( new_value ) {
		this._policyHolder = new Reference(new_value);
	}

	// The party who has signed-up for or 'owns' the contractual relationship to the policy or to whom the benefit of the policy for services rendered to them or their family is due.
	get subscriber () {
		return this._subscriber;
	}

	set subscriber ( new_value ) {
		this._subscriber = new Reference(new_value);
	}

	// The insurer assigned ID for the Subscriber.
	get subscriberId () {
		return this._subscriberId;
	}

	set subscriberId ( new_value ) {
		this._subscriberId = new_value;
	}

	// The party who benefits from the insurance coverage., the patient when services are provided.
	get beneficiary () {
		return this._beneficiary;
	}

	set beneficiary ( new_value ) {
		this._beneficiary = new Reference(new_value);
	}

	// The relationship of beneficiary (patient) to the subscriber.
	get relationship () {
		return this._relationship;
	}

	set relationship ( new_value ) {
		this._relationship = new CodeableConcept(new_value);
	}

	// Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	// The program or plan underwriter or payor including both insurance and non-insurance agreements, such as patient-pay agreements. May provide multiple identifiers such as insurance company identifier or business identifier (BIN number).
	get payor () {
		return this._payor;
	}

	set payor ( new_value ) {
		this._payor = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A suite of underwrite specific classifiers, for example may be used to identify a class of coverage or employer group, Policy, Plan.
	get grouping () {
		return this._grouping;
	}

	set grouping ( new_value ) {
		this._grouping = new Coverage_Grouping(new_value);
	}

	// A unique identifier for a dependent under the coverage.
	get dependent () {
		return this._dependent;
	}

	set dependent ( new_value ) {
		this._dependent = new_value;
	}

	// An optional counter for a particular instance of the identified coverage which increments upon each renewal.
	get sequence () {
		return this._sequence;
	}

	set sequence ( new_value ) {
		this._sequence = new_value;
	}

	// The order of applicability of this coverage relative to other coverages which are currently inforce. Note, there may be gaps in the numbering and this does not imply primary, secondard etc. as the specific positioning of coverages depends upon the episode of care.
	get order () {
		return this._order;
	}

	set order ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field order`);
		}
		this._order = new_value;
	}

	// The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.
	get network () {
		return this._network;
	}

	set network ( new_value ) {
		this._network = new_value;
	}

	// The policy(s) which constitute this insurance coverage.
	get contract () {
		return this._contract;
	}

	set contract ( new_value ) {
		this._contract = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			status: this._status,
			type: this._type && this._type.toJSON(),
			policyHolder: this._policyHolder && this._policyHolder.toJSON(),
			subscriber: this._subscriber && this._subscriber.toJSON(),
			subscriberId: this._subscriberId,
			beneficiary: this._beneficiary && this._beneficiary.toJSON(),
			relationship: this._relationship && this._relationship.toJSON(),
			period: this._period && this._period.toJSON(),
			payor: this._payor && this._payor.map(v => v.toJSON()),
			grouping: this._grouping && this._grouping.toJSON(),
			dependent: this._dependent,
			sequence: this._sequence,
			order: this._order,
			network: this._network,
			contract: this._contract && this._contract.map(v => v.toJSON())
		});
	}

}

module.exports = Coverage;
