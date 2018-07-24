const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const SupplyRequest_OrderedItem = require('./SupplyRequest_OrderedItem');
const Period = require('./Period');
const Timing = require('./Timing');
const SupplyRequest_Requester = require('./SupplyRequest_Requester');
const Reference = require('./Reference');

class SupplyRequest extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'SupplyRequest';
	}

	// This is a SupplyRequest resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['SupplyRequest'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Unique identifier for this supply request.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// Status of the supply request.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['draft', 'active', 'suspended', 'cancelled', 'completed', 'entered-in-error', 'unknown'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		this._category = new CodeableConcept(new_value);
	}

	// Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
	get priority () {
		return this._priority;
	}

	set priority ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field priority`);
		}
		this._priority = new_value;
	}

	// The item being requested.
	get orderedItem () {
		return this._orderedItem;
	}

	set orderedItem ( new_value ) {
		this._orderedItem = new SupplyRequest_OrderedItem(new_value);
	}

	// When the request should be fulfilled.
	get occurrenceDateTime () {
		return this._occurrenceDateTime;
	}

	set occurrenceDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field occurrenceDateTime`);
		}
		this._occurrenceDateTime = new_value;
	}

	// When the request should be fulfilled.
	get occurrencePeriod () {
		return this._occurrencePeriod;
	}

	set occurrencePeriod ( new_value ) {
		this._occurrencePeriod = new Period(new_value);
	}

	// When the request should be fulfilled.
	get occurrenceTiming () {
		return this._occurrenceTiming;
	}

	set occurrenceTiming ( new_value ) {
		this._occurrenceTiming = new Timing(new_value);
	}

	// When the request was made.
	get authoredOn () {
		return this._authoredOn;
	}

	set authoredOn ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field authoredOn`);
		}
		this._authoredOn = new_value;
	}

	// The individual who initiated the request and has responsibility for its activation.
	get requester () {
		return this._requester;
	}

	set requester ( new_value ) {
		this._requester = new SupplyRequest_Requester(new_value);
	}

	// Who is intended to fulfill the request.
	get supplier () {
		return this._supplier;
	}

	set supplier ( new_value ) {
		this._supplier = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Why the supply item was requested.
	get reasonCodeableConcept () {
		return this._reasonCodeableConcept;
	}

	set reasonCodeableConcept ( new_value ) {
		this._reasonCodeableConcept = new CodeableConcept(new_value);
	}

	// Why the supply item was requested.
	get reasonReference () {
		return this._reasonReference;
	}

	set reasonReference ( new_value ) {
		this._reasonReference = new Reference(new_value);
	}

	// Where the supply is expected to come from.
	get deliverFrom () {
		return this._deliverFrom;
	}

	set deliverFrom ( new_value ) {
		this._deliverFrom = new Reference(new_value);
	}

	// Where the supply is destined to go.
	get deliverTo () {
		return this._deliverTo;
	}

	set deliverTo ( new_value ) {
		this._deliverTo = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			status: this._status,
			category: this._category,
			priority: this._priority,
			orderedItem: this._orderedItem,
			occurrenceDateTime: this._occurrenceDateTime,
			occurrencePeriod: this._occurrencePeriod,
			occurrenceTiming: this._occurrenceTiming,
			authoredOn: this._authoredOn,
			requester: this._requester,
			supplier: this._supplier,
			reasonCodeableConcept: this._reasonCodeableConcept,
			reasonReference: this._reasonReference,
			deliverFrom: this._deliverFrom,
			deliverTo: this._deliverTo
		});
	}

}

module.exports = SupplyRequest;
