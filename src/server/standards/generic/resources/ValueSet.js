const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const ContactDetail = require('../types/ContactDetail');
const UsageContext = require('../types/UsageContext');
const CodeableConcept = require('../types/CodeableConcept');
const Coding = require('../types/Coding');

class Contains {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// system		0..1	uri	System value for the code
	set system(system) {
		this._system = system;
	}

	get system() {
		return this._system;
	}

	// abstract		0..1	boolean	If user cannot select this entry
	set containsAbstract(containsAbstract) {
		this._containsAbstract = containsAbstract;
	}

	get containsAbstract() {
		return this._containsAbstract;
	}

	// inactive		0..1	boolean	If concept is inactive in the code system
	set inactive(inactive) {
		this._inactive = inactive;
	}

	get inactive() {
		return this._inactive;
	}

	// version		0..1	string	Version in which this code/display is defined
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// code	I	0..1	code	Code - if blank, this is not a selectable code
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	// display	I	0..1	string	User display for the concept
	set display(display) {
		this._display = display;
	}

	get display() {
		return this._display;
	}

	// designation		0..*	see designation	Additional representations for this item
	set designation(designation) {
		this._designation = [].concat(designation);
	}

	get designation() {
		return this._designation;
	}

	// contains		0..*	see contains	Codes contained under this entry
	set contains(contains) {
		this._contains = [].concat(contains);
	}

	get contains() {
		return this._contains;
	}

	toJSON() {
		return {
			system: this._system,
			containsAbstract: this._containsAbstract,
			inactive: this._inactive,
			version: this._version,
			code: this._code,
			display: this._display,
			designation: this._designation,
			contains: this._contains,
		};
	}
}

class Parameter {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// name		1..1	string	Name as assigned by the server
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// value[x]		0..1		Value of the named parameter
	// valueString			string
	set valueString(valueString) {
		this._valueString = valueString;
	}

	get valueString() {
		return this._valueString;
	}

	// valueBoolean			boolean
	set valueBoolean(valueBoolean) {
		this._valueBoolean = valueBoolean;
	}

	get valueBoolean() {
		return this._valueBoolean;
	}

	// valueInteger			integer
	set valueInteger(valueInteger) {
		this._valueInteger = valueInteger;
	}

	get valueInteger() {
		return this._valueInteger;
	}

	// valueDecimal			decimal
	set valueDecimal(valueDecimal) {
		this._valueDecimal = valueDecimal;
	}

	get valueDecimal() {
		return this._valueDecimal;
	}

	// valueUri			uri
	set valueUri(valueUri) {
		this._valueUri = valueUri;
	}

	get valueUri() {
		return this._valueUri;
	}

	// valueCode			code
	set valueCode(valueCode) {
		this._valueCode = new Code(valueCode);
	}

	get valueCode() {
		return this._valueCode;
	}

	toJSON() {
		return {
			name: this._name,
			valueString: this._valueString,
			valueBoolean: this._valueBoolean,
			valueInteger: this._valueInteger,
			valueDecimal: this._valueDecimal,
			valueUri: this._valueUri,
			valueCode: this._valueCode,
		};
	}
}

class Expansion {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// identifier		1..1	uri	Uniquely identifies this expansion
	set identifier(identifier) {
		this._identifier = identifier;
	}

	get identifier() {
		return this._identifier;
	}

	// timestamp		1..1	dateTime	Time ValueSet expansion happened
	set timestamp(timestamp) {
		this._timestamp = timestamp;
	}

	get timestamp() {
		return this._timestamp;
	}

	// total		0..1	integer	Total number of codes in the expansion
	set total(total) {
		this._total = total;
	}

	get total() {
		return this._total;
	}

	// offset		0..1	integer	Offset at which this resource starts
	set offset(offset) {
		this._offset = offset;
	}

	get offset() {
		return this._offset;
	}

	// parameter		0..*	BackboneElement	Parameter that controlled the expansion process
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

	// contains	I	0..*	BackboneElement	Codes in the value set
	// + SHALL have a code or a display
	// + Must have a code if not abstract
	// + Must have a system if a code is present
	set contains(contains) {
		if (Array.isArray(contains)) {
			this._contains = contains.map((i) => new Contains(i));
		} else {
			this._contains = [new Contains(contains)];
		}
	}

	get contains() {
		return this._contains;
	}

	toJSON() {
		return {
			identifier: this._identifier,
			timestamp: this._timestamp,
			total: this._total,
			offset: this._offset,
			parameter: this._parameter,
			contains: this._contains,
		};
	}
}

class Designation {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// language		0..1	code	Human language of the designation
	// Common Languages (Extensible but limited to All Languages)
	set language(language) {
		this._language = new Code(language);
	}

	get language() {
		return this._language;
	}

	// use		0..1	Coding	Details how this designation would be used
	// Designation Use (Extensible)
	set use(use) {
		this._use = new Coding(use);
	}

	get use() {
		return this._use;
	}

	// value		1..1	string	The text value for this designation
	set value(value) {
		this._value = value;
	}

	get value() {
		return this._value;
	}

	toJSON() {
		return {
			language: this._language,
			use: this._use,
			value: this._value,
		};
	}
}

class Concept {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code		1..1	code	Code or expression from system
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	// display		0..1	string	Text to display for this code for this value set in this valueset
	set display(display) {
		this._display = display;
	}

	get display() {
		return this._display;
	}

	// designation		0..*	BackboneElement	Additional representations for this concept
	set designation(designation) {
		if (Array.isArray(designation)) {
			this._designation = designation.map((i) => new Designation(i));
		} else {
			this._designation = [new Designation(designation)];
		}
	}

