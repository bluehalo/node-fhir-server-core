const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Reference = require('./types/Reference');
const Period = require('./types/Period');
const Coding = require('./types/Coding');
const Quantity = require('./types/Quantity');
const Attachment = require('./types/Attachment');
const Address = require('./types/Address');

class SubDetail {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// sequence		1..1	positiveInt	Service instance
	set sequence(sequence) {
		this._sequence = sequence;
	}

	get sequence() {
		return this._sequence;
	}

	// revenue		0..1	CodeableConcept	Revenue or cost center code
	// Example Revenue Center Codes (Example)
	set revenue(revenue) {
		this._revenue = new CodeableConcept(revenue);
	}

	get revenue() {
		return this._revenue;
	}

	// category		0..1	CodeableConcept	Type of service or product
	// Benefit SubCategory Codes (Example)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// service		0..1	CodeableConcept	Billing Code
	// USCLS Codes (Example)
	set service(service) {
		this._service = new CodeableConcept(service);
	}

	get service() {
		return this._service;
	}

	// modifier		0..*	CodeableConcept	Service/Product billing modifiers
	// Modifier type Codes (Example)
	set modifier(modifier) {
		if (Array.isArray(modifier)) {
			this._modifier = modifier.map((i) => new CodeableConcept(i));
		} else {
			this._modifier = [new CodeableConcept(modifier)];
		}
	}

	get modifier() {
		return this._modifier;
	}

	// programCode		0..*	CodeableConcept	Program specific reason for item inclusion
	// Example Program Reason Codes (Example)
	set programCode(programCode) {
		if (Array.isArray(programCode)) {
			this._programCode = programCode.map((i) => new CodeableConcept(i));
		} else {
			this._programCode = [new CodeableConcept(programCode)];
		}
	}

	get programCode() {
		return this._programCode;
	}

	// quantity		0..1	SimpleQuantity	Count of Products or Services
	set quantity(quantity) {
		this._quantity = quantity;
	}

	get quantity() {
		return this._quantity;
	}

	// unitPrice		0..1	Money	Fee, charge or cost per point
	set unitPrice(unitPrice) {
		this._unitPrice = unitPrice;
	}

	get unitPrice() {
		return this._unitPrice;
	}

	// factor		0..1	decimal	Price scaling factor
	set factor(factor) {
		this._factor = factor;
	}

	get factor() {
		return this._factor;
	}

	// net		0..1	Money	Net additional item cost
	set net(net) {
		this._net = net;
	}

	get net() {
		return this._net;
	}

	// udi		0..*	Reference(Device)	Unique Device Identifier
	set udi(udi) {
		if (Array.isArray(udi)) {
			this._udi = udi.map((i) => new Reference(i));
		} else {
			this._udi = [new Reference(udi)];
		}
	}

	get udi() {
		return this._udi;
	}

	toJSON() {
		return {
			sequence: this._sequence,
			revenue: this._revenue,
			category: this._category,
			service: this._service,
			modifier: this._modifier,
			programCode: this._programCode,
			quantity: this._quantity,
			unitPrice: this._unitPrice,
			factor: this._factor,
			net: this._net,
			udi: this._udi,
		};
	}
}

class Detail {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// sequence		1..1	positiveInt	Service instance
	set sequence(sequence) {
		this._sequence = sequence;
	}

	get sequence() {
		return this._sequence;
	}

	// revenue		0..1	CodeableConcept	Revenue or cost center code
	// Example Revenue Center Codes (Example)
	set revenue(revenue) {
		this._revenue = new CodeableConcept(revenue);
	}

	get revenue() {
		return this._revenue;
	}

	// category		0..1	CodeableConcept	Type of service or product
	// Benefit SubCategory Codes (Example)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// service		0..1	CodeableConcept	Billing Code
	// USCLS Codes (Example)
	set service(service) {
		this._service = new CodeableConcept(service);
	}

	get service() {
		return this._service;
	}

