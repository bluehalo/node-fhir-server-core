const DomainResource = require('../types/DomainResource');
const Code = require('../types/Code');
const ContactDetail = require('../types/ContactDetail');
const UsageContext = require('../types/UsageContext');
const CodeableConcept = require('../types/CodeableConcept');
const Reference = require('../types/Reference');
const Coding = require('../types/Coding');

class Resource {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type	Σ	1..1	code	A resource type that is supported
	// ResourceType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// profile	Σ	0..1	Reference(StructureDefinition)	Base System profile for all uses of resource
	set profile(profile) {
		this._profile = new Reference(profile);
	}

	get profile() {
		return this._profile;
	}

	// documentation		0..1	markdown	Additional information about the use of the resource type
	set documentation(documentation) {
		this._documentation = documentation;
	}

	get documentation() {
		return this._documentation;
	}

	// interaction		1..*	BackboneElement	What operations are supported?
	set interaction(interaction) {
		if (Array.isArray(interaction)) {
			this._interaction = interaction.map((i) => new Interaction(i));
		} else {
			this._interaction = [new Interaction(interaction)];
		}
	}

	get interaction() {
		return this._interaction;
	}

	// versioning		0..1	code	no-version | versioned | versioned-update
	// ResourceVersionPolicy (Required)
	set versioning(versioning) {
		this._versioning = new Code(versioning);
	}

	get versioning() {
		return this._versioning;
	}

	// readHistory		0..1	boolean	Whether vRead can return past versions
	set readHistory(readHistory) {
		this._readHistory = readHistory;
	}

	get readHistory() {
		return this._readHistory;
	}

	// updateCreate		0..1	boolean	If update can commit to a new identity
	set updateCreate(updateCreate) {
		this._updateCreate = updateCreate;
	}

	get updateCreate() {
		return this._updateCreate;
	}

	// conditionalCreate		0..1	boolean	If allows/uses conditional create
	set conditionalCreate(conditionalCreate) {
		this._conditionalCreate = conditionalCreate;
	}

	get conditionalCreate() {
		return this._conditionalCreate;
	}

	// conditionalRead		0..1	code	not-supported | modified-since | not-match | full-support
	// ConditionalReadStatus (Required)
	set conditionalRead(conditionalRead) {
		this._conditionalRead = new Code(conditionalRead);
	}

	get conditionalRead() {
		return this._conditionalRead;
	}

	// conditionalUpdate		0..1	boolean	If allows/uses conditional update
	set conditionalUpdate(conditionalUpdate) {
		this._conditionalUpdate = conditionalUpdate;
	}

	get conditionalUpdate() {
		return this._conditionalUpdate;
	}

	// conditionalDelete		0..1	code	not-supported | single | multiple - how conditional delete is supported
	// ConditionalDeleteStatus (Required)
	set conditionalDelete(conditionalDelete) {
		this._conditionalDelete = new Code(conditionalDelete);
	}

	get conditionalDelete() {
		return this._conditionalDelete;
	}

	// referencePolicy		0..*	code	literal | logical | resolves | enforced | local
	// ReferenceHandlingPolicy (Required)
	set referencePolicy(referencePolicy) {
		if (Array.isArray(referencePolicy)) {
			this._referencePolicy = referencePolicy.map((i) => new Code(i));
		} else {
			this._referencePolicy = [new Code(referencePolicy)];
		}
	}

	get referencePolicy() {
		return this._referencePolicy;
	}

	// searchInclude		0..*	string	_include values supported by the server
	set searchInclude(searchInclude) {
		this._searchInclude = [].concat(searchInclude);
	}

	get searchInclude() {
		return this._searchInclude;
	}

	// searchRevInclude		0..*	string	_revinclude values supported by the server
	set searchRevInclude(searchRevInclude) {
		this._searchRevInclude = [].concat(searchRevInclude);
	}

	get searchRevInclude() {
		return this._searchRevInclude;
	}

	// searchParam		0..*	BackboneElement	Search parameters supported by implementation
	set searchParam(searchParam) {
		if (Array.isArray(searchParam)) {
			this._searchParam = searchParam.map((i) => new SearchParam(i));
		} else {
			this._searchParam = [new SearchParam(searchParam)];
		}
	}

	get searchParam() {
		return this._searchParam;
	}

