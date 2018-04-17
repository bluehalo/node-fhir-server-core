const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const ContactDetail = require('../types/ContactDetail');
const UsageContext = require('../types/UsageContext');
const CodeableConcept = require('../types/CodeableConcept');

class Dependent {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// name	Σ	1..1	id	Name of a rule or group to apply
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// variable	Σ	1..*	string	Variable to pass to the rule or group
	set variable(variable) {
		this._variable = [].concat(variable);
	}

	get variable() {
		return this._variable;
	}

	toJSON() {
		return {
			name: this._name,
			variable: this._variable,
		};
	}
}

class Parameter {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// value[x]	Σ	1..1		Parameter value - variable or literal
	// valueId			id
	set valueId(valueId) {
		this._valueId = valueId;
	}

	get valueId() {
		return this._valueId;
	}

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

	toJSON() {
		return {
			valueId: this._valueId,
			valueString: this._valueString,
			valueBoolean: this._valueBoolean,
			valueInteger: this._valueInteger,
			valueDecimal: this._valueDecimal,
		};
	}
}

class Target {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// context	Σ	0..1	id	Type or variable this rule applies to
	set context(context) {
		this._context = context;
	}

	get context() {
		return this._context;
	}

	// contextType	Σ	0..1	code	type | variable
	// StructureMapContextType (Required)
	set contextType(contextType) {
		this._contextType = new Code(contextType);
	}

	get contextType() {
		return this._contextType;
	}

	// element	Σ	0..1	string	Field to create in the context
	set element(element) {
		this._element = element;
	}

	get element() {
		return this._element;
	}

	// variable	Σ	0..1	id	Named context for field, if desired, and a field is specified
	set variable(variable) {
		this._variable = variable;
	}

	get variable() {
		return this._variable;
	}

	// listMode	Σ	0..*	code	first | share | last | collate
	// StructureMapTargetListMode (Required)
	set listMode(listMode) {
		if (Array.isArray(listMode)) {
			this._listMode = listMode.map((i) => new Code(i));
		} else {
			this._listMode = [new Code(listMode)];
		}
	}

	get listMode() {
		return this._listMode;
	}

	// listRuleId	Σ	0..1	id	Internal rule reference for shared list items
	set listRuleId(listRuleId) {
		this._listRuleId = listRuleId;
	}

	get listRuleId() {
		return this._listRuleId;
	}

	// transform	Σ	0..1	code	create | copy +
	// StructureMapTransform (Required)
	set transform(transform) {
		this._transform = new Code(transform);
	}

	get transform() {
		return this._transform;
	}

	// parameter	Σ	0..*	BackboneElement	Parameters to the transform
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

	toJSON() {
		return {
			context: this._context,
			contextType: this._contextType,
			element: this._element,
			variable: this._variable,
			listMode: this._listMode,
			listRuleId: this._listRuleId,
			transform: this._transform,
			parameter: this._parameter,
		};
	}
}

class Source {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// context	Σ	1..1	id	Type or variable this rule applies to
	set context(context) {
		this._context = context;
	}

	get context() {
		return this._context;
	}

	// min	Σ	0..1	integer	Specified minimum cardinality
	set min(min) {
		this._min = min;
	}

	get min() {
		return this._min;
	}

	// max	Σ	0..1	string	Specified maximum cardinality (number or *)
	set max(max) {
		this._max = max;
	}

	get max() {
		return this._max;
	}

	// type	Σ	0..1	string	Rule only applies if source has this type
	set type(type) {
		this._type = type;
	}

	get type() {
		return this._type;
	}

	// defaultValue[x]	Σ	0..1	*	Default value if no value exists
	// element	Σ	0..1	string	Optional field for this source
	set element(element) {
		this._element = element;
	}

	get element() {
		return this._element;
	}

	// listMode	Σ	0..1	code	first | not_first | last | not_last | only_one
	// StructureMapSourceListMode (Required)
	set listMode(listMode) {
		this._listMode = new Code(listMode);
	}

	get listMode() {
		return this._listMode;
	}

	// variable	Σ	0..1	id	Named context for field, if a field is specified
	set variable(variable) {
		this._variable = variable;
	}

	get variable() {
		return this._variable;
	}

	// condition	Σ	0..1	string	FHIRPath expression - must be true or the rule does not apply
	set condition(condition) {
		this._condition = condition;
	}

	get condition() {
		return this._condition;
	}

	// check	Σ	0..1	string	FHIRPath expression - must be true or the mapping engine throws an error instead of completing
	set check(check) {
		this._check = check;
	}

	get check() {
		return this._check;
	}

	toJSON() {
		return {
			context: this._context,
			min: this._min,
			max: this._max,
			type: this._type,
			element: this._element,
			listMode: this._listMode,
			variable: this._variable,
			condition: this._condition,
			check: this._check,
		};
	}
}

class Rule {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// name	Σ	1..1	id	Name of the rule for internal references
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// source	Σ	1..*	BackboneElement	Source inputs to the mapping
	set source(source) {
		if (Array.isArray(source)) {
			this._source = source.map((i) => new Source(i));
		} else {
			this._source = [new Source(source)];
		}
	}

	get source() {
		return this._source;
	}

	// target	ΣI	0..*	BackboneElement	Content to create because of this mapping rule
	// + Must have a contextType if you have a context
	// + Can only have a element if you have a context
	set target(target) {
		if (Array.isArray(target)) {
			this._target = target.map((i) => new Target(i));
		} else {
			this._target = [new Target(target)];
		}
	}

	get target() {
		return this._target;
	}

