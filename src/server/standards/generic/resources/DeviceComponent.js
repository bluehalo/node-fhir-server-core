const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const CodeableConcept = require('../types/CodeableConcept');
const Reference = require('../types/Reference');
const Code = require('../types/Code');

class ProductionSpecification {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// specType	Σ	0..1	CodeableConcept	Type or kind of production specification, for example serial number or software revision
	// DeviceSpecificationSpecType (Extensible)
	set specType(specType) {
		this._specType = new CodeableConcept(specType);
	}

	get specType() {
		return this._specType;
	}

	// componentId	Σ	0..1	Identifier	Internal component unique identification
	set componentId(componentId) {
		this._componentId = new Identifier(componentId);
	}

	get componentId() {
		return this._componentId;
	}

	// productionSpec	Σ	0..1	string	A printable string defining the component
	set productionSpec(productionSpec) {
		this._productionSpec = productionSpec;
	}

	get productionSpec() {
		return this._productionSpec;
	}

	toJSON() {
		return {
			specType: this._specType,
			componentId: this._componentId,
			productionSpec: this._productionSpec,
		};
	}
}

class DeviceComponent extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'DeviceComponent';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	1..1	Identifier	Instance id assigned by the software stack
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// type	Σ	1..1	CodeableConcept	What kind of component it is
	// FHIR Device Types (Preferred)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// lastSystemChange	Σ	0..1	instant	Recent system change timestamp
	set lastSystemChange(lastSystemChange) {
		this._lastSystemChange = lastSystemChange;
	}

	get lastSystemChange() {
		return this._lastSystemChange;
	}

	// source	Σ	0..1	Reference(Device)	Top-level device resource link
	set source(source) {
		this._source = new Reference(source);
	}

	get source() {
		return this._source;
	}

	// parent	Σ	0..1	Reference(DeviceComponent)	Parent resource link
	set parent(parent) {
		this._parent = new Reference(parent);
	}

	get parent() {
		return this._parent;
	}

	// operationalStatus	Σ	0..*	CodeableConcept	Current operational status of the component, for example On, Off or Standby
	// DeviceComponentOperationalStatus (Extensible)
	set operationalStatus(operationalStatus) {
		if (Array.isArray(operationalStatus)) {
			this._operationalStatus = operationalStatus.map((i) => new CodeableConcept(i));
		} else {
			this._operationalStatus = [new CodeableConcept(operationalStatus)];
		}
	}

	get operationalStatus() {
		return this._operationalStatus;
	}

	// parameterGroup	Σ	0..1	CodeableConcept	Current supported parameter group
	// DeviceComponentParameterGroup (Extensible)
	set parameterGroup(parameterGroup) {
		this._parameterGroup = new CodeableConcept(parameterGroup);
	}

	get parameterGroup() {
		return this._parameterGroup;
	}

	// measurementPrinciple	Σ	0..1	code	other | chemical | electrical | impedance | nuclear | optical | thermal | biological | mechanical | acoustical | manual+
	// MeasmntPrinciple (Required)
	set measurementPrinciple(measurementPrinciple) {
		this._measurementPrinciple = new Code(measurementPrinciple);
	}

	get measurementPrinciple() {
		return this._measurementPrinciple;
	}

	// productionSpecification	Σ	0..*	BackboneElement	Specification details such as Component Revisions, or Serial Numbers
	set productionSpecification(productionSpecification) {
		if (Array.isArray(productionSpecification)) {
			this._productionSpecification = productionSpecification.map((i) => new ProductionSpecification(i));
		} else {
			this._productionSpecification = [new ProductionSpecification(productionSpecification)];
		}
	}

	get productionSpecification() {
		return this._productionSpecification;
	}

	// languageCode	Σ	0..1	CodeableConcept	Language code for the human-readable text strings produced by the device
	// Common Languages (Extensible but limited to All Languages)
	set languageCode(languageCode) {
		this._languageCode = new CodeableConcept(languageCode);
	}

	get languageCode() {
		return this._languageCode;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			type: this._type,
			lastSystemChange: this._lastSystemChange,
			source: this._source,
			parent: this._parent,
			operationalStatus: this._operationalStatus,
			parameterGroup: this._parameterGroup,
			measurementPrinciple: this._measurementPrinciple,
			productionSpecification: this._productionSpecification,
			languageCode: this._languageCode,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.DeviceComponent = DeviceComponent;
module.exports.ProductionSpecification = ProductionSpecification;
