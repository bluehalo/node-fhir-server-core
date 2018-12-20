const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');
const DateScalar = require('./scalars/Date.scalar');

class ExplanationOfBenefitItem extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ExplanationOfBenefitItem';
		Object.assign(this, opt);
	}

	// This is a ExplanationOfBenefitItem resource
	static get __resourceType() {
		return 'ExplanationOfBenefitItem';
	}

	// A service line number.
	get sequence() {
		return this.__sequence;
	}

	set sequence(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field sequence`);
		}
		this.__sequence = new_value;
	}

	// Careteam applicable for this service or product line.
	get careTeamLinkId() {
		return this.__careTeamLinkId;
	}

	set careTeamLinkId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field careTeamLinkId`);
		}
		this.__careTeamLinkId = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Diagnosis applicable for this service or product line.
	get diagnosisLinkId() {
		return this.__diagnosisLinkId;
	}

	set diagnosisLinkId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field diagnosisLinkId`);
		}
		this.__diagnosisLinkId = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Procedures applicable for this service or product line.
	get procedureLinkId() {
		return this.__procedureLinkId;
	}

	set procedureLinkId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field procedureLinkId`);
		}
		this.__procedureLinkId = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Exceptions, special conditions and supporting information pplicable for this service or product line.
	get informationLinkId() {
		return this.__informationLinkId;
	}

	set informationLinkId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field informationLinkId`);
		}
		this.__informationLinkId = Array.isArray(new_value) ? new_value : [new_value];
	}

	// The type of reveneu or cost center providing the product and/or service.
	get revenue() {
		return this.__revenue;
	}

	set revenue(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__revenue = new CodeableConcept(new_value);
	}

	// Health Care Service Type Codes  to identify the classification of service or benefits.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = new CodeableConcept(new_value);
	}

	// If this is an actual service or product line, ie. not a Group, then use code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI). If a grouping item then use a group code to indicate the type of thing being grouped eg. \'glasses\' or \'compound\'.
	get service() {
		return this.__service;
	}

	set service(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__service = new CodeableConcept(new_value);
	}

	// Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
	get modifier() {
		return this.__modifier;
	}

	set modifier(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__modifier = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// For programs which require reson codes for the inclusion, covering, of this billed item under the program or sub-program.
	get programCode() {
		return this.__programCode;
	}

	set programCode(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__programCode = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The date or dates when the enclosed suite of services were performed or completed.
	get servicedDate() {
		return this.__servicedDate;
	}

	set servicedDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field servicedDate`);
		}
		this.__servicedDate = new_value;
	}

	// The date or dates when the enclosed suite of services were performed or completed.
	get servicedPeriod() {
		return this.__servicedPeriod;
	}

	set servicedPeriod(new_value) {
		const Period = require('./Period');
		this.__servicedPeriod = new Period(new_value);
	}

	// Where the service was provided.
	get locationCodeableConcept() {
		return this.__locationCodeableConcept;
	}

	set locationCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__locationCodeableConcept = new CodeableConcept(new_value);
	}

	// Where the service was provided.
	get locationAddress() {
		return this.__locationAddress;
	}

	set locationAddress(new_value) {
		const Address = require('./Address');
		this.__locationAddress = new Address(new_value);
	}

	// Where the service was provided.
	get locationReference() {
		return this.__locationReference;
	}

	set locationReference(new_value) {
		const Reference = require('./Reference');
		this.__locationReference = new Reference(new_value);
	}

	// The number of repetitions of a service or product.
	get quantity() {
		return this.__quantity;
	}

	set quantity(new_value) {
		const Quantity = require('./Quantity');
		this.__quantity = new Quantity(new_value);
	}

	// If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.
	get unitPrice() {
		return this.__unitPrice;
	}

	set unitPrice(new_value) {
		const Money = require('./Money');
		this.__unitPrice = new Money(new_value);
	}

	// A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
	get factor() {
		return this.__factor;
	}

	set factor(new_value) {
		this.__factor = new_value;
	}

	// The quantity times the unit price for an addittional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
	get net() {
		return this.__net;
	}

	set net(new_value) {
		const Money = require('./Money');
		this.__net = new Money(new_value);
	}

	// List of Unique Device Identifiers associated with this line item.
	get udi() {
		return this.__udi;
	}

	set udi(new_value) {
		const Reference = require('./Reference');
		this.__udi = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Physical service site on the patient (limb, tooth, etc).
	get bodySite() {
		return this.__bodySite;
	}

	set bodySite(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__bodySite = new CodeableConcept(new_value);
	}

	// A region or surface of the site, eg. limb region or tooth surface(s).
	get subSite() {
		return this.__subSite;
	}

	set subSite(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__subSite = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// A billed item may include goods or services provided in multiple encounters.
	get encounter() {
		return this.__encounter;
	}

	set encounter(new_value) {
		const Reference = require('./Reference');
		this.__encounter = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A list of note references to the notes provided below.
	get noteNumber() {
		return this.__noteNumber;
	}

	set noteNumber(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field noteNumber`);
		}
		this.__noteNumber = Array.isArray(new_value) ? new_value : [new_value];
	}

	// The adjudications results.
	get adjudication() {
		return this.__adjudication;
	}

	set adjudication(new_value) {
		const ExplanationOfBenefitItemAdjudication = require('./ExplanationOfBenefitItemAdjudication');
		this.__adjudication = Array.isArray(new_value)
			? new_value.map(val => new ExplanationOfBenefitItemAdjudication(val))
			: [new ExplanationOfBenefitItemAdjudication(new_value)];
	}

	// Second tier of goods and services.
	get detail() {
		return this.__detail;
	}

	set detail(new_value) {
		const ExplanationOfBenefitItemDetail = require('./ExplanationOfBenefitItemDetail');
		this.__detail = Array.isArray(new_value)
			? new_value.map(val => new ExplanationOfBenefitItemDetail(val))
			: [new ExplanationOfBenefitItemDetail(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			sequence: this.__sequence,
			careTeamLinkId: this.__careTeamLinkId,
			diagnosisLinkId: this.__diagnosisLinkId,
			procedureLinkId: this.__procedureLinkId,
			informationLinkId: this.__informationLinkId,
			revenue: this.__revenue && this.__revenue.toJSON(),
			category: this.__category && this.__category.toJSON(),
			service: this.__service && this.__service.toJSON(),
			modifier: this.__modifier && this.__modifier.map(v => v.toJSON()),
			programCode: this.__programCode && this.__programCode.map(v => v.toJSON()),
			servicedDate: this.__servicedDate,
			servicedPeriod: this.__servicedPeriod && this.__servicedPeriod.toJSON(),
			locationCodeableConcept: this.__locationCodeableConcept && this.__locationCodeableConcept.toJSON(),
			locationAddress: this.__locationAddress && this.__locationAddress.toJSON(),
			locationReference: this.__locationReference && this.__locationReference.toJSON(),
			quantity: this.__quantity && this.__quantity.toJSON(),
			unitPrice: this.__unitPrice && this.__unitPrice.toJSON(),
			factor: this.__factor,
			net: this.__net && this.__net.toJSON(),
			udi: this.__udi && this.__udi.map(v => v.toJSON()),
			bodySite: this.__bodySite && this.__bodySite.toJSON(),
			subSite: this.__subSite && this.__subSite.map(v => v.toJSON()),
			encounter: this.__encounter && this.__encounter.map(v => v.toJSON()),
			noteNumber: this.__noteNumber,
			adjudication: this.__adjudication && this.__adjudication.map(v => v.toJSON()),
			detail: this.__detail && this.__detail.map(v => v.toJSON()),
		});
	}
}

module.exports = ExplanationOfBenefitItem;
