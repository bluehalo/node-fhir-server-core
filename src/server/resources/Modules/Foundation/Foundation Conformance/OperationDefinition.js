const DomainResource = require('./types/DomainResource');
const Code = require('./types/Code');
const ContactDetail = require('./types/ContactDetail');
const UsageContext = require('./types/UsageContext');
const CodeableConcept = require('./types/CodeableConcept');
const Reference = require('./types/Reference');

class Overload {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// parameterName		0..*	string	Name of parameter to include in overload
	set parameterName(parameterName) {
		this._parameterName = [].concat(parameterName);
	}

	get parameterName() {
		return this._parameterName;
	}

	// comment		0..1	string	Comments to go on overload
	set comment(comment) {
		this._comment = comment;
	}

	get comment() {
		return this._comment;
	}

	toJSON() {
		return {
			parameterName: this._parameterName,
			comment: this._comment,
		};
	}
}

class Binding {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// strength		1..1	code	required | extensible | preferred | example
	// BindingStrength (Required)
	set strength(strength) {
		this._strength = new Code(strength);
	}

	get strength() {
		return this._strength;
	}

	// valueSet[x]		1..1		Source of value set
	// valueSetUri			uri
	set valueSetUri(valueSetUri) {
		this._valueSetUri = valueSetUri;
	}

	get valueSetUri() {
		return this._valueSetUri;
	}

	// valueSetReference			Reference
	set valueSetReference(valueSetReference) {
		this._valueSetReference = new Reference(valueSetReference);
	}

	get valueSetReference() {
		return this._valueSetReference;
	}

	toJSON() {
		return {
			strength: this._strength,
			valueSetUri: this._valueSetUri,
			valueSetReference: this._valueSetReference,
		};
	}
}

class Parameter {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// name		1..1	code	Name in Parameters.parameter.name or in URL
	set name(name) {
		this._name = new Code(name);
	}

	get name() {
		return this._name;
	}

	// use		1..1	code	in | out
	// OperationParameterUse (Required)
	set use(use) {
		this._use = new Code(use);
	}

	get use() {
		return this._use;
	}

	// min		1..1	integer	Minimum Cardinality
	set min(min) {
		this._min = min;
	}

	get min() {
		return this._min;
	}

	// max		1..1	string	Maximum Cardinality (a number or *)
	set max(max) {
		this._max = max;
	}

	get max() {
		return this._max;
	}

	// documentation		0..1	string	Description of meaning/use
	set documentation(documentation) {
		this._documentation = documentation;
	}

	get documentation() {
		return this._documentation;
	}

	// type	I	0..1	code	What type this parameter has
	// FHIRAllTypes (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// searchType	I	0..1	code	number | date | string | token | reference | composite | quantity | uri
	// SearchParamType (Required)
	set searchType(searchType) {
		this._searchType = new Code(searchType);
	}

	get searchType() {
		return this._searchType;
	}

	// profile		0..1	Reference(StructureDefinition)	Profile on the type
	set profile(profile) {
		this._profile = new Reference(profile);
	}

	get profile() {
		return this._profile;
	}

	// part	I	0..*	see parameter	Parts of a nested Parameter
	set part(part) {
		this._part = [].concat(part);
	}

	get part() {
		return this._part;
	}

	// binding		0..1	BackboneElement	ValueSet details if this is coded
	set binding(binding) {
		this._binding = new Binding(binding);
	}

	get binding() {
		return this._binding;
	}

	toJSON() {
		return {
			name: this._name,
			use: this._use,
			min: this._min,
			max: this._max,
			documentation: this._documentation,
			type: this._type,
			searchType: this._searchType,
			profile: this._profile,
			part: this._part,
			binding: this._binding,
		};
	}
}