	toJSON() {
		return {
			type: this._type,
			profile: this._profile,
			documentation: this._documentation,
			interaction: this._interaction,
			versioning: this._versioning,
			readHistory: this._readHistory,
			updateCreate: this._updateCreate,
			conditionalCreate: this._conditionalCreate,
			conditionalRead: this._conditionalRead,
			conditionalUpdate: this._conditionalUpdate,
			conditionalDelete: this._conditionalDelete,
			referencePolicy: this._referencePolicy,
			searchInclude: this._searchInclude,
			searchRevInclude: this._searchRevInclude,
			searchParam: this._searchParam,
		};
	}
}

class SearchParam {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// name		1..1	string	Name of search parameter
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// definition		0..1	uri	Source of definition for parameter
	set definition(definition) {
		this._definition = definition;
	}

	get definition() {
		return this._definition;
	}

	// type		1..1	code	number | date | string | token | reference | composite | quantity | uri
	// SearchParamType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// documentation		0..1	string	Server-specific usage
	set documentation(documentation) {
		this._documentation = documentation;
	}

	get documentation() {
		return this._documentation;
	}

	toJSON() {
		return {
			name: this._name,
			definition: this._definition,
			type: this._type,
			documentation: this._documentation,
		};
	}
}

class Interaction {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code		1..1	code	transaction | batch | search-system | history-system
	// SystemRestfulInteraction (Required)
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	// documentation		0..1	string	Anything special about operation behavior
	set documentation(documentation) {
		this._documentation = documentation;
	}

	get documentation() {
		return this._documentation;
	}

	toJSON() {
		return {
			code: this._code,
			documentation: this._documentation,
		};
	}
}

class Operation {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// name		1..1	string	Name by which the operation/query is invoked
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// definition	Σ	1..1	Reference(OperationDefinition)	The defined operation/query
	set definition(definition) {
		this._definition = new Reference(definition);
	}

	get definition() {
		return this._definition;
	}

	toJSON() {
		return {
			name: this._name,
			definition: this._definition,
		};
	}
}

class Interaction {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code		1..1	code	read | vread | update | patch | delete | history-instance | history-type | create | search-type
	// TypeRestfulInteraction (Required)
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	// documentation		0..1	string	Anything special about operation behavior
	set documentation(documentation) {
		this._documentation = documentation;
	}

	get documentation() {
		return this._documentation;
	}

	toJSON() {
		return {
			code: this._code,
			documentation: this._documentation,
		};
	}
}

class Security {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// cors	Σ	0..1	boolean	Adds CORS Headers (http://enable-cors.org/)
	set cors(cors) {
		this._cors = cors;
	}

	get cors() {
		return this._cors;
	}

	// service	Σ	0..*	CodeableConcept	OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates
	// RestfulSecurityService (Extensible)
	set service(service) {
		if (Array.isArray(service)) {
			this._service = service.map((i) => new CodeableConcept(i));
		} else {
			this._service = [new CodeableConcept(service)];
		}
	}

	get service() {
		return this._service;
	}

	// description		0..1	string	General description of how security works
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// certificate		0..*	BackboneElement	Certificates associated with security profiles
	set certificate(certificate) {
		if (Array.isArray(certificate)) {
			this._certificate = certificate.map((i) => new Certificate(i));
		} else {
			this._certificate = [new Certificate(certificate)];
		}
	}

	get certificate() {
		return this._certificate;
	}

	toJSON() {
		return {
			cors: this._cors,
			service: this._service,
			description: this._description,
			certificate: this._certificate,
		};
	}
}

class Certificate {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type		0..1	code	Mime type for certificates
	// MimeType  (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// blob		0..1	base64Binary	Actual certificate
	set blob(blob) {
		this._blob = blob;
	}

	get blob() {
		return this._blob;
	}

	toJSON() {
		return {
			type: this._type,
			blob: this._blob,
		};
	}
}

class Document {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// mode		1..1	code	producer | consumer
	// DocumentMode (Required)
	set mode(mode) {
		this._mode = new Code(mode);
	}

	get mode() {
		return this._mode;
	}

	// documentation		0..1	string	Description of document support
	set documentation(documentation) {
		this._documentation = documentation;
	}

	get documentation() {
		return this._documentation;
	}

	// profile	Σ	1..1	Reference(StructureDefinition)	Constraint on a resource used in the document
	set profile(profile) {
		this._profile = new Reference(profile);
	}

	get profile() {
		return this._profile;
	}

	toJSON() {
		return {
			mode: this._mode,
			documentation: this._documentation,
			profile: this._profile,
		};
	}
}

class Implementation {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// description	Σ	1..1	string	Describes this specific instance
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// url	Σ	0..1	uri	Base URL for the installation
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	toJSON() {
		return {
			description: this._description,
			url: this._url,
		};
	}
}

