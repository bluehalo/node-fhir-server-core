const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const Reference = require('./types/Reference');
const CodeableConcept = require('./types/CodeableConcept');
const Annotation = require('./types/Annotation');

class Dispense {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// product		0..1	CodeableConcept	Product to be supplied
	// Example Vision Prescription Product Codes (Example)
	set product(product) {
		this._product = new CodeableConcept(product);
	}

	get product() {
		return this._product;
	}

	// eye		0..1	code	right | left
	// VisionEyes (Required)
	set eye(eye) {
		this._eye = new Code(eye);
	}

	get eye() {
		return this._eye;
	}

	// sphere		0..1	decimal	Lens sphere
	set sphere(sphere) {
		this._sphere = sphere;
	}

	get sphere() {
		return this._sphere;
	}

	// cylinder		0..1	decimal	Lens cylinder
	set cylinder(cylinder) {
		this._cylinder = cylinder;
	}

	get cylinder() {
		return this._cylinder;
	}

	// axis		0..1	integer	Lens axis
	set axis(axis) {
		this._axis = axis;
	}

	get axis() {
		return this._axis;
	}

	// prism		0..1	decimal	Lens prism
	set prism(prism) {
		this._prism = prism;
	}

	get prism() {
		return this._prism;
	}

	// base		0..1	code	up | down | in | out
	// VisionBase (Required)
	set base(base) {
		this._base = new Code(base);
	}

	get base() {
		return this._base;
	}

	// add		0..1	decimal	Lens add
	set add(add) {
		this._add = add;
	}

	get add() {
		return this._add;
	}

	// power		0..1	decimal	Contact lens power
	set power(power) {
		this._power = power;
	}

	get power() {
		return this._power;
	}

	// backCurve		0..1	decimal	Contact lens back curvature
	set backCurve(backCurve) {
		this._backCurve = backCurve;
	}

	get backCurve() {
		return this._backCurve;
	}

	// diameter		0..1	decimal	Contact lens diameter
	set diameter(diameter) {
		this._diameter = diameter;
	}

	get diameter() {
		return this._diameter;
	}

	// duration		0..1	SimpleQuantity	Lens wear duration
	set duration(duration) {
		this._duration = duration;
	}

	get duration() {
		return this._duration;
	}

	// color		0..1	string	Color required
	set color(color) {
		this._color = color;
	}

	get color() {
		return this._color;
	}

	// brand		0..1	string	Brand required
	set brand(brand) {
		this._brand = brand;
	}

	get brand() {
		return this._brand;
	}

	// note		0..*	Annotation	Notes for coatings
	set note(note) {
		if (Array.isArray(note)) {
			this._note = note.map((i) => new Annotation(i));
		} else {
			this._note = [new Annotation(note)];
		}
	}

	get note() {
		return this._note;
	}

	toJSON() {
		return {
			product: this._product,
			eye: this._eye,
			sphere: this._sphere,
			cylinder: this._cylinder,
			axis: this._axis,
			prism: this._prism,
			base: this._base,
			add: this._add,
			power: this._power,
			backCurve: this._backCurve,
			diameter: this._diameter,
			duration: this._duration,
			color: this._color,
			brand: this._brand,
			note: this._note,
		};
	}
}

class VisionPrescription extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'VisionPrescription';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier		0..*	Identifier	Business identifier
	set identifier(identifier) {
		if (Array.isArray(identifier)) {
			this._identifier = identifier.map((i) => new Identifier(i));
		} else {
			this._identifier = [new Identifier(identifier)];
		}
	}

	get identifier() {
		return this._identifier;
	}

	// status	?!Σ	0..1	code	active | cancelled | draft | entered-in-error
	// Financial Resource Status Codes (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// patient		0..1	Reference(Patient)	Who prescription is for
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// encounter		0..1	Reference(Encounter)	Created during encounter / admission / stay
	set encounter(encounter) {
		this._encounter = new Reference(encounter);
	}

	get encounter() {
		return this._encounter;
	}

	// dateWritten		0..1	dateTime	When prescription was authorized
	set dateWritten(dateWritten) {
		this._dateWritten = dateWritten;
	}

	get dateWritten() {
		return this._dateWritten;
	}

	// prescriber		0..1	Reference(Practitioner)	Who authorizes the vision product
	set prescriber(prescriber) {
		this._prescriber = new Reference(prescriber);
	}

	get prescriber() {
		return this._prescriber;
	}

	// reason[x]		0..1		Reason or indication for writing the prescription
	// reasonCodeableConcept			CodeableConcept
	set reasonCodeableConcept(reasonCodeableConcept) {
		this._reasonCodeableConcept = new CodeableConcept(reasonCodeableConcept);
	}

	get reasonCodeableConcept() {
		return this._reasonCodeableConcept;
	}

	// reasonReference			Reference
	set reasonReference(reasonReference) {
		this._reasonReference = new Reference(reasonReference);
	}

	get reasonReference() {
		return this._reasonReference;
	}

	// dispense		0..*	BackboneElement	Vision supply authorization
	set dispense(dispense) {
		if (Array.isArray(dispense)) {
			this._dispense = dispense.map((i) => new Dispense(i));
		} else {
			this._dispense = [new Dispense(dispense)];
		}
	}

	get dispense() {
		return this._dispense;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			patient: this._patient,
			encounter: this._encounter,
			dateWritten: this._dateWritten,
			prescriber: this._prescriber,
			reasonCodeableConcept: this._reasonCodeableConcept,
			reasonReference: this._reasonReference,
			dispense: this._dispense,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.VisionPrescription = VisionPrescription;
module.exports.Dispense = Dispense;
