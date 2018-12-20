const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class ProcedureRequest extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ProcedureRequest';
		Object.assign(this, opt);
	}

	// This is a ProcedureRequest resource
	static get __resourceType() {
		return 'ProcedureRequest';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__ProcedureRequest = new_value;
	}

	// Identifiers assigned to this order by the order or by the receiver.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The person, animal or group that should receive the procedure.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// The specific procedure that is ordered. Use text if the exact nature of the procedure cannot be coded.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// Indicates the sites on the subject\'s body where the procedure should be performed (I.e. the target sites).
	get bodySite() {
		return this.__bodySite;
	}

	set bodySite(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__bodySite = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The reason why the procedure is being proposed or ordered. This procedure request may be motivated by a Condition for instance.
	get reasonCodeableConcept() {
		return this.__reasonCodeableConcept;
	}

	set reasonCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonCodeableConcept = new CodeableConcept(new_value);
	}

	// The reason why the procedure is being proposed or ordered. This procedure request may be motivated by a Condition for instance.
	get reasonReference() {
		return this.__reasonReference;
	}

	set reasonReference(new_value) {
		const Reference = require('./Reference');
		this.__reasonReference = new Reference(new_value);
	}

	// The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. \'Every 8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\'; \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.
	get scheduledDateTime() {
		return this.__scheduledDateTime;
	}

	set scheduledDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field scheduledDateTime`);
		}
		this.__scheduledDateTime = new_value;
	}

	// The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. \'Every 8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\'; \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.
	get scheduledPeriod() {
		return this.__scheduledPeriod;
	}

	set scheduledPeriod(new_value) {
		const Period = require('./Period');
		this.__scheduledPeriod = new Period(new_value);
	}

	// The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. \'Every 8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\'; \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.
	get scheduledTiming() {
		return this.__scheduledTiming;
	}

	set scheduledTiming(new_value) {
		const Timing = require('./Timing');
		this.__scheduledTiming = new Timing(new_value);
	}

	// The encounter within which the procedure proposal or request was created.
	get encounter() {
		return this.__encounter;
	}

	set encounter(new_value) {
		const Reference = require('./Reference');
		this.__encounter = new Reference(new_value);
	}

	// For example, the surgeon, anaethetist, endoscopist, etc.
	get performer() {
		return this.__performer;
	}

	set performer(new_value) {
		const Reference = require('./Reference');
		this.__performer = new Reference(new_value);
	}

	// The status of the order.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Any other notes associated with this proposal or order - e.g. provider instructions.
	get notes() {
		return this.__notes;
	}

	set notes(new_value) {
		const Annotation = require('./Annotation');
		this.__notes = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.
	get asNeededBoolean() {
		return this.__asNeededBoolean;
	}

	set asNeededBoolean(new_value) {
		this.__asNeededBoolean = new_value;
	}

	// If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.
	get asNeededCodeableConcept() {
		return this.__asNeededCodeableConcept;
	}

	set asNeededCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__asNeededCodeableConcept = new CodeableConcept(new_value);
	}

	// The time when the request was made.
	get orderedOn() {
		return this.__orderedOn;
	}

	set orderedOn(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field orderedOn`);
		}
		this.__orderedOn = new_value;
	}

	// The healthcare professional responsible for proposing or ordering the procedure.
	get orderer() {
		return this.__orderer;
	}

	set orderer(new_value) {
		const Reference = require('./Reference');
		this.__orderer = new Reference(new_value);
	}

	// The clinical priority associated with this order.
	get priority() {
		return this.__priority;
	}

	set priority(new_value) {
		this.__priority = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			subject: this.__subject && this.__subject.toJSON(),
			code: this.__code && this.__code.toJSON(),
			bodySite: this.__bodySite && this.__bodySite.map(v => v.toJSON()),
			reasonCodeableConcept: this.__reasonCodeableConcept && this.__reasonCodeableConcept.toJSON(),
			reasonReference: this.__reasonReference && this.__reasonReference.toJSON(),
			scheduledDateTime: this.__scheduledDateTime,
			scheduledPeriod: this.__scheduledPeriod && this.__scheduledPeriod.toJSON(),
			scheduledTiming: this.__scheduledTiming && this.__scheduledTiming.toJSON(),
			encounter: this.__encounter && this.__encounter.toJSON(),
			performer: this.__performer && this.__performer.toJSON(),
			status: this.__status,
			notes: this.__notes && this.__notes.map(v => v.toJSON()),
			asNeededBoolean: this.__asNeededBoolean,
			asNeededCodeableConcept: this.__asNeededCodeableConcept && this.__asNeededCodeableConcept.toJSON(),
			orderedOn: this.__orderedOn,
			orderer: this.__orderer && this.__orderer.toJSON(),
			priority: this.__priority,
		});
	}
}

module.exports = ProcedureRequest;