	// modifier		0..*	CodeableConcept	Service/Product billing modifiers
	// Modifier type Codes (Example)
	set modifier(modifier) {
		if (Array.isArray(modifier)) {
			this._modifier = modifier.map((i) => new CodeableConcept(i));
		} else {
			this._modifier = [new CodeableConcept(modifier)];
		}
	}

	get modifier() {
		return this._modifier;
	}

	// programCode		0..*	CodeableConcept	Program specific reason for item inclusion
	// Example Program Reason Codes (Example)
	set programCode(programCode) {
		if (Array.isArray(programCode)) {
			this._programCode = programCode.map((i) => new CodeableConcept(i));
		} else {
			this._programCode = [new CodeableConcept(programCode)];
		}
	}

	get programCode() {
		return this._programCode;
	}

	// quantity		0..1	SimpleQuantity	Count of Products or Services
	set quantity(quantity) {
		this._quantity = quantity;
	}

	get quantity() {
		return this._quantity;
	}

	// unitPrice		0..1	Money	Fee, charge or cost per point
	set unitPrice(unitPrice) {
		this._unitPrice = unitPrice;
	}

	get unitPrice() {
		return this._unitPrice;
	}

	// factor		0..1	decimal	Price scaling factor
	set factor(factor) {
		this._factor = factor;
	}

	get factor() {
		return this._factor;
	}

	// net		0..1	Money	Total additional item cost
	set net(net) {
		this._net = net;
	}

	get net() {
		return this._net;
	}

	// udi		0..*	Reference(Device)	Unique Device Identifier
	set udi(udi) {
		if (Array.isArray(udi)) {
			this._udi = udi.map((i) => new Reference(i));
		} else {
			this._udi = [new Reference(udi)];
		}
	}

	get udi() {
		return this._udi;
	}

	// subDetail		0..*	BackboneElement	Additional items
	set subDetail(subDetail) {
		if (Array.isArray(subDetail)) {
			this._subDetail = subDetail.map((i) => new SubDetail(i));
		} else {
			this._subDetail = [new SubDetail(subDetail)];
		}
	}

	get subDetail() {
		return this._subDetail;
	}

	toJSON() {
		return {
			sequence: this._sequence,
			revenue: this._revenue,
			category: this._category,
			service: this._service,
			modifier: this._modifier,
			programCode: this._programCode,
			quantity: this._quantity,
			unitPrice: this._unitPrice,
			factor: this._factor,
			net: this._net,
			udi: this._udi,
			subDetail: this._subDetail,
		};
	}
}

class Item {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// sequence		1..1	positiveInt	Service instance
	set sequence(sequence) {
		this._sequence = sequence;
	}

	get sequence() {
		return this._sequence;
	}

	// careTeamLinkId		0..*	positiveInt	Applicable careTeam members
	set careTeamLinkId(careTeamLinkId) {
		this._careTeamLinkId = [].concat(careTeamLinkId);
	}

	get careTeamLinkId() {
		return this._careTeamLinkId;
	}

	// diagnosisLinkId		0..*	positiveInt	Applicable diagnoses
	set diagnosisLinkId(diagnosisLinkId) {
		this._diagnosisLinkId = [].concat(diagnosisLinkId);
	}

	get diagnosisLinkId() {
		return this._diagnosisLinkId;
	}

	// procedureLinkId		0..*	positiveInt	Applicable procedures
	set procedureLinkId(procedureLinkId) {
		this._procedureLinkId = [].concat(procedureLinkId);
	}

	get procedureLinkId() {
		return this._procedureLinkId;
	}

	// informationLinkId		0..*	positiveInt	Applicable exception and supporting information
	set informationLinkId(informationLinkId) {
		this._informationLinkId = [].concat(informationLinkId);
	}

	get informationLinkId() {
		return this._informationLinkId;
	}

