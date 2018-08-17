const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const DeviceComponent_ProductionSpecification = require('./DeviceComponent_ProductionSpecification');

class DeviceComponent extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'DeviceComponent';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DeviceComponent';
	}

	// This is a DeviceComponent resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['DeviceComponent'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// The locally assigned unique identification by the software. For example: handle ID.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// The component type as defined in the object-oriented or metric nomenclature partition.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// The timestamp for the most recent system change which includes device configuration or setting change.
	get lastSystemChange () {
		return this._lastSystemChange;
	}

	set lastSystemChange ( new_value ) {
		this._lastSystemChange = new_value;
	}

	// The link to the source Device that contains administrative device information such as manufacture, serial number, etc.
	get source () {
		return this._source;
	}

	set source ( new_value ) {
		this._source = new Reference(new_value);
	}

	// The link to the parent resource. For example: Channel is linked to its VMD parent.
	get parent () {
		return this._parent;
	}

	set parent ( new_value ) {
		this._parent = new Reference(new_value);
	}

	// The current operational status of the device. For example: On, Off, Standby, etc.
	get operationalStatus () {
		return this._operationalStatus;
	}

	set operationalStatus ( new_value ) {
		this._operationalStatus = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The parameter group supported by the current device component that is based on some nomenclature, e.g. cardiovascular.
	get parameterGroup () {
		return this._parameterGroup;
	}

	set parameterGroup ( new_value ) {
		this._parameterGroup = new CodeableConcept(new_value);
	}

	// The physical principle of the measurement. For example: thermal, chemical, acoustical, etc.
	get measurementPrinciple () {
		return this._measurementPrinciple;
	}

	set measurementPrinciple ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['other', 'chemical', 'electrical', 'impedance', 'nuclear', 'optical', 'thermal', 'biological', 'mechanical', 'acoustical', 'manual'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field measurementPrinciple`);
		}
		this._measurementPrinciple = new_value;
	}

	// The production specification such as component revision, serial number, etc.
	get productionSpecification () {
		return this._productionSpecification;
	}

	set productionSpecification ( new_value ) {
		this._productionSpecification = Array.isArray(new_value) ? new_value.map(val => new DeviceComponent_ProductionSpecification(val)) : [new DeviceComponent_ProductionSpecification(new_value)];
	}

	// The language code for the human-readable text string produced by the device. This language code will follow the IETF language tag. Example: en-US.
	get languageCode () {
		return this._languageCode;
	}

	set languageCode ( new_value ) {
		this._languageCode = new CodeableConcept(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.toJSON(),
			type: this._type && this._type.toJSON(),
			lastSystemChange: this._lastSystemChange,
			source: this._source && this._source.toJSON(),
			parent: this._parent && this._parent.toJSON(),
			operationalStatus: this._operationalStatus && this._operationalStatus.map(v => v.toJSON()),
			parameterGroup: this._parameterGroup && this._parameterGroup.toJSON(),
			measurementPrinciple: this._measurementPrinciple,
			productionSpecification: this._productionSpecification && this._productionSpecification.map(v => v.toJSON()),
			languageCode: this._languageCode && this._languageCode.toJSON()
		});
	}

}

module.exports = DeviceComponent;
