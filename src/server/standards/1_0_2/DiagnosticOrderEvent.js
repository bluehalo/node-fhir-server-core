const BackboneElement = require('./BackboneElement');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class DiagnosticOrderEvent extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DiagnosticOrderEvent';
		Object.assign(this, opt);
	}

	// This is a DiagnosticOrderEvent resource
	static get __resourceType() {
		return 'DiagnosticOrderEvent';
	}

	// The status for the event.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Additional information about the event that occurred - e.g. if the status remained unchanged.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__description = new CodeableConcept(new_value);
	}

	// The date/time at which the event occurred.
	get dateTime() {
		return this.__dateTime;
	}

	set dateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field dateTime`);
		}
		this.__dateTime = new_value;
	}

	// The person responsible for performing or recording the action.
	get actor() {
		return this.__actor;
	}

	set actor(new_value) {
		const Reference = require('./Reference');
		this.__actor = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			status: this.__status,
			description: this.__description && this.__description.toJSON(),
			dateTime: this.__dateTime,
			actor: this.__actor && this.__actor.toJSON(),
		});
	}
}

module.exports = DiagnosticOrderEvent;
