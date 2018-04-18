const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const Period = require('../types/Period');
const Reference = require('../types/Reference');
const CodeableConcept = require('../types/CodeableConcept');
const Coding = require('../types/Coding');
const Attachment = require('../types/Attachment');
const Signature = require('../types/Signature');

class Rule {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// content[x]		1..1		Computable Contract Rules
	// contentAttachment			Attachment
	set contentAttachment(contentAttachment) {
		this._contentAttachment = new Attachment(contentAttachment);
	}

	get contentAttachment() {
		return this._contentAttachment;
	}

	// contentReference			Reference
	set contentReference(contentReference) {
		this._contentReference = new Reference(contentReference);
	}

	get contentReference() {
		return this._contentReference;
	}

	toJSON() {
		return {
			contentAttachment: this._contentAttachment,
			contentReference: this._contentReference,
		};
	}
}

class Legal {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// content[x]		1..1		Contract Legal Text
	// contentAttachment			Attachment
	set contentAttachment(contentAttachment) {
		this._contentAttachment = new Attachment(contentAttachment);
	}

	get contentAttachment() {
		return this._contentAttachment;
	}

	// contentReference			Reference
	set contentReference(contentReference) {
		this._contentReference = new Reference(contentReference);
	}

	get contentReference() {
		return this._contentReference;
	}

	toJSON() {
		return {
			contentAttachment: this._contentAttachment,
			contentReference: this._contentReference,
		};
	}
}

class Friendly {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// content[x]		1..1		Easily comprehended representation of this Contract
	// contentAttachment			Attachment
	set contentAttachment(contentAttachment) {
		this._contentAttachment = new Attachment(contentAttachment);
	}

	get contentAttachment() {
		return this._contentAttachment;
	}

	// contentReference			Reference
	set contentReference(contentReference) {
		this._contentReference = new Reference(contentReference);
	}

	get contentReference() {
		return this._contentReference;
	}

	toJSON() {
		return {
			contentAttachment: this._contentAttachment,
			contentReference: this._contentReference,
		};
	}
}

class Term {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// identifier	Σ	0..1	Identifier	Contract Term Number
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// issued	Σ	0..1	dateTime	Contract Term Issue Date Time
	set issued(issued) {
		this._issued = issued;
	}

	get issued() {
		return this._issued;
	}

	// applies	Σ	0..1	Period	Contract Term Effective Time
	set applies(applies) {
		this._applies = new Period(applies);
	}

	get applies() {
		return this._applies;
	}

	// type		0..1	CodeableConcept	Contract Term Type or Form
	// Contract Term Type Codes (Example)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// subType		0..1	CodeableConcept	Contract Term Type specific classification
	// Contract Term Subtype Codes (Example)
	set subType(subType) {
		this._subType = new CodeableConcept(subType);
	}

	get subType() {
		return this._subType;
	}

	// topic	Σ	0..*	Reference(Any)	Context of the Contract term
	set topic(topic) {
		if (Array.isArray(topic)) {
			this._topic = topic.map((i) => new Reference(i));
		} else {
			this._topic = [new Reference(topic)];
		}
	}

	get topic() {
		return this._topic;
	}

	// action		0..*	CodeableConcept	Contract Term Activity
	// Contract Action Codes (Example)
	set action(action) {
		if (Array.isArray(action)) {
			this._action = action.map((i) => new CodeableConcept(i));
		} else {
			this._action = [new CodeableConcept(action)];
		}
	}

	get action() {
		return this._action;
	}

	// actionReason		0..*	CodeableConcept	Purpose for the Contract Term Action
	// PurposeOfUse (Example)
	set actionReason(actionReason) {
		if (Array.isArray(actionReason)) {
			this._actionReason = actionReason.map((i) => new CodeableConcept(i));
		} else {
			this._actionReason = [new CodeableConcept(actionReason)];
		}
	}

	get actionReason() {
		return this._actionReason;
	}

	// securityLabel	Σ	0..*	Coding	Security Labels that define affected terms
	// All Security Labels (Extensible)
	set securityLabel(securityLabel) {
		if (Array.isArray(securityLabel)) {
			this._securityLabel = securityLabel.map((i) => new Coding(i));
		} else {
			this._securityLabel = [new Coding(securityLabel)];
		}
	}