class Software {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// name	Σ	1..1	string	A name the software is known by
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// version	Σ	0..1	string	Version covered by this statement
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// releaseDate	Σ	0..1	dateTime	Date this version released
	set releaseDate(releaseDate) {
		this._releaseDate = releaseDate;
	}

	get releaseDate() {
		return this._releaseDate;
	}

	toJSON() {
		return {
			name: this._name,
			version: this._version,
			releaseDate: this._releaseDate,
		};
	}
}

class Event {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code	Σ	1..1	Coding	Event type
	// MessageEvent (Example)
	set code(code) {
		this._code = new Coding(code);
	}

	get code() {
		return this._code;
	}

	// category		0..1	code	Consequence | Currency | Notification
	// MessageSignificanceCategory (Required)
	set category(category) {
		this._category = new Code(category);
	}

	get category() {
		return this._category;
	}

	// mode		1..1	code	sender | receiver
	// EventCapabilityMode (Required)
	set mode(mode) {
		this._mode = new Code(mode);
	}

	get mode() {
		return this._mode;
	}

	// focus		1..1	code	Resource that's focus of message
	// ResourceType (Required)
	set focus(focus) {
		this._focus = new Code(focus);
	}

	get focus() {
		return this._focus;
	}

	// request	Σ	1..1	Reference(StructureDefinition)	Profile that describes the request
	set request(request) {
		this._request = new Reference(request);
	}

	get request() {
		return this._request;
	}

	// response	Σ	1..1	Reference(StructureDefinition)	Profile that describes the response
	set response(response) {
		this._response = new Reference(response);
	}

	get response() {
		return this._response;
	}

	// documentation		0..1	string	Endpoint-specific event documentation
	set documentation(documentation) {
		this._documentation = documentation;
	}

	get documentation() {
		return this._documentation;
	}

	toJSON() {
		return {
			code: this._code,
			category: this._category,
			mode: this._mode,
			focus: this._focus,
			request: this._request,
			response: this._response,
			documentation: this._documentation,
		};
	}
}

class SupportedMessage {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// mode	Σ	1..1	code	sender | receiver
	// EventCapabilityMode (Required)
	set mode(mode) {
		this._mode = new Code(mode);
	}

	get mode() {
		return this._mode;
	}

	// definition	Σ	1..1	Reference(MessageDefinition)	Message supported by this system
	set definition(definition) {
		this._definition = new Reference(definition);
	}

	get definition() {
		return this._definition;
	}

	toJSON() {
		return {
			mode: this._mode,
			definition: this._definition,
		};
	}
}

class Endpoint {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// protocol		1..1	Coding	http | ftp | mllp +
	// MessageTransport (Extensible)
	set protocol(protocol) {
		this._protocol = new Coding(protocol);
	}

	get protocol() {
		return this._protocol;
	}

	// address		1..1	uri	Network address or identifier of the end-point
	set address(address) {
		this._address = address;
	}

	get address() {
		return this._address;
	}

	toJSON() {
		return {
			protocol: this._protocol,
			address: this._address,
		};
	}
}

class Messaging {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// endpoint		0..*	BackboneElement	Where messages should be sent
	set endpoint(endpoint) {
		if (Array.isArray(endpoint)) {
			this._endpoint = endpoint.map((i) => new Endpoint(i));
		} else {
			this._endpoint = [new Endpoint(endpoint)];
		}
	}

	get endpoint() {
		return this._endpoint;
	}

	// reliableCache		0..1	unsignedInt	Reliable Message Cache Length (min)
	set reliableCache(reliableCache) {
		this._reliableCache = reliableCache;
	}

	get reliableCache() {
		return this._reliableCache;
	}

	// documentation		0..1	string	Messaging interface behavior details
	set documentation(documentation) {
		this._documentation = documentation;
	}

	get documentation() {
		return this._documentation;
	}

	// supportedMessage	Σ	0..*	BackboneElement	Messages supported by this system
	set supportedMessage(supportedMessage) {
		if (Array.isArray(supportedMessage)) {
			this._supportedMessage = supportedMessage.map((i) => new SupportedMessage(i));
		} else {
			this._supportedMessage = [new SupportedMessage(supportedMessage)];
		}
	}

	get supportedMessage() {
		return this._supportedMessage;
	}

	// event	Σ	0..*	BackboneElement	Declare support for this event
	set event(event) {
		if (Array.isArray(event)) {
			this._event = event.map((i) => new Event(i));
		} else {
			this._event = [new Event(event)];
		}
	}

