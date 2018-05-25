const DomainResource = require('./DomainResource');
const Coding = require('./Coding');
const CodeableConcept = require('./CodeableConcept');
const AuditEvent_Agent = require('./AuditEvent_Agent');
const AuditEvent_Source = require('./AuditEvent_Source');
const AuditEvent_Entity = require('./AuditEvent_Entity');

class AuditEvent extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'AuditEvent';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'AuditEvent';
	}

	// This is a AuditEvent resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['AuditEvent'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Identifier for a family of the event.  For example, a menu item, program, rule, policy, function code, application name or URL. It identifies the performed function.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._type = new Coding(new_value);
	}

	// Identifier for the category of event.
	get subtype () {
		return this._subtype;
	}

	set subtype ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._subtype = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// Indicator for type of action performed during the event that generated the audit.
	get action () {
		return this._action;
	}

	set action ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['C', 'R', 'U', 'D', 'E'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field action`);
		}
		this._action = new_value;
	}

	// The time when the event occurred on the source.
	get recorded () {
		return this._recorded;
	}

	set recorded ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._recorded = new_value;
	}

	// Indicates whether the event succeeded or failed.
	get outcome () {
		return this._outcome;
	}

	set outcome ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['0', '4', '8', '12'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field outcome`);
		}
		this._outcome = new_value;
	}

	// A free text description of the outcome of the event.
	get outcomeDesc () {
		return this._outcomeDesc;
	}

	set outcomeDesc ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._outcomeDesc = new_value;
	}

	// The purposeOfUse (reason) that was used during the event being recorded.
	get purposeOfEvent () {
		return this._purposeOfEvent;
	}

	set purposeOfEvent ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._purposeOfEvent = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// An actor taking an active role in the event or activity that is logged.
	get agent () {
		return this._agent;
	}

	set agent ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._agent = Array.isArray(new_value) ? new_value.map(val => new AuditEvent_Agent(val)) : [new AuditEvent_Agent(new_value)];
	}

	// The system that is reporting the event.
	get source () {
		return this._source;
	}

	set source ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._source = new AuditEvent_Source(new_value);
	}

	// Specific instances of data or objects that have been accessed.
	get entity () {
		return this._entity;
	}

	set entity ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._entity = Array.isArray(new_value) ? new_value.map(val => new AuditEvent_Entity(val)) : [new AuditEvent_Entity(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this.resourceType,
			type: this.type && this.type.toJSON(),
			subtype: this.subtype && this.subtype.map(v => v.toJSON()),
			action: this.action,
			recorded: this.recorded,
			outcome: this.outcome,
			outcomeDesc: this.outcomeDesc,
			purposeOfEvent: this.purposeOfEvent && this.purposeOfEvent.map(v => v.toJSON()),
			agent: this.agent && this.agent.map(v => v.toJSON()),
			source: this.source && this.source.toJSON(),
			entity: this.entity && this.entity.map(v => v.toJSON())
		});
	}

}

module.exports = AuditEvent;