	get securityLabel() {
		return this._securityLabel;
	}

	// text		0..1	string	Human readable Contract term text
	set text(text) {
		this._text = text;
	}

	get text() {
		return this._text;
	}

	// group		0..*	see term	Nested Contract Term Group
	set group(group) {
		this._group = [].concat(group);
	}

	get group() {
		return this._group;
	}

	// agent		0..*	BackboneElement	Contract Term Agent List
	set agent(agent) {
		if (Array.isArray(agent)) {
			this._agent = agent.map((i) => new Agent(i));
		} else {
			this._agent = [new Agent(agent)];
		}
	}

	get agent() {
		return this._agent;
	}

	// valuedItem		0..*	BackboneElement	Contract Term Valued Item List
	set valuedItem(valuedItem) {
		if (Array.isArray(valuedItem)) {
			this._valuedItem = valuedItem.map((i) => new ValuedItem(i));
		} else {
			this._valuedItem = [new ValuedItem(valuedItem)];
		}
	}

	get valuedItem() {
		return this._valuedItem;
	}

	toJSON() {
		return {
			identifier: this._identifier,
			issued: this._issued,
			applies: this._applies,
			type: this._type,
			subType: this._subType,
			topic: this._topic,
			action: this._action,
			actionReason: this._actionReason,
			securityLabel: this._securityLabel,
			text: this._text,
			group: this._group,
			agent: this._agent,
			valuedItem: this._valuedItem,
		};
	}
}

class ValuedItem {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// entity[x]		0..1		Contract Valued Item Type
	// entityCodeableConcept			CodeableConcept
	set entityCodeableConcept(entityCodeableConcept) {
		this._entityCodeableConcept = new CodeableConcept(entityCodeableConcept);
	}

	get entityCodeableConcept() {
		return this._entityCodeableConcept;
	}

	// entityReference			Reference
	set entityReference(entityReference) {
		this._entityReference = new Reference(entityReference);
	}

	get entityReference() {
		return this._entityReference;
	}

	// identifier		0..1	Identifier	Contract Valued Item Number
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// effectiveTime		0..1	dateTime	Contract Valued Item Effective Tiem
	set effectiveTime(effectiveTime) {
		this._effectiveTime = effectiveTime;
	}

	get effectiveTime() {
		return this._effectiveTime;
	}

	// quantity		0..1	SimpleQuantity	Count of Contract Valued Items
	set quantity(quantity) {
		this._quantity = quantity;
	}

	get quantity() {
		return this._quantity;
	}

	// unitPrice		0..1	Money	Contract Valued Item fee, charge, or cost
	set unitPrice(unitPrice) {
		this._unitPrice = unitPrice;
	}

	get unitPrice() {
		return this._unitPrice;
	}

	// factor		0..1	decimal	Contract Valued Item Price Scaling Factor
	set factor(factor) {
		this._factor = factor;
	}

	get factor() {
		return this._factor;
	}

	// points		0..1	decimal	Contract Valued Item Difficulty Scaling Factor
	set points(points) {
		this._points = points;
	}

	get points() {
		return this._points;
	}

	// net		0..1	Money	Total Contract Valued Item Value
	set net(net) {
		this._net = net;
	}

	get net() {
		return this._net;
	}

	toJSON() {
		return {
			entityCodeableConcept: this._entityCodeableConcept,
			entityReference: this._entityReference,
			identifier: this._identifier,
			effectiveTime: this._effectiveTime,
			quantity: this._quantity,
			unitPrice: this._unitPrice,
			factor: this._factor,
			points: this._points,
			net: this._net,
		};
	}
}

class Signer {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type		1..1	Coding	Contract Signatory Role
	// Contract Signer Type Codes (Preferred)
	set type(type) {
		this._type = new Coding(type);
	}

	get type() {
		return this._type;
	}

	// party		1..1	Reference(Organization | Patient | Practitioner | RelatedPerson)	Contract Signatory Party
	set party(party) {
		this._party = new Reference(party);
	}

	get party() {
		return this._party;
	}

