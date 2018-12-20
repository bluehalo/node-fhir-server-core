const DomainResource = require('./DomainResource');

class Medication extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Medication';
		Object.assign(this, opt);
	}

	// This is a Medication resource
	static get __resourceType() {
		return 'Medication';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Medication = new_value;
	}

	// A code (or set of codes) that specify this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// Set to true if the item is attributable to a specific manufacturer.
	get isBrand() {
		return this.__isBrand;
	}

	set isBrand(new_value) {
		this.__isBrand = new_value;
	}

	// Describes the details of the manufacturer.
	get manufacturer() {
		return this.__manufacturer;
	}

	set manufacturer(new_value) {
		const Reference = require('./Reference');
		this.__manufacturer = new Reference(new_value);
	}

	// Information that only applies to products (not packages).
	get product() {
		return this.__product;
	}

	set product(new_value) {
		const MedicationProduct = require('./MedicationProduct');
		this.__product = new MedicationProduct(new_value);
	}

	// Information that only applies to packages (not products).
	get package() {
		return this.__package;
	}

	set package(new_value) {
		const MedicationPackage = require('./MedicationPackage');
		this.__package = new MedicationPackage(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			code: this.__code && this.__code.toJSON(),
			isBrand: this.__isBrand,
			manufacturer: this.__manufacturer && this.__manufacturer.toJSON(),
			product: this.__product && this.__product.toJSON(),
			package: this.__package && this.__package.toJSON(),
		});
	}
}

module.exports = Medication;
