const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Specimen_Collection = require('./Specimen_Collection');
const Specimen_Processing = require('./Specimen_Processing');
const Specimen_Container = require('./Specimen_Container');
const Annotation = require('./Annotation');

class Specimen extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Specimen';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Specimen';
	}

	// This is a Specimen resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Specimen'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Id for specimen.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
	get accessionIdentifier () {
		return this._accessionIdentifier;
	}

	set accessionIdentifier ( new_value ) {
		this._accessionIdentifier = new Identifier(new_value);
	}

	// The availability of the specimen.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['available', 'unavailable', 'unsatisfactory', 'entered-in-error'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// The kind of material that forms the specimen.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// Where the specimen came from. This may be from the patient(s) or from the environment or a device.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// Time when specimen was received for processing or testing.
	get receivedTime () {
		return this._receivedTime;
	}

	set receivedTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field receivedTime`);
		}
		this._receivedTime = new_value;
	}

	// Reference to the parent (source) specimen which is used when the specimen was either derived from or a component of another specimen.
	get parent () {
		return this._parent;
	}

	set parent ( new_value ) {
		this._parent = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Details concerning a test or procedure request that required a specimen to be collected.
	get request () {
		return this._request;
	}

	set request ( new_value ) {
		this._request = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Details concerning the specimen collection.
	get collection () {
		return this._collection;
	}

	set collection ( new_value ) {
		this._collection = new Specimen_Collection(new_value);
	}

	// Details concerning processing and processing steps for the specimen.
	get processing () {
		return this._processing;
	}

	set processing ( new_value ) {
		this._processing = Array.isArray(new_value) ? new_value.map(val => new Specimen_Processing(val)) : [new Specimen_Processing(new_value)];
	}

	// The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
	get container () {
		return this._container;
	}

	set container ( new_value ) {
		this._container = Array.isArray(new_value) ? new_value.map(val => new Specimen_Container(val)) : [new Specimen_Container(new_value)];
	}

	// To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			accessionIdentifier: this._accessionIdentifier && this._accessionIdentifier.toJSON(),
			status: this._status,
			type: this._type && this._type.toJSON(),
			subject: this._subject && this._subject.toJSON(),
			receivedTime: this._receivedTime,
			parent: this._parent && this._parent.map(v => v.toJSON()),
			request: this._request && this._request.map(v => v.toJSON()),
			collection: this._collection && this._collection.toJSON(),
			processing: this._processing && this._processing.map(v => v.toJSON()),
			container: this._container && this._container.map(v => v.toJSON()),
			note: this._note && this._note.map(v => v.toJSON())
		});
	}

}

module.exports = Specimen;
