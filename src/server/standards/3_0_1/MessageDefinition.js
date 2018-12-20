const DomainResource = require('./DomainResource');
const UriScalar = require('./scalars/Uri.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class MessageDefinition extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MessageDefinition';
		Object.assign(this, opt);
	}

	// This is a MessageDefinition resource
	static get __resourceType() {
		return 'MessageDefinition';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__MessageDefinition = new_value;
	}

	// An absolute URI that is used to identify this message definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this message definition is (or will be) published. The URL SHOULD include the major version of the message definition. For more information see [Technical and Business Versions](resource.html#versions).
	get url() {
		return this.__url;
	}

	set url(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field url`);
		}
		this.__url = new_value;
	}

	// A formal identifier that is used to identify this message definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// The identifier that is used to identify this version of the message definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the message definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// A natural language name identifying the message definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// A short, descriptive, user-friendly title for the message definition.
	get title() {
		return this.__title;
	}

	set title(new_value) {
		this.__title = new_value;
	}

	// The status of this message definition. Enables tracking the life-cycle of the content.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// A boolean value to indicate that this message definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental() {
		return this.__experimental;
	}

	set experimental(new_value) {
		this.__experimental = new_value;
	}

	// The date  (and optionally time) when the message definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the message definition changes.
	get date() {
		return this.__date;
	}

	set date(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this.__date = new_value;
	}

	// The name of the individual or organization that published the message definition.
	get publisher() {
		return this.__publisher;
	}

	set publisher(new_value) {
		this.__publisher = new_value;
	}

	// Contact details to assist a user in finding and communicating with the publisher.
	get contact() {
		return this.__contact;
	}

	set contact(new_value) {
		const ContactDetail = require('./ContactDetail');
		this.__contact = Array.isArray(new_value)
			? new_value.map(val => new ContactDetail(val))
			: [new ContactDetail(new_value)];
	}

	// A free text natural language description of the message definition from a consumer\'s perspective.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate message definition instances.
	get useContext() {
		return this.__useContext;
	}

	set useContext(new_value) {
		const UsageContext = require('./UsageContext');
		this.__useContext = Array.isArray(new_value)
			? new_value.map(val => new UsageContext(val))
			: [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the message definition is intended to be used.
	get jurisdiction() {
		return this.__jurisdiction;
	}

	set jurisdiction(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__jurisdiction = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Explaination of why this message definition is needed and why it has been designed as it has.
	get purpose() {
		return this.__purpose;
	}

	set purpose(new_value) {
		this.__purpose = new_value;
	}

	// A copyright statement relating to the message definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the message definition.
	get copyright() {
		return this.__copyright;
	}

	set copyright(new_value) {
		this.__copyright = new_value;
	}

	// The MessageDefinition that is the basis for the contents of this resource.
	get base() {
		return this.__base;
	}

	set base(new_value) {
		const Reference = require('./Reference');
		this.__base = new Reference(new_value);
	}

	// Identifies a protocol or workflow that this MessageDefinition represents a step in.
	get parent() {
		return this.__parent;
	}

	set parent(new_value) {
		const Reference = require('./Reference');
		this.__parent = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A MessageDefinition that is superseded by this definition.
	get replaces() {
		return this.__replaces;
	}

	set replaces(new_value) {
		const Reference = require('./Reference');
		this.__replaces = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A coded identifier of a supported messaging event.
	get event() {
		return this.__event;
	}

	set event(new_value) {
		const Coding = require('./Coding');
		this.__event = new Coding(new_value);
	}

	// The impact of the content of the message.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		this.__category = new_value;
	}

	// Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
	get focus() {
		return this.__focus;
	}

	set focus(new_value) {
		const MessageDefinitionFocus = require('./MessageDefinitionFocus');
		this.__focus = Array.isArray(new_value)
			? new_value.map(val => new MessageDefinitionFocus(val))
			: [new MessageDefinitionFocus(new_value)];
	}

	// Indicates whether a response is required for this message.
	get responseRequired() {
		return this.__responseRequired;
	}

	set responseRequired(new_value) {
		this.__responseRequired = new_value;
	}

	// Indicates what types of messages may be sent as an application-level response to this message.
	get allowedResponse() {
		return this.__allowedResponse;
	}

	set allowedResponse(new_value) {
		const MessageDefinitionAllowedResponse = require('./MessageDefinitionAllowedResponse');
		this.__allowedResponse = Array.isArray(new_value)
			? new_value.map(val => new MessageDefinitionAllowedResponse(val))
			: [new MessageDefinitionAllowedResponse(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			url: this.__url,
			identifier: this.__identifier && this.__identifier.toJSON(),
			version: this.__version,
			name: this.__name,
			title: this.__title,
			status: this.__status,
			experimental: this.__experimental,
			date: this.__date,
			publisher: this.__publisher,
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
			description: this.__description,
			useContext: this.__useContext && this.__useContext.map(v => v.toJSON()),
			jurisdiction: this.__jurisdiction && this.__jurisdiction.map(v => v.toJSON()),
			purpose: this.__purpose,
			copyright: this.__copyright,
			base: this.__base && this.__base.toJSON(),
			parent: this.__parent && this.__parent.map(v => v.toJSON()),
			replaces: this.__replaces && this.__replaces.map(v => v.toJSON()),
			event: this.__event && this.__event.toJSON(),
			category: this.__category,
			focus: this.__focus && this.__focus.map(v => v.toJSON()),
			responseRequired: this.__responseRequired,
			allowedResponse: this.__allowedResponse && this.__allowedResponse.map(v => v.toJSON()),
		});
	}
}

module.exports = MessageDefinition;
