const DomainResource = require('./DomainResource');
const InstantScalar = require('./scalars/Instant.scalar');

class DeviceComponent extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DeviceComponent';
		Object.assign(this, opt);
	}

	// This is a DeviceComponent resource
	static get __resourceType() {
		return 'DeviceComponent';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__DeviceComponent = new_value;
	}

	// Describes the specific component type as defined in the object-oriented or metric nomenclature partition.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// Describes the local assigned unique identification by the software. For example: handle ID.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// Describes the timestamp for the most recent system change which includes device configuration or setting change.
	get lastSystemChange() {
		return this.__lastSystemChange;
	}

	set lastSystemChange(new_value) {
		// Throw if new value does not match the pattern
		let pattern = InstantScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field lastSystemChange`);
		}
		this.__lastSystemChange = new_value;
	}

	// Describes the link to the source Device that contains administrative device information such as manufacture, serial number, etc.
	get source() {
		return this.__source;
	}

	set source(new_value) {
		const Reference = require('./Reference');
		this.__source = new Reference(new_value);
	}

	// Describes the link to the parent resource. For example: Channel is linked to its VMD parent.
	get parent() {
		return this.__parent;
	}

	set parent(new_value) {
		const Reference = require('./Reference');
		this.__parent = new Reference(new_value);
	}

	// Indicates current operational status of the device. For example: On, Off, Standby, etc.
	get operationalStatus() {
		return this.__operationalStatus;
	}

	set operationalStatus(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__operationalStatus = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Describes the parameter group supported by the current device component that is based on some nomenclature, e.g. cardiovascular.
	get parameterGroup() {
		return this.__parameterGroup;
	}

	set parameterGroup(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__parameterGroup = new CodeableConcept(new_value);
	}

	// Describes the physical principle of the measurement. For example: thermal, chemical, acoustical, etc.
	get measurementPrinciple() {
		return this.__measurementPrinciple;
	}

	set measurementPrinciple(new_value) {
		this.__measurementPrinciple = new_value;
	}

	// Describes the production specification such as component revision, serial number, etc.
	get productionSpecification() {
		return this.__productionSpecification;
	}

	set productionSpecification(new_value) {
		const DeviceComponentProductionSpecification = require('./DeviceComponentProductionSpecification');
		this.__productionSpecification = Array.isArray(new_value)
			? new_value.map(val => new DeviceComponentProductionSpecification(val))
			: [new DeviceComponentProductionSpecification(new_value)];
	}

	// Describes the language code for the human-readable text string produced by the device. This language code will follow the IETF language tag. Example: en-US.
	get languageCode() {
		return this.__languageCode;
	}

	set languageCode(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__languageCode = new CodeableConcept(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			type: this.__type && this.__type.toJSON(),
			identifier: this.__identifier && this.__identifier.toJSON(),
			lastSystemChange: this.__lastSystemChange,
			source: this.__source && this.__source.toJSON(),
			parent: this.__parent && this.__parent.toJSON(),
			operationalStatus: this.__operationalStatus && this.__operationalStatus.map(v => v.toJSON()),
			parameterGroup: this.__parameterGroup && this.__parameterGroup.toJSON(),
			measurementPrinciple: this.__measurementPrinciple,
			productionSpecification: this.__productionSpecification && this.__productionSpecification.map(v => v.toJSON()),
			languageCode: this.__languageCode && this.__languageCode.toJSON(),
		});
	}
}

module.exports = DeviceComponent;