class OperationDefinition extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'OperationDefinition';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// url	Σ	0..1	uri	Logical URI to reference this operation definition (globally unique)
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// version	Σ	0..1	string	Business version of the operation definition
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// name	Σ	1..1	string	Name for this operation definition (computer friendly)
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// status	?!Σ	1..1	code	draft | active | retired | unknown
	// PublicationStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// kind		1..1	code	operation | query
	// OperationKind (Required)
	set kind(kind) {
		this._kind = new Code(kind);
	}

	get kind() {
		return this._kind;
	}

	// experimental	?!Σ	0..1	boolean	For testing purposes, not real usage
	set experimental(experimental) {
		this._experimental = experimental;
	}

	get experimental() {
		return this._experimental;
	}

	// date	Σ	0..1	dateTime	Date this was last changed
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// publisher	Σ	0..1	string	Name of the publisher (organization or individual)
	set publisher(publisher) {
		this._publisher = publisher;
	}

	get publisher() {
		return this._publisher;
	}

	// contact	Σ	0..*	ContactDetail	Contact details for the publisher
	set contact(contact) {
		if (Array.isArray(contact)) {
			this._contact = contact.map((i) => new ContactDetail(i));
		} else {
			this._contact = [new ContactDetail(contact)];
		}
	}

	get contact() {
		return this._contact;
	}

	// description		0..1	markdown	Natural language description of the operation definition
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// useContext	Σ	0..*	UsageContext	Context the content is intended to support
	set useContext(useContext) {
		if (Array.isArray(useContext)) {
			this._useContext = useContext.map((i) => new UsageContext(i));
		} else {
			this._useContext = [new UsageContext(useContext)];
		}
	}

	get useContext() {
		return this._useContext;
	}

	// jurisdiction	Σ	0..*	CodeableConcept	Intended jurisdiction for operation definition (if applicable)
	// Jurisdiction ValueSet (Extensible)
	set jurisdiction(jurisdiction) {
		if (Array.isArray(jurisdiction)) {
			this._jurisdiction = jurisdiction.map((i) => new CodeableConcept(i));
		} else {
			this._jurisdiction = [new CodeableConcept(jurisdiction)];
		}
	}

	get jurisdiction() {
		return this._jurisdiction;
	}

	// purpose		0..1	markdown	Why this operation definition is defined
	set purpose(purpose) {
		this._purpose = purpose;
	}

	get purpose() {
		return this._purpose;
	}

	// idempotent	Σ	0..1	boolean	Whether content is unchanged by the operation
	set idempotent(idempotent) {
		this._idempotent = idempotent;
	}

	get idempotent() {
		return this._idempotent;
	}

	// code	Σ	1..1	code	Name used to invoke the operation
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	// comment		0..1	string	Additional information about use
	set comment(comment) {
		this._comment = comment;
	}

	get comment() {
		return this._comment;
	}

	// base	Σ	0..1	Reference(OperationDefinition)	Marks this as a profile of the base
	set base(base) {
		this._base = new Reference(base);
	}

	get base() {
		return this._base;
	}

	// resource	Σ	0..*	code	Types this operation applies to
	// ResourceType (Required)
	set resource(resource) {
		if (Array.isArray(resource)) {
			this._resource = resource.map((i) => new Code(i));
		} else {
			this._resource = [new Code(resource)];
		}
	}

	get resource() {
		return this._resource;
	}

	// system	Σ	1..1	boolean	Invoke at the system level?
	set system(system) {
		this._system = system;
	}

	get system() {
		return this._system;
	}

	// type	Σ	1..1	boolean	Invole at the type level?
	set type(type) {
		this._type = type;
	}

	get type() {
		return this._type;
	}

	// instance	Σ	1..1	boolean	Invoke on an instance?
	set instance(instance) {
		this._instance = instance;
	}

	get instance() {
		return this._instance;
	}

	// parameter	I	0..*	BackboneElement	Parameters for the operation/query
	// + Either a type must be provided, or parts
	// + A search type can only be specified for parameters of type string
	set parameter(parameter) {
		if (Array.isArray(parameter)) {
			this._parameter = parameter.map((i) => new Parameter(i));
		} else {
			this._parameter = [new Parameter(parameter)];
		}
	}

	get parameter() {
		return this._parameter;
	}

	// overload		0..*	BackboneElement	Define overloaded variants for when generating code
	set overload(overload) {
		if (Array.isArray(overload)) {
			this._overload = overload.map((i) => new Overload(i));
		} else {
			this._overload = [new Overload(overload)];
		}
	}

	get overload() {
		return this._overload;
	}

	toJSON() {
		const json = {
			url: this._url,
			version: this._version,
			name: this._name,
			status: this._status,
			kind: this._kind,
			experimental: this._experimental,
			date: this._date,
			publisher: this._publisher,
			contact: this._contact,
			description: this._description,
			useContext: this._useContext,
			jurisdiction: this._jurisdiction,
			purpose: this._purpose,
			idempotent: this._idempotent,
			code: this._code,
			comment: this._comment,
			base: this._base,
			resource: this._resource,
			system: this._system,
			type: this._type,
			instance: this._instance,
			parameter: this._parameter,
			overload: this._overload,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.OperationDefinition = OperationDefinition;
module.exports.Parameter = Parameter;
module.exports.Binding = Binding;
module.exports.Overload = Overload;