	get event() {
		return this._event;
	}

	toJSON() {
		return {
			endpoint: this._endpoint,
			reliableCache: this._reliableCache,
			documentation: this._documentation,
			supportedMessage: this._supportedMessage,
			event: this._event,
		};
	}
}

class Rest {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// mode	Σ	1..1	code	client | server
	// RestfulCapabilityMode (Required)
	set mode(mode) {
		this._mode = new Code(mode);
	}

	get mode() {
		return this._mode;
	}

	// documentation		0..1	string	General description of implementation
	set documentation(documentation) {
		this._documentation = documentation;
	}

	get documentation() {
		return this._documentation;
	}

	// security	Σ	0..1	BackboneElement	Information about security of implementation
	set security(security) {
		this._security = new Security(security);
	}

	get security() {
		return this._security;
	}

	// resource	ΣI	0..*	BackboneElement	Resource served on the REST interface
	// + Search parameter names must be unique in the context of a resource.
	set resource(resource) {
		if (Array.isArray(resource)) {
			this._resource = resource.map((i) => new Resource(i));
		} else {
			this._resource = [new Resource(resource)];
		}
	}

	get resource() {
		return this._resource;
	}

	// interaction		0..*	BackboneElement	What operations are supported?
	set interaction(interaction) {
		if (Array.isArray(interaction)) {
			this._interaction = interaction.map((i) => new Interaction(i));
		} else {
			this._interaction = [new Interaction(interaction)];
		}
	}

	get interaction() {
		return this._interaction;
	}

	// searchParam		0..*	see searchParam	Search parameters for searching all resources
	set searchParam(searchParam) {
		this._searchParam = [].concat(searchParam);
	}

	get searchParam() {
		return this._searchParam;
	}

	// operation	Σ	0..*	BackboneElement	Definition of an operation or a custom query
	set operation(operation) {
		if (Array.isArray(operation)) {
			this._operation = operation.map((i) => new Operation(i));
		} else {
			this._operation = [new Operation(operation)];
		}
	}

	get operation() {
		return this._operation;
	}

	// compartment		0..*	uri	Compartments served/used by system
	set compartment(compartment) {
		this._compartment = [].concat(compartment);
	}

	get compartment() {
		return this._compartment;
	}

	toJSON() {
		return {
			mode: this._mode,
			documentation: this._documentation,
			security: this._security,
			resource: this._resource,
			interaction: this._interaction,
			searchParam: this._searchParam,
			operation: this._operation,
			compartment: this._compartment,
		};
	}
}

