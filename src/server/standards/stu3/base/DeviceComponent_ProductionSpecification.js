const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Identifier = require('./Identifier');

class DeviceComponent_ProductionSpecification extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DeviceComponent_ProductionSpecification';
	}

	// The specification type, such as, serial number, part number, hardware revision, software revision, etc.
	get specType () {
		return this._specType;
	}

	set specType ( new_value ) {
		this._specType = new CodeableConcept(new_value);
	}

	// The internal component unique identification. This is a provision for manufacture specific standard components using a private OID. 11073-10101 has a partition for private OID semantic that the manufacturer can make use of.
	get componentId () {
		return this._componentId;
	}

	set componentId ( new_value ) {
		this._componentId = new Identifier(new_value);
	}

	// The printable string defining the component.
	get productionSpec () {
		return this._productionSpec;
	}

	set productionSpec ( new_value ) {
		this._productionSpec = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			specType: this._specType,
			componentId: this._componentId,
			productionSpec: this._productionSpec
		});
	}

}

module.exports = DeviceComponent_ProductionSpecification;