	get designation() {
		return this._designation;
	}

	toJSON() {
		return {
			code: this._code,
			display: this._display,
			designation: this._designation,
		};
	}
}

class Filter {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// property	Σ	1..1	code	A property defined by the code system
	set property(property) {
		this._property = new Code(property);
	}

	get property() {
		return this._property;
	}

	// op	Σ	1..1	code	= | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | exists
	// FilterOperator (Required)
	set op(op) {
		this._op = new Code(op);
	}

	get op() {
		return this._op;
	}

	// value	Σ	1..1	code	Code from the system, or regex criteria, or boolean value for exists
	set value(value) {
		this._value = new Code(value);
	}

	get value() {
		return this._value;
	}

	toJSON() {
		return {
			property: this._property,
			op: this._op,
			value: this._value,
		};
	}
}

class Include {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// system	ΣI	0..1	uri	The system the codes come from
	set system(system) {
		this._system = system;
	}

	get system() {
		return this._system;
	}

	// version	Σ	0..1	string	Specific version of the code system referred to
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// concept	I	0..*	BackboneElement	A concept defined in the system
	set concept(concept) {
		if (Array.isArray(concept)) {
			this._concept = concept.map((i) => new Concept(i));
		} else {
			this._concept = [new Concept(concept)];
		}
	}

	get concept() {
		return this._concept;
	}

	// filter	?!ΣI	0..*	BackboneElement	Select codes/concepts by their properties (including relationships)
	set filter(filter) {
		if (Array.isArray(filter)) {
			this._filter = filter.map((i) => new Filter(i));
		} else {
			this._filter = [new Filter(filter)];
		}
	}

	get filter() {
		return this._filter;
	}

	// valueSet	ΣI	0..*	uri	Select only contents included in this value set
	set valueSet(valueSet) {
		this._valueSet = [].concat(valueSet);
	}

	get valueSet() {
		return this._valueSet;
	}

	toJSON() {
		return {
			system: this._system,
			version: this._version,
			concept: this._concept,
			filter: this._filter,
			valueSet: this._valueSet,
		};
	}
}

class Compose {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// lockedDate	Σ	0..1	date	Fixed date for version-less references (transitive)
	set lockedDate(lockedDate) {
		this._lockedDate = lockedDate;
	}

	get lockedDate() {
		return this._lockedDate;
	}

	// inactive	Σ	0..1	boolean	Whether inactive codes are in the value set
	set inactive(inactive) {
		this._inactive = inactive;
	}

	get inactive() {
		return this._inactive;
	}

	// include	ΣI	1..*	BackboneElement	Include one or more codes from a code system or other value set(s)
	// + A value set with concepts or filters SHALL include a system
	// + Cannot have both concept and filter
	// + A value set include/exclude SHALL have a value set or a system
	set include(include) {
		if (Array.isArray(include)) {
			this._include = include.map((i) => new Include(i));
		} else {
			this._include = [new Include(include)];
		}
	}

	get include() {
		return this._include;
	}

	// exclude	I	0..*	see include	Explicitly exclude codes from a code system or other value sets
	set exclude(exclude) {
		this._exclude = [].concat(exclude);
	}

	get exclude() {
		return this._exclude;
	}

	toJSON() {
		return {
			lockedDate: this._lockedDate,
			inactive: this._inactive,
			include: this._include,
			exclude: this._exclude,
		};
	}
}

class ValueSet extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'ValueSet';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// url	Σ	0..1	uri	Logical URI to reference this value set (globally unique)
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// identifier	Σ	0..*	Identifier	Additional identifier for the value set
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

	// version	Σ	0..1	string	Business version of the value set
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// name	Σ	0..1	string	Name for this value set (computer friendly)
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// title	Σ	0..1	string	Name for this value set (human friendly)
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

	// description		0..1	markdown	Natural language description of the value set
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

	// jurisdiction	Σ	0..*	CodeableConcept	Intended jurisdiction for value set (if applicable)
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

	// immutable	Σ	0..1	boolean	Indicates whether or not any change to the content logical definition may occur
	set immutable(immutable) {
		this._immutable = immutable;
	}

	get immutable() {
		return this._immutable;
	}

	// purpose		0..1	markdown	Why this value set is defined
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

	// extensible	Σ	0..1	boolean	Whether this is intended to be used with an extensible binding
	set extensible(extensible) {
		this._extensible = extensible;
	}

	get extensible() {
		return this._extensible;
	}

	// compose	I	0..1	BackboneElement	Definition of the content of the value set (CLD)
	set compose(compose) {
		this._compose = new Compose(compose);
	}

	get compose() {
		return this._compose;
	}

	// expansion	I	0..1	BackboneElement	Used when the value set is "expanded"
	set expansion(expansion) {
		this._expansion = new Expansion(expansion);
	}

	get expansion() {
		return this._expansion;
	}

	toJSON() {
		const json = {
			url: this._url,
			identifier: this._identifier,
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
			immutable: this._immutable,
			purpose: this._purpose,
			copyright: this._copyright,
			extensible: this._extensible,
			compose: this._compose,
			expansion: this._expansion,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.ValueSet = ValueSet;
module.exports.Compose = Compose;
module.exports.Include = Include;
module.exports.Filter = Filter;
module.exports.Concept = Concept;
module.exports.Designation = Designation;
module.exports.Expansion = Expansion;
module.exports.Parameter = Parameter;
module.exports.Contains = Contains;