	// signature		1..*	Signature	Contract Documentation Signature
	set signature(signature) {
		if (Array.isArray(signature)) {
			this._signature = signature.map((i) => new Signature(i));
		} else {
			this._signature = [new Signature(signature)];
		}
	}

	get signature() {
		return this._signature;
	}

	toJSON() {
		return {
			type: this._type,
			party: this._party,
			signature: this._signature,
		};
	}
}

class Agent {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// actor		1..1	Reference(Contract | Device | Group | Location | Organization | Patient | Practitioner | RelatedPerson | Substance)	Contract Agent Type
	set actor(actor) {
		this._actor = new Reference(actor);
	}

	get actor() {
		return this._actor;
	}

	// role		0..*	CodeableConcept	Role type of the agent
	// Contract Actor Role Codes (Example)
	set role(role) {
		if (Array.isArray(role)) {
			this._role = role.map((i) => new CodeableConcept(i));
		} else {
			this._role = [new CodeableConcept(role)];
		}
	}

	get role() {
		return this._role;
	}

	toJSON() {
		return {
			actor: this._actor,
			role: this._role,
		};
	}
}

class Contract extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Contract';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..1	Identifier	Contract number
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// status	?!Σ	0..1	code	amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated
	// Contract Resource Status Codes (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// issued	Σ	0..1	dateTime	When this Contract was issued
	set issued(issued) {
		this._issued = issued;
	}

	get issued() {
		return this._issued;
	}

	// applies	Σ	0..1	Period	Effective time
	set applies(applies) {
		this._applies = new Period(applies);
	}

	get applies() {
		return this._applies;
	}

	// subject	Σ	0..*	Reference(Any)	Contract Target Entity
	set subject(subject) {
		if (Array.isArray(subject)) {
			this._subject = subject.map((i) => new Reference(i));
		} else {
			this._subject = [new Reference(subject)];
		}
	}

	get subject() {
		return this._subject;
	}

	// topic	Σ	0..*	Reference(Any)	Context of the Contract
	set topic(topic) {
		if (Array.isArray(topic)) {
			this._topic = topic.map((i) => new Reference(i));
		} else {
			this._topic = [new Reference(topic)];
		}
	}

	get topic() {
		return this._topic;
	}

	// authority		0..*	Reference(Organization)	Authority under which this Contract has standing
	set authority(authority) {
		if (Array.isArray(authority)) {
			this._authority = authority.map((i) => new Reference(i));
		} else {
			this._authority = [new Reference(authority)];
		}
	}

	get authority() {
		return this._authority;
	}

	// domain		0..*	Reference(Location)	Domain in which this Contract applies
	set domain(domain) {
		if (Array.isArray(domain)) {
			this._domain = domain.map((i) => new Reference(i));
		} else {
			this._domain = [new Reference(domain)];
		}
	}

	get domain() {
		return this._domain;
	}

	// type	Σ	0..1	CodeableConcept	Type or form
	// Contract Type Codes (Example)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// subType	Σ	0..*	CodeableConcept	Subtype within the context of type
	// Contract Subtype Codes (Example)
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

	// action		0..*	CodeableConcept	Action stipulated by this Contract
	// Contract Action Codes (Example)
	set action(action) {
		if (Array.isArray(action)) {
			this._action = action.map((i) => new CodeableConcept(i));
		} else {
			this._action = [new CodeableConcept(action)];
		}
	}

	get action() {
		return this._action;
	}

	// actionReason		0..*	CodeableConcept	Rationale for the stiplulated action
	// PurposeOfUse (Example)
	set actionReason(actionReason) {
		if (Array.isArray(actionReason)) {
			this._actionReason = actionReason.map((i) => new CodeableConcept(i));
		} else {
			this._actionReason = [new CodeableConcept(actionReason)];
		}
	}

	get actionReason() {
		return this._actionReason;
	}

	// decisionType		0..1	CodeableConcept	Decision by Grantor
	// ActConsentDirective (Extensible)
	set decisionType(decisionType) {
		this._decisionType = new CodeableConcept(decisionType);
	}

	get decisionType() {
		return this._decisionType;
	}

	// contentDerivative		0..1	CodeableConcept	Content derived from the basal information
	// Contract Content Derivation Codes (Example)
	set contentDerivative(contentDerivative) {
		this._contentDerivative = new CodeableConcept(contentDerivative);
	}

	get contentDerivative() {
		return this._contentDerivative;
	}

	// securityLabel	Σ	0..*	Coding	Security Labels that define affected resources
	// All Security Labels (Extensible)
	set securityLabel(securityLabel) {
		if (Array.isArray(securityLabel)) {
			this._securityLabel = securityLabel.map((i) => new Coding(i));
		} else {
			this._securityLabel = [new Coding(securityLabel)];
		}
	}

	get securityLabel() {
		return this._securityLabel;
	}

	// binding[x]		0..1		Binding Contract
	// bindingAttachment			Attachment
	set bindingAttachment(bindingAttachment) {
		this._bindingAttachment = new Attachment(bindingAttachment);
	}

	get bindingAttachment() {
		return this._bindingAttachment;
	}

	// bindingReference			Reference
	set bindingReference(bindingReference) {
		this._bindingReference = new Reference(bindingReference);
	}

	get bindingReference() {
		return this._bindingReference;
	}

	// agent		0..*	BackboneElement	Entity being ascribed responsibility
	set agent(agent) {
		if (Array.isArray(agent)) {
			this._agent = agent.map((i) => new Agent(i));
		} else {
			this._agent = [new Agent(agent)];
		}
	}

	get agent() {
		return this._agent;
	}

	// signer		0..*	BackboneElement	Contract Signatory
	set signer(signer) {
		if (Array.isArray(signer)) {
			this._signer = signer.map((i) => new Signer(i));
		} else {
			this._signer = [new Signer(signer)];
		}
	}

	get signer() {
		return this._signer;
	}

	// valuedItem		0..*	BackboneElement	Contract Valued Item List
	set valuedItem(valuedItem) {
		if (Array.isArray(valuedItem)) {
			this._valuedItem = valuedItem.map((i) => new ValuedItem(i));
		} else {
			this._valuedItem = [new ValuedItem(valuedItem)];
		}
	}

	get valuedItem() {
		return this._valuedItem;
	}

	// term		0..*	BackboneElement	Contract Term List
	set term(term) {
		if (Array.isArray(term)) {
			this._term = term.map((i) => new Term(i));
		} else {
			this._term = [new Term(term)];
		}
	}

	get term() {
		return this._term;
	}

	// friendly		0..*	BackboneElement	Contract Friendly Language
	set friendly(friendly) {
		if (Array.isArray(friendly)) {
			this._friendly = friendly.map((i) => new Friendly(i));
		} else {
			this._friendly = [new Friendly(friendly)];
		}
	}

	get friendly() {
		return this._friendly;
	}

	// legal		0..*	BackboneElement	Contract Legal Language
	set legal(legal) {
		if (Array.isArray(legal)) {
			this._legal = legal.map((i) => new Legal(i));
		} else {
			this._legal = [new Legal(legal)];
		}
	}

	get legal() {
		return this._legal;
	}

	// rule		0..*	BackboneElement	Computable Contract Language
	set rule(rule) {
		if (Array.isArray(rule)) {
			this._rule = rule.map((i) => new Rule(i));
		} else {
			this._rule = [new Rule(rule)];
		}
	}

	get rule() {
		return this._rule;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			issued: this._issued,
			applies: this._applies,
			subject: this._subject,
			topic: this._topic,
			authority: this._authority,
			domain: this._domain,
			type: this._type,
			subType: this._subType,
			action: this._action,
			actionReason: this._actionReason,
			decisionType: this._decisionType,
			contentDerivative: this._contentDerivative,
			securityLabel: this._securityLabel,
			bindingAttachment: this._bindingAttachment,
			bindingReference: this._bindingReference,
			agent: this._agent,
			signer: this._signer,
			valuedItem: this._valuedItem,
			term: this._term,
			friendly: this._friendly,
			legal: this._legal,
			rule: this._rule,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Contract = Contract;
module.exports.Agent = Agent;
module.exports.Signer = Signer;
module.exports.ValuedItem = ValuedItem;
module.exports.Term = Term;
module.exports.Friendly = Friendly;
module.exports.Legal = Legal;
module.exports.Rule = Rule;