	// revenue		0..1	CodeableConcept	Revenue or cost center code
	// Example Revenue Center Codes (Example)
	set revenue(revenue) {
		this._revenue = new CodeableConcept(revenue);
	}

	get revenue() {
		return this._revenue;
	}

	// category		0..1	CodeableConcept	Type of service or product
	// Benefit SubCategory Codes (Example)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// service		0..1	CodeableConcept	Billing Code
	// USCLS Codes (Example)
	set service(service) {
		this._service = new CodeableConcept(service);
	}

	get service() {
		return this._service;
	}

	// modifier		0..*	CodeableConcept	Service/Product billing modifiers
	// Modifier type Codes (Example)
	set modifier(modifier) {
		if (Array.isArray(modifier)) {
			this._modifier = modifier.map((i) => new CodeableConcept(i));
		} else {
			this._modifier = [new CodeableConcept(modifier)];
		}
	}

	get modifier() {
		return this._modifier;
	}

	// programCode		0..*	CodeableConcept	Program specific reason for item inclusion
	// Example Program Reason Codes (Example)
	set programCode(programCode) {
		if (Array.isArray(programCode)) {
			this._programCode = programCode.map((i) => new CodeableConcept(i));
		} else {
			this._programCode = [new CodeableConcept(programCode)];
		}
	}

	get programCode() {
		return this._programCode;
	}

	// serviced[x]		0..1		Date or dates of Service
	// servicedDate			date
	set servicedDate(servicedDate) {
		this._servicedDate = servicedDate;
	}

	get servicedDate() {
		return this._servicedDate;
	}

	// servicedPeriod			Period
	set servicedPeriod(servicedPeriod) {
		this._servicedPeriod = new Period(servicedPeriod);
	}

	get servicedPeriod() {
		return this._servicedPeriod;
	}

	// location[x]		0..1		Place of service
	// Example Service Place Codes (Example)
	// locationCodeableConcept			CodeableConcept
	set locationCodeableConcept(locationCodeableConcept) {
		this._locationCodeableConcept = new CodeableConcept(locationCodeableConcept);
	}

	get locationCodeableConcept() {
		return this._locationCodeableConcept;
	}

	// locationAddress			Address
	set locationAddress(locationAddress) {
		this._locationAddress = new Address(locationAddress);
	}

	get locationAddress() {
		return this._locationAddress;
	}

	// locationReference			Reference
	set locationReference(locationReference) {
		this._locationReference = new Reference(locationReference);
	}

	get locationReference() {
		return this._locationReference;
	}

	// quantity		0..1	SimpleQuantity	Count of Products or Services
	set quantity(quantity) {
		this._quantity = quantity;
	}

	get quantity() {
		return this._quantity;
	}

	// unitPrice		0..1	Money	Fee, charge or cost per point
	set unitPrice(unitPrice) {
		this._unitPrice = unitPrice;
	}

	get unitPrice() {
		return this._unitPrice;
	}

	// factor		0..1	decimal	Price scaling factor
	set factor(factor) {
		this._factor = factor;
	}

	get factor() {
		return this._factor;
	}

	// net		0..1	Money	Total item cost
	set net(net) {
		this._net = net;
	}

	get net() {
		return this._net;
	}

	// udi		0..*	Reference(Device)	Unique Device Identifier
	set udi(udi) {
		if (Array.isArray(udi)) {
			this._udi = udi.map((i) => new Reference(i));
		} else {
			this._udi = [new Reference(udi)];
		}
	}

	get udi() {
		return this._udi;
	}

	// bodySite		0..1	CodeableConcept	Service Location
	// Oral Site Codes (Example)
	set bodySite(bodySite) {
		this._bodySite = new CodeableConcept(bodySite);
	}

	get bodySite() {
		return this._bodySite;
	}

	// subSite		0..*	CodeableConcept	Service Sub-location
	// Surface Codes (Example)
	set subSite(subSite) {
		if (Array.isArray(subSite)) {
			this._subSite = subSite.map((i) => new CodeableConcept(i));
		} else {
			this._subSite = [new CodeableConcept(subSite)];
		}
	}

