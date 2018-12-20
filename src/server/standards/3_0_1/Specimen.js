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

	// The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
	get accessionIdentifier() {
		return this.__accessionIdentifier;
	}

	set accessionIdentifier(new_value) {
		const Identifier = require('./Identifier');
		this.__accessionIdentifier = new Identifier(new_value);
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

	// Where the specimen came from. This may be from the patient(s) or from the environment or a device.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
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

	// Reference to the parent (source) specimen which is used when the specimen was either derived from or a component of another specimen.
	get parent() {
		return this.__parent;
	}

	set parent(new_value) {
		const Reference = require('./Reference');
		this.__parent = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Details concerning a test or procedure request that required a specimen to be collected.
	get request() {
		return this.__request;
	}

	set request(new_value) {
		const Reference = require('./Reference');
		this.__request = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Details concerning the specimen collection.
	get collection() {
		return this.__collection;
	}

	set collection(new_value) {
		const SpecimenCollection = require('./SpecimenCollection');
		this.__collection = new SpecimenCollection(new_value);
	}

	// Details concerning processing and processing steps for the specimen.
	get processing() {
		return this.__processing;
	}

	set processing(new_value) {
		const SpecimenProcessing = require('./SpecimenProcessing');
		this.__processing = Array.isArray(new_value)
			? new_value.map(val => new SpecimenProcessing(val))
			: [new SpecimenProcessing(new_value)];
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

	// To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			accessionIdentifier: this.__accessionIdentifier && this.__accessionIdentifier.toJSON(),
			status: this.__status,
			type: this.__type && this.__type.toJSON(),
			subject: this.__subject && this.__subject.toJSON(),
			receivedTime: this.__receivedTime,
			parent: this.__parent && this.__parent.map(v => v.toJSON()),
			request: this.__request && this.__request.map(v => v.toJSON()),
			collection: this.__collection && this.__collection.toJSON(),
			processing: this.__processing && this.__processing.map(v => v.toJSON()),
			container: this.__container && this.__container.map(v => v.toJSON()),
			note: this.__note && this.__note.map(v => v.toJSON()),
		});
	}
}

module.exports = Specimen;