	// rule	Σ	0..*	see rule	Rules contained in this rule
	set rule(rule) {
		this._rule = [].concat(rule);
	}

	get rule() {
		return this._rule;
	}

	// dependent	Σ	0..*	BackboneElement	Which other rules to apply in the context of this rule
	set dependent(dependent) {
		if (Array.isArray(dependent)) {
			this._dependent = dependent.map((i) => new Dependent(i));
		} else {
			this._dependent = [new Dependent(dependent)];
		}
	}

	get dependent() {
		return this._dependent;
	}

	// documentation		0..1	string	Documentation for this instance of data
	set documentation(documentation) {
		this._documentation = documentation;
	}

	get documentation() {
		return this._documentation;
	}

	toJSON() {
		return {
			name: this._name,
			source: this._source,
			target: this._target,
			rule: this._rule,
			dependent: this._dependent,
			documentation: this._documentation,
		};
	}
}

class Input {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// name	Σ	1..1	id	Name for this instance of data
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// type	Σ	0..1	string	Type for this instance of data
	set type(type) {
		this._type = type;
	}

	get type() {
		return this._type;
	}

	// mode	Σ	1..1	code	source | target
	// StructureMapInputMode (Required)
	set mode(mode) {
		this._mode = new Code(mode);
	}

	get mode() {
		return this._mode;
	}

	// documentation		0..1	string	Documentation for this instance of data
	set documentation(documentation) {
		this._documentation = documentation;
	}

	get documentation() {
		return this._documentation;
	}

	toJSON() {
		return {
			name: this._name,
			type: this._type,
			mode: this._mode,
			documentation: this._documentation,
		};
	}
}

class Group {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// name	Σ	1..1	id	Human-readable label
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// extends	Σ	0..1	id	Another group that this group adds rules to
	set groupExtends(groupExtends) {
		this._groupExtends = groupExtends;
	}

	get groupExtends() {
		return this._groupExtends;
	}

	// typeMode	Σ	1..1	code	none | types | type-and-types
	// StructureMapGroupTypeMode (Required)
	set typeMode(typeMode) {
		this._typeMode = new Code(typeMode);
	}

	get typeMode() {
		return this._typeMode;
	}

	// documentation	Σ	0..1	string	Additional description/explaination for group
	set documentation(documentation) {
		this._documentation = documentation;
	}

	get documentation() {
		return this._documentation;
	}

	// input	Σ	1..*	BackboneElement	Named instance provided when invoking the map
	set input(input) {
		if (Array.isArray(input)) {
			this._input = input.map((i) => new Input(i));
		} else {
			this._input = [new Input(input)];
		}
	}

	get input() {
		return this._input;
	}

	// rule	Σ	1..*	BackboneElement	Transform Rule from source to target
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
		return {
			name: this._name,
			groupExtends: this._groupExtends,
			typeMode: this._typeMode,
			documentation: this._documentation,
			input: this._input,
			rule: this._rule,
		};
	}
}

class Structure {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// url	Σ	1..1	uri	Canonical URL for structure definition
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// mode	Σ	1..1	code	source | queried | target | produced
	// StructureMapModelMode (Required)
	set mode(mode) {
		this._mode = new Code(mode);
	}

	get mode() {
		return this._mode;
	}

	// alias	Σ	0..1	string	Name for type in this map
	set alias(alias) {
		this._alias = alias;
	}

	get alias() {
		return this._alias;
	}

	// documentation		0..1	string	Documentation on use of structure
	set documentation(documentation) {
		this._documentation = documentation;
	}

	get documentation() {
		return this._documentation;
	}

	toJSON() {
		return {
			url: this._url,
			mode: this._mode,
			alias: this._alias,
			documentation: this._documentation,
		};
	}
}

class StructureMap extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'StructureMap';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// url	Σ	1..1	uri	Logical URI to reference this structure map (globally unique)
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// identifier	Σ	0..*	Identifier	Additional identifier for the structure map
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

	// version	Σ	0..1	string	Business version of the structure map
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// name	Σ	1..1	string	Name for this structure map (computer friendly)
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// title	Σ	0..1	string	Name for this structure map (human friendly)
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

	// description		0..1	markdown	Natural language description of the structure map
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

	// jurisdiction	Σ	0..*	CodeableConcept	Intended jurisdiction for structure map (if applicable)
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

	// purpose		0..1	markdown	Why this structure map is defined
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

	// structure	Σ	0..*	BackboneElement	Structure Definition used by this map
	set structure(structure) {
		if (Array.isArray(structure)) {
			this._structure = structure.map((i) => new Structure(i));
		} else {
			this._structure = [new Structure(structure)];
		}
	}

	get structure() {
		return this._structure;
	}

	// import	Σ	0..*	uri	Other maps used by this map (canonical URLs)
	set structureMapImport(structureMapImport) {
		this._structureMapImport = [].concat(structureMapImport);
	}

	get structureMapImport() {
		return this._structureMapImport;
	}

	// group	Σ	1..*	BackboneElement	Named sections for reader convenience
	set group(group) {
		if (Array.isArray(group)) {
			this._group = group.map((i) => new Group(i));
		} else {
			this._group = [new Group(group)];
		}
	}

	get group() {
		return this._group;
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
			purpose: this._purpose,
			copyright: this._copyright,
			structure: this._structure,
			structureMapImport: this._structureMapImport,
			group: this._group,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.StructureMap = StructureMap;
module.exports.Structure = Structure;
module.exports.Group = Group;
module.exports.Input = Input;
module.exports.Rule = Rule;
module.exports.Source = Source;
module.exports.Target = Target;
module.exports.Parameter = Parameter;
module.exports.Dependent = Dependent;