	get subSite() {
		return this._subSite;
	}

	// encounter		0..*	Reference(Encounter)	Encounters related to this billed item
	set encounter(encounter) {
		if (Array.isArray(encounter)) {
			this._encounter = encounter.map((i) => new Reference(i));
		} else {
			this._encounter = [new Reference(encounter)];
		}
	}

	get encounter() {
		return this._encounter;
	}

	// detail		0..*	BackboneElement	Additional items
	set detail(detail) {
		if (Array.isArray(detail)) {
			this._detail = detail.map((i) => new Detail(i));
		} else {
			this._detail = [new Detail(detail)];
		}
	}

	get detail() {
		return this._detail;
	}

	toJSON() {
		return {
			sequence: this._sequence,
			careTeamLinkId: this._careTeamLinkId,
			diagnosisLinkId: this._diagnosisLinkId,
			procedureLinkId: this._procedureLinkId,
			informationLinkId: this._informationLinkId,
			revenue: this._revenue,
			category: this._category,
			service: this._service,
			modifier: this._modifier,
			programCode: this._programCode,
			servicedDate: this._servicedDate,
			servicedPeriod: this._servicedPeriod,
			locationCodeableConcept: this._locationCodeableConcept,
			locationAddress: this._locationAddress,
			locationReference: this._locationReference,
			quantity: this._quantity,
			unitPrice: this._unitPrice,
			factor: this._factor,
			net: this._net,
			udi: this._udi,
			bodySite: this._bodySite,
			subSite: this._subSite,
			encounter: this._encounter,
			detail: this._detail,
		};
	}
}

class Accident {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// date		1..1	date	When the accident occurred see information codes see information codes
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// type		0..1	CodeableConcept	The nature of the accident
	// ActIncidentCode (Required)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// location[x]		0..1		Accident Place
	// locationAddress			Address
	set locationAddress(locationAddress) {
		this._locationAddress = new Address(locationAddress);
	}

	get locationAddress() {
		return this._locationAddress;
	}

	// locationReference			Reference
	set locationReference(locationReference) {
		this._locationReference = new Reference(locationReference);
	}

	get locationReference() {
		return this._locationReference;
	}

	toJSON() {
		return {
			date: this._date,
			type: this._type,
			locationAddress: this._locationAddress,
			locationReference: this._locationReference,
		};
	}
}

class Insurance {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// sequence		1..1	positiveInt	Service instance identifier
	set sequence(sequence) {
		this._sequence = sequence;
	}

	get sequence() {
		return this._sequence;
	}

	// focal		1..1	boolean	Is the focal Coverage
	set focal(focal) {
		this._focal = focal;
	}

	get focal() {
		return this._focal;
	}

	// coverage		1..1	Reference(Coverage)	Insurance information
	set coverage(coverage) {
		this._coverage = new Reference(coverage);
	}

	get coverage() {
		return this._coverage;
	}

	// businessArrangement		0..1	string	Business agreement
	set businessArrangement(businessArrangement) {
		this._businessArrangement = businessArrangement;
	}

	get businessArrangement() {
		return this._businessArrangement;
	}

	// preAuthRef		0..*	string	Pre-Authorization/Determination Reference
	set preAuthRef(preAuthRef) {
		this._preAuthRef = [].concat(preAuthRef);
	}

	get preAuthRef() {
		return this._preAuthRef;
	}

	// claimResponse		0..1	Reference(ClaimResponse)	Adjudication results
	set claimResponse(claimResponse) {
		this._claimResponse = new Reference(claimResponse);
	}

	get claimResponse() {
		return this._claimResponse;
	}

	toJSON() {
		return {
			sequence: this._sequence,
			focal: this._focal,
			coverage: this._coverage,
			businessArrangement: this._businessArrangement,
			preAuthRef: this._preAuthRef,
			claimResponse: this._claimResponse,
		};
	}
}

