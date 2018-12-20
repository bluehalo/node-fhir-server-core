const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class Specimen extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Specimen';
		Object.assign(this, opt);
	}

	// This is a Specimen resource
	static get __resourceType() {
		return 'Specimen';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Specimen = new_value;
	}

	// Id for specimen.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The availability of the specimen.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The kind of material that forms the specimen.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// Reference to the parent (source) specimen which is used when the specimen was either derived from or a component of another specimen.
	get parent() {
		return this.__parent;
	}

	set parent(new_value) {
		const Reference = require('./Reference');
		this.__parent = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Where the specimen came from. This may be from the patient(s) or from the environment or a device.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
	get accessionIdentifier() {
		return this.__accessionIdentifier;
	}

	set accessionIdentifier(new_value) {
		const Identifier = require('./Identifier');
		this.__accessionIdentifier = new Identifier(new_value);
	}

	// Time when specimen was received for processing or testing.
	get receivedTime() {
		return this.__receivedTime;
	}

	set receivedTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field receivedTime`);
		}
		this.__receivedTime = new_value;
	}

	// Details concerning the specimen collection.
	get collection() {
		return this.__collection;
	}

	set collection(new_value) {
		const SpecimenCollection = require('./SpecimenCollection');
		this.__collection = new SpecimenCollection(new_value);
	}

	// Details concerning treatment and processing steps for the specimen.
	get treatment() {
		return this.__treatment;
	}

	set treatment(new_value) {
		const SpecimenTreatment = require('./SpecimenTreatment');
		this.__treatment = Array.isArray(new_value)
			? new_value.map(val => new SpecimenTreatment(val))
			: [new SpecimenTreatment(new_value)];
	}

	// The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
	get container() {
		return this.__container;
	}

	set container(new_value) {
		const SpecimenContainer = require('./SpecimenContainer');
		this.__container = Array.isArray(new_value)
			? new_value.map(val => new SpecimenContainer(val))
			: [new SpecimenContainer(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			type: this.__type && this.__type.toJSON(),
			parent: this.__parent && this.__parent.map(v => v.toJSON()),
			subject: this.__subject && this.__subject.toJSON(),
			accessionIdentifier: this.__accessionIdentifier && this.__accessionIdentifier.toJSON(),
			receivedTime: this.__receivedTime,
			collection: this.__collection && this.__collection.toJSON(),
			treatment: this.__treatment && this.__treatment.map(v => v.toJSON()),
			container: this.__container && this.__container.map(v => v.toJSON()),
		});
	}
}

module.exports = Specimen;
