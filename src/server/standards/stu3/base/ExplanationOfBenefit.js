const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Period = require('./Period');
const ExplanationOfBenefit_Related = require('./ExplanationOfBenefit_Related');
const ExplanationOfBenefit_Payee = require('./ExplanationOfBenefit_Payee');
const ExplanationOfBenefit_Information = require('./ExplanationOfBenefit_Information');
const ExplanationOfBenefit_CareTeam = require('./ExplanationOfBenefit_CareTeam');
const ExplanationOfBenefit_Diagnosis = require('./ExplanationOfBenefit_Diagnosis');
const ExplanationOfBenefit_Procedure = require('./ExplanationOfBenefit_Procedure');
const ExplanationOfBenefit_Insurance = require('./ExplanationOfBenefit_Insurance');
const ExplanationOfBenefit_Accident = require('./ExplanationOfBenefit_Accident');
const ExplanationOfBenefit_Item = require('./ExplanationOfBenefit_Item');
const ExplanationOfBenefit_AddItem = require('./ExplanationOfBenefit_AddItem');
const Money = require('./Money');
const ExplanationOfBenefit_Payment = require('./ExplanationOfBenefit_Payment');
const ExplanationOfBenefit_ProcessNote = require('./ExplanationOfBenefit_ProcessNote');
const ExplanationOfBenefit_BenefitBalance = require('./ExplanationOfBenefit_BenefitBalance');