class Procedure {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// sequence		1..1	positiveInt	Procedure sequence for reference
	set sequence(sequence) {
		this._sequence = sequence;
	}

	get sequence() {
		return this._sequence;
	}

	// date		0..1	dateTime	When the procedure was performed
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// procedure[x]		1..1		Patient's list of procedures performed
	// ICD-10 Procedure Codes (Example)
	// procedureCodeableConcept			CodeableConcept
	set procedureCodeableConcept(procedureCodeableConcept) {
		this._procedureCodeableConcept = new CodeableConcept(procedureCodeableConcept);
	}

	get procedureCodeableConcept() {
		return this._procedureCodeableConcept;
	}

	// procedureReference			Reference
	set procedureReference(procedureReference) {
		this._procedureReference = new Reference(procedureReference);
	}

	get procedureReference() {
		return this._procedureReference;
	}

	toJSON() {
		return {
			sequence: this._sequence,
			date: this._date,
			procedureCodeableConcept: this._procedureCodeableConcept,
			procedureReference: this._procedureReference,
		};
	}
}

class Diagnosis {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// sequence		1..1	positiveInt	Number to covey order of diagnosis
	set sequence(sequence) {
		this._sequence = sequence;
	}

	get sequence() {
		return this._sequence;
	}

	// diagnosis[x]		1..1		Patient's diagnosis
	// ICD-10 Codes (Example)
	// diagnosisCodeableConcept			CodeableConcept
	set diagnosisCodeableConcept(diagnosisCodeableConcept) {
		this._diagnosisCodeableConcept = new CodeableConcept(diagnosisCodeableConcept);
	}

	get diagnosisCodeableConcept() {
		return this._diagnosisCodeableConcept;
	}

	// diagnosisReference			Reference
	set diagnosisReference(diagnosisReference) {
		this._diagnosisReference = new Reference(diagnosisReference);
	}

	get diagnosisReference() {
		return this._diagnosisReference;
	}

	// type		0..*	CodeableConcept	Timing or nature of the diagnosis
	// Example Diagnosis Type Codes (Example)
	set type(type) {
		if (Array.isArray(type)) {
			this._type = type.map((i) => new CodeableConcept(i));
		} else {
			this._type = [new CodeableConcept(type)];
		}
	}

	get type() {
		return this._type;
	}

	// packageCode		0..1	CodeableConcept	Package billing code
	// Example Diagnosis Related Group Codes (Example)
	set packageCode(packageCode) {
		this._packageCode = new CodeableConcept(packageCode);
	}

	get packageCode() {
		return this._packageCode;
	}

	toJSON() {
		return {
			sequence: this._sequence,
			diagnosisCodeableConcept: this._diagnosisCodeableConcept,
			diagnosisReference: this._diagnosisReference,
			type: this._type,
			packageCode: this._packageCode,
		};
	}
}

class Information {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// sequence		1..1	positiveInt	Information instance identifier
	set sequence(sequence) {
		this._sequence = sequence;
	}

	get sequence() {
		return this._sequence;
	}

	// category		1..1	CodeableConcept	General class of information
	// Claim Information Category Codes (Example)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// code		0..1	CodeableConcept	Type of information
	// Exception Codes (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// timing[x]		0..1		When it occurred
	// timingDate			date
	set timingDate(timingDate) {
		this._timingDate = timingDate;
	}

	get timingDate() {
		return this._timingDate;
	}

	// timingPeriod			Period
	set timingPeriod(timingPeriod) {
		this._timingPeriod = new Period(timingPeriod);
	}

	get timingPeriod() {
		return this._timingPeriod;
	}

	// value[x]		0..1		Additional Data or supporting information
	// valueString			string
	set valueString(valueString) {
		this._valueString = valueString;
	}

	get valueString() {
		return this._valueString;
	}

