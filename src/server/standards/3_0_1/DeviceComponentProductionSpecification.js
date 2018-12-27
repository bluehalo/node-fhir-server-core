const BackboneElement = require('./BackboneElement');

class DeviceComponentProductionSpecification extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DeviceComponentProductionSpecification';
		Object.assign(this, opt);
	}

	// This is a DeviceComponentProductionSpecification resource
	static get __resourceType() {
		return 'DeviceComponentProductionSpecification';
	}

	// The specification type, such as, serial number, part number, hardware revision, software revision, etc.
	get specType() {
		return this.__specType;
	}

	set specType(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__specType = new CodeableConcept(new_value);
	}

	// The internal component unique identification. This is a provision for manufacture specific standard components using a private OID. 11073-10101 has a partition for private OID semantic that the manufacturer can make use of.
	get componentId() {
		return this.__componentId;
	}

	set componentId(new_value) {
		const Identifier = require('./Identifier');
		this.__componentId = new Identifier(new_value);
	}

	// The printable string defining the component.
	get productionSpec() {
		return this.__productionSpec;
	}

	set productionSpec(new_value) {
		this.__productionSpec = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			specType: this.__specType && this.__specType.toJSON(),
			componentId: this.__componentId && this.__componentId.toJSON(),
			productionSpec: this.__productionSpec,
		});
	}
}

module.exports = DeviceComponentProductionSpecification;
