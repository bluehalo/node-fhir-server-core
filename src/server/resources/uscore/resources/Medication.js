const DomainResource = require('./types/DomainResource');
const Meta = require('./types/Meta');
const Code = require('./types/Code');
const Narrative = require('./uscore/types/Narrative');
const Resource = require('./types/Resource');
const Extension = require('./types/Extension');
const CodeableConcept = require('./types/CodeableConcept');
const Reference = require('./types/Reference');
const Ratio = require('./types/Ratio');

class Content {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// id		0..1	string	xml:id (or equivalent in JSON)
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!*	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
	}

	// item[x]		1..1		The item in the package
	// itemCodeableConcept			CodeableConcept
	set itemCodeableConcept(itemCodeableConcept) {
		this._itemCodeableConcept = new CodeableConcept(itemCodeableConcept);
	}

	get itemCodeableConcept() {
		return this._itemCodeableConcept;
	}

	// itemReference			Reference
	set itemReference(itemReference) {
		this._itemReference = new Reference(itemReference);
	}

	get itemReference() {
		return this._itemReference;
	}

	// amount		0..1	SimpleQuantity	Quantity present in the package
	set amount(amount) {
		this._amount = amount;
	}

	get amount() {
		return this._amount;
	}

	toJSON() {
		return {
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			itemCodeableConcept: this._itemCodeableConcept,
			itemReference: this._itemReference,
			amount: this._amount,
		};
	}
}

class MedicationPackage {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// id		0..1	string	xml:id (or equivalent in JSON)
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!*	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
	}

	// container		0..1	CodeableConcept	E.g. box, vial, blister-pack
	// Binding: SNOMED CT Form Codes (example)
	set container(container) {
		this._container = new CodeableConcept(container);
	}

	get container() {
		return this._container;
	}

	// content	I	0..*	BackboneElement	What is in the package
	set content(content) {
		if (Array.isArray(content)) {
			this._content = content.map((i) => new Content(i));
		} else {
			this._content = [new Content(content)];
		}
	}

	get content() {
		return this._content;
	}

	toJSON() {
		return {
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			container: this._container,
			content: this._content,
		};
	}
}

class Batch {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// id		0..1	string	xml:id (or equivalent in JSON)
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!*	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
	}

	// lotNumber		0..1	string	Identifier assigned to batch
	set lotNumber(lotNumber) {
		this._lotNumber = lotNumber;
	}

	get lotNumber() {
		return this._lotNumber;
	}

	// expirationDate		0..1	dateTime	When batch will expire
	set expirationDate(expirationDate) {
		this._expirationDate = expirationDate;
	}

	get expirationDate() {
		return this._expirationDate;
	}

	toJSON() {
		return {
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			lotNumber: this._lotNumber,
			expirationDate: this._expirationDate,
		};
	}
}

class Ingredient {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// id		0..1	string	xml:id (or equivalent in JSON)
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!*	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
	}

	// item[x]		1..1		The product contained
	// itemCodeableConcept			CodeableConcept
	set itemCodeableConcept(itemCodeableConcept) {
		this._itemCodeableConcept = new CodeableConcept(itemCodeableConcept);
	}

	get itemCodeableConcept() {
		return this._itemCodeableConcept;
	}

	// itemReference			Reference
	set itemReference(itemReference) {
		this._itemReference = new Reference(itemReference);
	}

	get itemReference() {
		return this._itemReference;
	}

	// amount		0..1	Ratio	Quantity of ingredient present
	set amount(amount) {
		this._amount = new Ratio(amount);
	}

	get amount() {
		return this._amount;
	}

	toJSON() {
		return {
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			itemCodeableConcept: this._itemCodeableConcept,
			itemReference: this._itemReference,
			amount: this._amount,
		};
	}
}

class Product {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// id		0..1	string	xml:id (or equivalent in JSON)
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!*	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
	}

	// form		0..1	CodeableConcept	powder | tablets | capsule +
	// Binding: SNOMED CT Form Codes (example)
	set form(form) {
		this._form = new CodeableConcept(form);
	}

	get form() {
		return this._form;
	}

	// ingredient	I	0..*	BackboneElement	Active or inactive ingredient
	set ingredient(ingredient) {
		if (Array.isArray(ingredient)) {
			this._ingredient = ingredient.map((i) => new Ingredient(i));
		} else {
			this._ingredient = [new Ingredient(ingredient)];
		}
	}

	get ingredient() {
		return this._ingredient;
	}

	// batch	I	0..*	BackboneElement	Identifies a single production run
	set batch(batch) {
		if (Array.isArray(batch)) {
			this._batch = batch.map((i) => new Batch(i));
		} else {
			this._batch = [new Batch(batch)];
		}
	}

	get batch() {
		return this._batch;
	}

	toJSON() {
		return {
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			form: this._form,
			ingredient: this._ingredient,
			batch: this._batch,
		};
	}
}

class Medication extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Medication';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// id	*	0..1	id	Logical id of this artifact
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// meta	*	0..1	Meta	Metadata about the resource
	set meta(meta) {
		this._meta = new Meta(meta);
	}

	get meta() {
		return this._meta;
	}

	// implicitRules	?!*	0..1	uri	A set of rules under which this content was created
	set implicitRules(implicitRules) {
		this._implicitRules = implicitRules;
	}

	get implicitRules() {
		return this._implicitRules;
	}

	// language		0..1	code	Language of the resource content
	// Binding: Common Languages (extensible)
	set language(language) {
		this._language = new Code(language);
	}

	get language() {
		return this._language;
	}

	// text	I	0..1	Narrative	Text summary of the resource, for human interpretation
	set text(text) {
		this._text = new Narrative(text);
	}

	get text() {
		return this._text;
	}

	// contained		0..*	Resource	Contained, inline Resources
	set contained(contained) {
		if (Array.isArray(contained)) {
			this._contained = contained.map((i) => new Resource(i));
		} else {
			this._contained = [new Resource(contained)];
		}
	}

	get contained() {
		return this._contained;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
	}

	// code	S	1..1	CodeableConcept	Codes that identify this medication
	// Binding: Medication Clinical Drug (RxNorm) (extensible)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// isBrand	*	0..1	boolean	True if a brand
	set isBrand(isBrand) {
		this._isBrand = isBrand;
	}

	get isBrand() {
		return this._isBrand;
	}

	// manufacturer	*	0..1	Reference(Organization)	Manufacturer of the item
	set manufacturer(manufacturer) {
		this._manufacturer = new Reference(manufacturer);
	}

	get manufacturer() {
		return this._manufacturer;
	}

	// package	I	0..1	BackboneElement	Details about packaged medications
	set medicationPackage(medicationPackage) {
		this._medicationPackage = new MedicationPackage(medicationPackage);
	}

	get medicationPackage() {
		return this._medicationPackage;
	}

	// product	I	0..1	BackboneElement	Administrable medication details
	set product(product) {
		this._product = new Product(product);
	}

	get product() {
		return this._product;
	}

	toJSON() {
		const json = {
			id: this._id,
			meta: this._meta,
			implicitRules: this._implicitRules,
			language: this._language,
			text: this._text,
			contained: this._contained,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			code: this._code,
			isBrand: this._isBrand,
			manufacturer: this._manufacturer,
			medicationPackage: this._medicationPackage,
			product: this._product,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Medication = Medication;
module.exports.Product = Product;
module.exports.Ingredient = Ingredient;
module.exports.Batch = Batch;
module.exports.MedicationPackage = MedicationPackage;
module.exports.Content = Content;