	// valueQuantity			Quantity
	set valueQuantity(valueQuantity) {
		this._valueQuantity = new Quantity(valueQuantity);
	}

	get valueQuantity() {
		return this._valueQuantity;
	}

	// valueAttachment			Attachment
	set valueAttachment(valueAttachment) {
		this._valueAttachment = new Attachment(valueAttachment);
	}

	get valueAttachment() {
		return this._valueAttachment;
	}

	// valueReference			Reference
	set valueReference(valueReference) {
		this._valueReference = new Reference(valueReference);
	}

	get valueReference() {
		return this._valueReference;
	}

	// reason		0..1	CodeableConcept	Reason associated with the information
	// Missing Tooth Reason Codes (Example)
	set reason(reason) {
		this._reason = new CodeableConcept(reason);
	}

	get reason() {
		return this._reason;
	}

	toJSON() {
		return {
			sequence: this._sequence,
			category: this._category,
			code: this._code,
			timingDate: this._timingDate,
			timingPeriod: this._timingPeriod,
			valueString: this._valueString,
			valueQuantity: this._valueQuantity,
			valueAttachment: this._valueAttachment,
			valueReference: this._valueReference,
			reason: this._reason,
		};
	}
}

class CareTeam {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// sequence		1..1	positiveInt	Number to covey order of careTeam
	set sequence(sequence) {
		this._sequence = sequence;
	}

	get sequence() {
		return this._sequence;
	}

	// provider		1..1	Reference(Practitioner | Organization)	Provider individual or organization
	set provider(provider) {
		this._provider = new Reference(provider);
	}

	get provider() {
		return this._provider;
	}

	// responsible		0..1	boolean	Billing provider
	set responsible(responsible) {
		this._responsible = responsible;
	}

	get responsible() {
		return this._responsible;
	}

	// role		0..1	CodeableConcept	Role on the team
	// Claim Care Team Role Codes (Example)
	set role(role) {
		this._role = new CodeableConcept(role);
	}

	get role() {
		return this._role;
	}

	// qualification		0..1	CodeableConcept	Type, classification or Specialization
	// Example Provider Qualification Codes (Example)
	set qualification(qualification) {
		this._qualification = new CodeableConcept(qualification);
	}

	get qualification() {
		return this._qualification;
	}

	toJSON() {
		return {
			sequence: this._sequence,
			provider: this._provider,
			responsible: this._responsible,
			role: this._role,
			qualification: this._qualification,
		};
	}
}

class Payee {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type		1..1	CodeableConcept	Type of party: Subscriber, Provider, other
	// Claim Payee Type Codes (Example)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// resourceType		0..1	Coding	organization | patient | practitioner | relatedperson
	// ClaimPayeeResourceType (Example)
	set resourceType(resourceType) {
		this._resourceType = new Coding(resourceType);
	}

	get resourceType() {
		return this._resourceType;
	}

	// party		0..1	Reference(Practitioner | Organization | Patient | RelatedPerson)	Party to receive the payable
	set party(party) {
		this._party = new Reference(party);
	}

	get party() {
		return this._party;
	}

	toJSON() {
		return {
			type: this._type,
			resourceType: this._resourceType,
			party: this._party,
		};
	}
}

class Related {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// claim		0..1	Reference(Claim)	Reference to the related claim
	set claim(claim) {
		this._claim = new Reference(claim);
	}

	get claim() {
		return this._claim;
	}

	// relationship		0..1	CodeableConcept	How the reference claim is related
	// Example Related Claim Relationship Codes (Example)
	set relationship(relationship) {
		this._relationship = new CodeableConcept(relationship);
	}

	get relationship() {
		return this._relationship;
	}

	// reference		0..1	Identifier	Related file or case reference
	set reference(reference) {
		this._reference = new Identifier(reference);
	}

	get reference() {
		return this._reference;
	}

	toJSON() {
		return {
			claim: this._claim,
			relationship: this._relationship,
			reference: this._reference,
		};
	}
}