class CapabilityStatement extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'CapabilityStatement';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// url	Σ	0..1	uri	Logical URI to reference this capability statement (globally unique)
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// version	Σ	0..1	string	Business version of the capability statement
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// name	Σ	0..1	string	Name for this capability statement (computer friendly)
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// title	Σ	0..1	string	Name for this capability statement (human friendly)
	set title(title) {
		this._title = title;
	}

	get title() {
		return this._title;
	}

	// status	?!Σ	1..1	code	draft | active | retired | unknown
	// PublicationStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// experimental	?!Σ	0..1	boolean	For testing purposes, not real usage
	set experimental(experimental) {
		this._experimental = experimental;
	}

	get experimental() {
		return this._experimental;
	}

	// date	Σ	1..1	dateTime	Date this was last changed
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

	// description	I	0..1	markdown	Natural language description of the capability statement
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

	// jurisdiction	Σ	0..*	CodeableConcept	Intended jurisdiction for capability statement (if applicable)
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

	// purpose		0..1	markdown	Why this capability statement is defined
	set purpose(purpose) {
		this._purpose = purpose;
	}

	get purpose() {
		return this._purpose;
	}

	// copyright		0..1	markdown	Use and/or publishing restrictions
	set copyright(copyright) {
		this._copyright = copyright;
	}

	get copyright() {
		return this._copyright;
	}

	// kind	Σ	1..1	code	instance | capability | requirements
	// CapabilityStatementKind (Required)
	set kind(kind) {
		this._kind = new Code(kind);
	}

	get kind() {
		return this._kind;
	}

	// instantiates	Σ	0..*	uri	Canonical URL of another capability statement this implements
	set instantiates(instantiates) {
		this._instantiates = [].concat(instantiates);
	}

	get instantiates() {
		return this._instantiates;
	}

	// software	ΣI	0..1	BackboneElement	Software that is covered by this capability statement
	set software(software) {
		this._software = new Software(software);
	}

	get software() {
		return this._software;
	}

	// implementation	ΣI	0..1	BackboneElement	If this describes a specific instance
	set implementation(implementation) {
		this._implementation = new Implementation(implementation);
	}

	get implementation() {
		return this._implementation;
	}

	// fhirVersion	Σ	1..1	id	FHIR Version the system uses
	set fhirVersion(fhirVersion) {
		this._fhirVersion = fhirVersion;
	}

	get fhirVersion() {
		return this._fhirVersion;
	}

	// acceptUnknown	Σ	1..1	code	no | extensions | elements | both
	// UnknownContentCode (Required)
	set acceptUnknown(acceptUnknown) {
		this._acceptUnknown = new Code(acceptUnknown);
	}

	get acceptUnknown() {
		return this._acceptUnknown;
	}

	// format	Σ	1..*	code	formats supported (xml | json | ttl | mime type)
	// MimeType  (Required)
	set format(format) {
		if (Array.isArray(format)) {
			this._format = format.map((i) => new Code(i));
		} else {
			this._format = [new Code(format)];
		}
	}

	get format() {
		return this._format;
	}

	// patchFormat	Σ	0..*	code	Patch formats supported
	// MimeType  (Required)
	set patchFormat(patchFormat) {
		if (Array.isArray(patchFormat)) {
			this._patchFormat = patchFormat.map((i) => new Code(i));
		} else {
			this._patchFormat = [new Code(patchFormat)];
		}
	}

	get patchFormat() {
		return this._patchFormat;
	}

	// implementationGuide	Σ	0..*	uri	Implementation guides supported
	set implementationGuide(implementationGuide) {
		this._implementationGuide = [].concat(implementationGuide);
	}

	get implementationGuide() {
		return this._implementationGuide;
	}

	// profile	Σ	0..*	Reference(StructureDefinition)	Profiles for use cases supported
	set profile(profile) {
		if (Array.isArray(profile)) {
			this._profile = profile.map((i) => new Reference(i));
		} else {
			this._profile = [new Reference(profile)];
		}
	}

	get profile() {
		return this._profile;
	}

	// rest	ΣI	0..*	BackboneElement	If the endpoint is a RESTful one
	// + A given resource can only be described once per RESTful mode.
	set rest(rest) {
		if (Array.isArray(rest)) {
			this._rest = rest.map((i) => new Rest(i));
		} else {
			this._rest = [new Rest(rest)];
		}
	}

	get rest() {
		return this._rest;
	}

	// messaging	ΣI	0..*	BackboneElement	If messaging is supported
	// + A Capability Statement messaging element SHALL have either supportedMessage or event element, but not both.
	set messaging(messaging) {
		if (Array.isArray(messaging)) {
			this._messaging = messaging.map((i) => new Messaging(i));
		} else {
			this._messaging = [new Messaging(messaging)];
		}
	}

	get messaging() {
		return this._messaging;
	}

	// document	ΣI	0..*	BackboneElement	Document definition
	set document(document) {
		if (Array.isArray(document)) {
			this._document = document.map((i) => new Document(i));
		} else {
			this._document = [new Document(document)];
		}
	}

	get document() {
		return this._document;
	}

	toJSON() {
		const json = {
			url: this._url,
			version: this._version,
			name: this._name,
			title: this._title,
			status: this._status,
			experimental: this._experimental,
			date: this._date,
			publisher: this._publisher,
			contact: this._contact,
			description: this._description,
			useContext: this._useContext,
			jurisdiction: this._jurisdiction,
			purpose: this._purpose,
			copyright: this._copyright,
			kind: this._kind,
			instantiates: this._instantiates,
			software: this._software,
			implementation: this._implementation,
			fhirVersion: this._fhirVersion,
			acceptUnknown: this._acceptUnknown,
			format: this._format,
			patchFormat: this._patchFormat,
			implementationGuide: this._implementationGuide,
			profile: this._profile,
			rest: this._rest,
			messaging: this._messaging,
			document: this._document,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.CapabilityStatement = CapabilityStatement;
module.exports.Rest = Rest;
module.exports.Messaging = Messaging;
module.exports.Endpoint = Endpoint;
module.exports.SupportedMessage = SupportedMessage;
module.exports.Event = Event;
module.exports.Software = Software;
module.exports.Implementation = Implementation;
module.exports.Document = Document;
module.exports.Certificate = Certificate;
module.exports.Security = Security;
module.exports.Interaction = Interaction;
module.exports.Operation = Operation;
module.exports.Interaction = Interaction;
module.exports.SearchParam = SearchParam;
module.exports.Resource = Resource;