class ExplanationOfBenefit extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ExplanationOfBenefit';
	}

	// This is a ExplanationOfBenefit resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['ExplanationOfBenefit'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// The EOB Business Identifier.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The status of the resource instance.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['active', 'cancelled', 'draft', 'entered-in-error'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// The category of claim, eg, oral, pharmacy, vision, insitutional, professional.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// A finer grained suite of claim subtype codes which may convey Inpatient vs Outpatient and/or a specialty service. In the US the BillType.
	get subType () {
		return this._subType;
	}

	set subType ( new_value ) {
		this._subType = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Patient Resource.
	get patient () {
		return this._patient;
	}

	set patient ( new_value ) {
		this._patient = new Reference(new_value);
	}

	// The billable period for which charges are being submitted.
	get billablePeriod () {
		return this._billablePeriod;
	}

	set billablePeriod ( new_value ) {
		this._billablePeriod = new Period(new_value);
	}

	// The date when the EOB was created.
	get created () {
		return this._created;
	}

	set created ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field created`);
		}
		this._created = new_value;
	}

	// The person who created the explanation of benefit.
	get enterer () {
		return this._enterer;
	}

	set enterer ( new_value ) {
		this._enterer = new Reference(new_value);
	}

	// The insurer which is responsible for the explanation of benefit.
	get insurer () {
		return this._insurer;
	}

	set insurer ( new_value ) {
		this._insurer = new Reference(new_value);
	}

	// The provider which is responsible for the claim.
	get provider () {
		return this._provider;
	}

	set provider ( new_value ) {
		this._provider = new Reference(new_value);
	}

	// The provider which is responsible for the claim.
	get organization () {
		return this._organization;
	}

	set organization ( new_value ) {
		this._organization = new Reference(new_value);
	}

	// The referral resource which lists the date, practitioner, reason and other supporting information.
	get referral () {
		return this._referral;
	}

	set referral ( new_value ) {
		this._referral = new Reference(new_value);
	}

	// Facility where the services were provided.
	get facility () {
		return this._facility;
	}

	set facility ( new_value ) {
		this._facility = new Reference(new_value);
	}

	// The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.
	get claim () {
		return this._claim;
	}

	set claim ( new_value ) {
		this._claim = new Reference(new_value);
	}

	// The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.
	get claimResponse () {
		return this._claimResponse;
	}

	set claimResponse ( new_value ) {
		this._claimResponse = new Reference(new_value);
	}

	// Processing outcome errror, partial or complete processing.
	get outcome () {
		return this._outcome;
	}

	set outcome ( new_value ) {
		this._outcome = new CodeableConcept(new_value);
	}

	// A description of the status of the adjudication.
	get disposition () {
		return this._disposition;
	}

	set disposition ( new_value ) {
		this._disposition = new_value;
	}

	// Other claims which are related to this claim such as prior claim versions or for related services.
	get related () {
		return this._related;
	}

	set related ( new_value ) {
		this._related = Array.isArray(new_value) ? new_value.map(val => new ExplanationOfBenefit_Related(val)) : [new ExplanationOfBenefit_Related(new_value)];
	}

	// Prescription to support the dispensing of Pharmacy or Vision products.
	get prescription () {
		return this._prescription;
	}

	set prescription ( new_value ) {
		this._prescription = new Reference(new_value);
	}

	// Original prescription which has been superceded by this prescription to support the dispensing of pharmacy services, medications or products. For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new precription for an alternate medication which has the same theraputic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
	get originalPrescription () {
		return this._originalPrescription;
	}

	set originalPrescription ( new_value ) {
		this._originalPrescription = new Reference(new_value);
	}

	// The party to be reimbursed for the services.
	get payee () {
		return this._payee;
	}

	set payee ( new_value ) {
		this._payee = new ExplanationOfBenefit_Payee(new_value);
	}

	// Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required.
	get information () {
		return this._information;
	}

	set information ( new_value ) {
		this._information = Array.isArray(new_value) ? new_value.map(val => new ExplanationOfBenefit_Information(val)) : [new ExplanationOfBenefit_Information(new_value)];
	}

	// The members of the team who provided the overall service as well as their role and whether responsible and qualifications.
	get careTeam () {
		return this._careTeam;
	}

	set careTeam ( new_value ) {
		this._careTeam = Array.isArray(new_value) ? new_value.map(val => new ExplanationOfBenefit_CareTeam(val)) : [new ExplanationOfBenefit_CareTeam(new_value)];
	}

	// Ordered list of patient diagnosis for which care is sought.
	get diagnosis () {
		return this._diagnosis;
	}

	set diagnosis ( new_value ) {
		this._diagnosis = Array.isArray(new_value) ? new_value.map(val => new ExplanationOfBenefit_Diagnosis(val)) : [new ExplanationOfBenefit_Diagnosis(new_value)];
	}

	// Ordered list of patient procedures performed to support the adjudication.
	get procedure () {
		return this._procedure;
	}

	set procedure ( new_value ) {
		this._procedure = Array.isArray(new_value) ? new_value.map(val => new ExplanationOfBenefit_Procedure(val)) : [new ExplanationOfBenefit_Procedure(new_value)];
	}

	// Precedence (primary, secondary, etc.).
	get precedence () {
		return this._precedence;
	}

	set precedence ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field precedence`);
		}
		this._precedence = new_value;
	}

	// Financial instrument by which payment information for health care.
	get insurance () {
		return this._insurance;
	}

	set insurance ( new_value ) {
		this._insurance = new ExplanationOfBenefit_Insurance(new_value);
	}

	// An accident which resulted in the need for healthcare services.
	get accident () {
		return this._accident;
	}

	set accident ( new_value ) {
		this._accident = new ExplanationOfBenefit_Accident(new_value);
	}

	// The start and optional end dates of when the patient was precluded from working due to the treatable condition(s).
	get employmentImpacted () {
		return this._employmentImpacted;
	}

	set employmentImpacted ( new_value ) {
		this._employmentImpacted = new Period(new_value);
	}

	// The start and optional end dates of when the patient was confined to a treatment center.
	get hospitalization () {
		return this._hospitalization;
	}

	set hospitalization ( new_value ) {
		this._hospitalization = new Period(new_value);
	}

	// First tier of goods and services.
	get item () {
		return this._item;
	}

	set item ( new_value ) {
		this._item = Array.isArray(new_value) ? new_value.map(val => new ExplanationOfBenefit_Item(val)) : [new ExplanationOfBenefit_Item(new_value)];
	}

	// The first tier service adjudications for payor added services.
	get addItem () {
		return this._addItem;
	}

	set addItem ( new_value ) {
		this._addItem = Array.isArray(new_value) ? new_value.map(val => new ExplanationOfBenefit_AddItem(val)) : [new ExplanationOfBenefit_AddItem(new_value)];
	}

	// The total cost of the services reported.
	get totalCost () {
		return this._totalCost;
	}

	set totalCost ( new_value ) {
		this._totalCost = new Money(new_value);
	}

	// The amount of deductable applied which was not allocated to any particular service line.
	get unallocDeductable () {
		return this._unallocDeductable;
	}

	set unallocDeductable ( new_value ) {
		this._unallocDeductable = new Money(new_value);
	}

	// Total amount of benefit payable (Equal to sum of the Benefit amounts from all detail lines and additions less the Unallocated Deductable).
	get totalBenefit () {
		return this._totalBenefit;
	}

	set totalBenefit ( new_value ) {
		this._totalBenefit = new Money(new_value);
	}

	// Payment details for the claim if the claim has been paid.
	get payment () {
		return this._payment;
	}

	set payment ( new_value ) {
		this._payment = new ExplanationOfBenefit_Payment(new_value);
	}

	// The form to be used for printing the content.
	get form () {
		return this._form;
	}

	set form ( new_value ) {
		this._form = new CodeableConcept(new_value);
	}

	// Note text.
	get processNote () {
		return this._processNote;
	}

	set processNote ( new_value ) {
		this._processNote = Array.isArray(new_value) ? new_value.map(val => new ExplanationOfBenefit_ProcessNote(val)) : [new ExplanationOfBenefit_ProcessNote(new_value)];
	}

	// Balance by Benefit Category.
	get benefitBalance () {
		return this._benefitBalance;
	}

	set benefitBalance ( new_value ) {
		this._benefitBalance = Array.isArray(new_value) ? new_value.map(val => new ExplanationOfBenefit_BenefitBalance(val)) : [new ExplanationOfBenefit_BenefitBalance(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			status: this._status,
			type: this._type,
			subType: this._subType,
			patient: this._patient,
			billablePeriod: this._billablePeriod,
			created: this._created,
			enterer: this._enterer,
			insurer: this._insurer,
			provider: this._provider,
			organization: this._organization,
			referral: this._referral,
			facility: this._facility,
			claim: this._claim,
			claimResponse: this._claimResponse,
			outcome: this._outcome,
			disposition: this._disposition,
			related: this._related,
			prescription: this._prescription,
			originalPrescription: this._originalPrescription,
			payee: this._payee,
			information: this._information,
			careTeam: this._careTeam,
			diagnosis: this._diagnosis,
			procedure: this._procedure,
			precedence: this._precedence,
			insurance: this._insurance,
			accident: this._accident,
			employmentImpacted: this._employmentImpacted,
			hospitalization: this._hospitalization,
			item: this._item,
			addItem: this._addItem,
			totalCost: this._totalCost,
			unallocDeductable: this._unallocDeductable,
			totalBenefit: this._totalBenefit,
			payment: this._payment,
			form: this._form,
			processNote: this._processNote,
			benefitBalance: this._benefitBalance
		});
	}

}

module.exports = ExplanationOfBenefit;