class Claim extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Claim';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier		0..*	Identifier	Claim number
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

	// type		0..1	CodeableConcept	Type or discipline
	// Example Claim Type Codes (Required)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// subType		0..*	CodeableConcept	Finer grained claim type information
	// Example Claim SubType Codes (Example)
	set subType(subType) {
		if (Array.isArray(subType)) {
			this._subType = subType.map((i) => new CodeableConcept(i));
		} else {
			this._subType = [new CodeableConcept(subType)];
		}
	}

	get subType() {
		return this._subType;
	}

	// use		0..1	code	complete | proposed | exploratory | other
	// Use (Required)
	set use(use) {
		this._use = new Code(use);
	}

	get use() {
		return this._use;
	}

	// patient		0..1	Reference(Patient)	The subject of the Products and Services
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// billablePeriod		0..1	Period	Period for charge submission
	set billablePeriod(billablePeriod) {
		this._billablePeriod = new Period(billablePeriod);
	}

	get billablePeriod() {
		return this._billablePeriod;
	}

	// created		0..1	dateTime	Creation date
	set created(created) {
		this._created = created;
	}

	get created() {
		return this._created;
	}

	// enterer		0..1	Reference(Practitioner)	Author
	set enterer(enterer) {
		this._enterer = new Reference(enterer);
	}

	get enterer() {
		return this._enterer;
	}

	// insurer		0..1	Reference(Organization)	Target
	set insurer(insurer) {
		this._insurer = new Reference(insurer);
	}

	get insurer() {
		return this._insurer;
	}

	// provider		0..1	Reference(Practitioner)	Responsible provider
	set provider(provider) {
		this._provider = new Reference(provider);
	}

	get provider() {
		return this._provider;
	}

	// organization		0..1	Reference(Organization)	Responsible organization
	set organization(organization) {
		this._organization = new Reference(organization);
	}

	get organization() {
		return this._organization;
	}

	// priority		0..1	CodeableConcept	Desired processing priority
	// Process Priority Codes (Example)
	set priority(priority) {
		this._priority = new CodeableConcept(priority);
	}

	get priority() {
		return this._priority;
	}

	// fundsReserve		0..1	CodeableConcept	Funds requested to be reserved
	// Funds Reservation Codes (Example)
	set fundsReserve(fundsReserve) {
		this._fundsReserve = new CodeableConcept(fundsReserve);
	}

	get fundsReserve() {
		return this._fundsReserve;
	}

	// prescription		0..1	Reference(MedicationRequest | VisionPrescription)	Prescription authorizing services or products
	set prescription(prescription) {
		this._prescription = new Reference(prescription);
	}

	get prescription() {
		return this._prescription;
	}

	// originalPrescription		0..1	Reference(MedicationRequest)	Original prescription if superceded by fulfiller
	set originalPrescription(originalPrescription) {
		this._originalPrescription = new Reference(originalPrescription);
	}

	get originalPrescription() {
		return this._originalPrescription;
	}

	// referral		0..1	Reference(ReferralRequest)	Treatment Referral
	set referral(referral) {
		this._referral = new Reference(referral);
	}

	get referral() {
		return this._referral;
	}

	// facility		0..1	Reference(Location)	Servicing Facility
	set facility(facility) {
		this._facility = new Reference(facility);
	}

	get facility() {
		return this._facility;
	}

	// employmentImpacted		0..1	Period	Period unable to work
	set employmentImpacted(employmentImpacted) {
		this._employmentImpacted = new Period(employmentImpacted);
	}

	get employmentImpacted() {
		return this._employmentImpacted;
	}

	// hospitalization		0..1	Period	Period in hospital
	set hospitalization(hospitalization) {
		this._hospitalization = new Period(hospitalization);
	}

	get hospitalization() {
		return this._hospitalization;
	}

	// total		0..1	Money	Total claim cost
	set total(total) {
		this._total = total;
	}

	get total() {
		return this._total;
	}

	// related		0..*	BackboneElement	Related Claims which may be revelant to processing this claimn
	set related(related) {
		if (Array.isArray(related)) {
			this._related = related.map((i) => new Related(i));
		} else {
			this._related = [new Related(related)];
		}
	}

	get related() {
		return this._related;
	}

	// payee		0..1	BackboneElement	Party to be paid any benefits payable
	set payee(payee) {
		this._payee = new Payee(payee);
	}

	get payee() {
		return this._payee;
	}

	// careTeam		0..*	BackboneElement	Members of the care team
	set careTeam(careTeam) {
		if (Array.isArray(careTeam)) {
			this._careTeam = careTeam.map((i) => new CareTeam(i));
		} else {
			this._careTeam = [new CareTeam(careTeam)];
		}
	}

	get careTeam() {
		return this._careTeam;
	}

	// information		0..*	BackboneElement	Exceptions, special considerations, the condition, situation, prior or concurrent issues
	set information(information) {
		if (Array.isArray(information)) {
			this._information = information.map((i) => new Information(i));
		} else {
			this._information = [new Information(information)];
		}
	}

	get information() {
		return this._information;
	}

	// diagnosis		0..*	BackboneElement	List of Diagnosis
	set diagnosis(diagnosis) {
		if (Array.isArray(diagnosis)) {
			this._diagnosis = diagnosis.map((i) => new Diagnosis(i));
		} else {
			this._diagnosis = [new Diagnosis(diagnosis)];
		}
	}

	get diagnosis() {
		return this._diagnosis;
	}

	// procedure		0..*	BackboneElement	Procedures performed
	set procedure(procedure) {
		if (Array.isArray(procedure)) {
			this._procedure = procedure.map((i) => new Procedure(i));
		} else {
			this._procedure = [new Procedure(procedure)];
		}
	}

	get procedure() {
		return this._procedure;
	}

	// insurance		0..*	BackboneElement	Insurance or medical plan
	set insurance(insurance) {
		if (Array.isArray(insurance)) {
			this._insurance = insurance.map((i) => new Insurance(i));
		} else {
			this._insurance = [new Insurance(insurance)];
		}
	}

	get insurance() {
		return this._insurance;
	}

	// accident		0..1	BackboneElement	Details about an accident
	set accident(accident) {
		this._accident = new Accident(accident);
	}

	get accident() {
		return this._accident;
	}

	// item		0..*	BackboneElement	Goods and Services
	set item(item) {
		if (Array.isArray(item)) {
			this._item = item.map((i) => new Item(i));
		} else {
			this._item = [new Item(item)];
		}
	}

	get item() {
		return this._item;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			type: this._type,
			subType: this._subType,
			use: this._use,
			patient: this._patient,
			billablePeriod: this._billablePeriod,
			created: this._created,
			enterer: this._enterer,
			insurer: this._insurer,
			provider: this._provider,
			organization: this._organization,
			priority: this._priority,
			fundsReserve: this._fundsReserve,
			prescription: this._prescription,
			originalPrescription: this._originalPrescription,
			referral: this._referral,
			facility: this._facility,
			employmentImpacted: this._employmentImpacted,
			hospitalization: this._hospitalization,
			total: this._total,
			related: this._related,
			payee: this._payee,
			careTeam: this._careTeam,
			information: this._information,
			diagnosis: this._diagnosis,
			procedure: this._procedure,
			insurance: this._insurance,
			accident: this._accident,
			item: this._item,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Claim = Claim;
module.exports.Related = Related;
module.exports.Payee = Payee;
module.exports.CareTeam = CareTeam;
module.exports.Information = Information;
module.exports.Diagnosis = Diagnosis;
module.exports.Procedure = Procedure;
module.exports.Insurance = Insurance;
module.exports.Accident = Accident;
module.exports.Item = Item;
module.exports.Detail = Detail;
module.exports.SubDetail = SubDetail;
