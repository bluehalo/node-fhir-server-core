const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const ContactDetail = require('../types/ContactDetail');
const UsageContext = require('../types/UsageContext');
const CodeableConcept = require('../types/CodeableConcept');
const Coding = require('../types/Coding');

class Designation {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// include	Σ	0..1	BackboneElement	Designations to be included
	set include(include) {
		/* eslint-disable no-use-before-define */
		this._include = new Include(include);
		/* eslint-enable no-use-before-define */
	}

	get include() {
		return this._include;
	}

	// exclude	Σ	0..1	BackboneElement	Designations to be excluded
	// + SHALL have at least one of language or use
	set exclude(exclude) {
		/* eslint-disable no-use-before-define */
		this._exclude = new Exclude(exclude);
		/* eslint-enable no-use-before-define */
	}

	get exclude() {
		return this._exclude;
	}

	// language	Σ	0..1	code	Human language of the designation to be excluded
	// Common Languages (Extensible but limited to All Languages)
	set language(language) {
		this._language = new Code(language);
	}

	get language() {
		return this._language;
	}

	// use	Σ	0..1	Coding	What kind of Designation to exclude
	// Designation Use (Required)
	set use(use) {
		this._use = new Coding(use);
	}

	get use() {
		return this._use;
	}

	toJSON() {
		return {
			include: this._include,
			exclude: this._exclude,
			language: this._language,
			use: this._use,
		};
	}
}

class Exclude {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// designation	ΣI	0..*	BackboneElement	The designation to be excluded
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
			designation: this._designation,
		};
	}
}

class Include {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// designation	ΣI	0..*	BackboneElement	The designation to be included
	// + SHALL have at least one of language or use
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
			designation: this._designation,
		};
	}
}

class ExcludedSystem {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// system	Σ	1..1	uri	The specific code system to be excluded
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

	toJSON() {
		return {
			system: this._system,
			version: this._version,
		};
	}
}

class FixedVersion {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// system	Σ	1..1	uri	System to have its version fixed
	set system(system) {
		this._system = system;
	}

	get system() {
		return this._system;
	}

	// version	Σ	1..1	string	Specific version of the code system referred to
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// mode	Σ	1..1	code	default | check | override
	// SystemVersionProcessingMode (Required)
	set mode(mode) {
		this._mode = new Code(mode);
	}

	get mode() {
		return this._mode;
	}

	toJSON() {
		return {
			system: this._system,
			version: this._version,
			mode: this._mode,
		};
	}
}

class ExpansionProfile extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'ExpansionProfile';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// url	Σ	0..1	uri	Logical URI to reference this expansion profile (globally unique)
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// identifier	Σ	0..1	Identifier	Additional identifier for the expansion profile
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// version	Σ	0..1	string	Business version of the expansion profile
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// name	Σ	0..1	string	Name for this expansion profile (computer friendly)
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

	// description		0..1	markdown	Natural language description of the expansion profile
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

	// jurisdiction	Σ	0..*	CodeableConcept	Intended jurisdiction for expansion profile (if applicable)
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

	// fixedVersion	Σ	0..*	BackboneElement	Fix use of a code system to a particular version
	set fixedVersion(fixedVersion) {
		if (Array.isArray(fixedVersion)) {
			this._fixedVersion = fixedVersion.map((i) => new FixedVersion(i));
		} else {
			this._fixedVersion = [new FixedVersion(fixedVersion)];
		}
	}

	get fixedVersion() {
		return this._fixedVersion;
	}

	// excludedSystem	Σ	0..1	BackboneElement	Systems/Versions to be exclude
	set excludedSystem(excludedSystem) {
		this._excludedSystem = new ExcludedSystem(excludedSystem);
	}

	get excludedSystem() {
		return this._excludedSystem;
	}

	// includeDesignations	Σ	0..1	boolean	Whether the expansion should include concept designations
	set includeDesignations(includeDesignations) {
		this._includeDesignations = includeDesignations;
	}

	get includeDesignations() {
		return this._includeDesignations;
	}

	// designation	Σ	0..1	BackboneElement	When the expansion profile imposes designation contraints
	set designation(designation) {
		this._designation = new Designation(designation);
	}

	get designation() {
		return this._designation;
	}

	// includeDefinition	Σ	0..1	boolean	Include or exclude the value set definition in the expansion
	set includeDefinition(includeDefinition) {
		this._includeDefinition = includeDefinition;
	}

	get includeDefinition() {
		return this._includeDefinition;
	}

	// activeOnly	Σ	0..1	boolean	Include or exclude inactive concepts in the expansion
	set activeOnly(activeOnly) {
		this._activeOnly = activeOnly;
	}

	get activeOnly() {
		return this._activeOnly;
	}

	// excludeNested	Σ	0..1	boolean	Nested codes in the expansion or not
	set excludeNested(excludeNested) {
		this._excludeNested = excludeNested;
	}

	get excludeNested() {
		return this._excludeNested;
	}

	// excludeNotForUI	Σ	0..1	boolean	Include or exclude codes which cannot be rendered in user interfaces in the value set expansion
	set excludeNotForUI(excludeNotForUI) {
		this._excludeNotForUI = excludeNotForUI;
	}

	get excludeNotForUI() {
		return this._excludeNotForUI;
	}

	// excludePostCoordinated	Σ	0..1	boolean	Include or exclude codes which are post coordinated expressions in the value set expansion
	set excludePostCoordinated(excludePostCoordinated) {
		this._excludePostCoordinated = excludePostCoordinated;
	}

	get excludePostCoordinated() {
		return this._excludePostCoordinated;
	}

	// displayLanguage	Σ	0..1	code	Specify the language for the display element of codes in the value set expansion
	// Common Languages (Extensible but limited to All Languages)
	set displayLanguage(displayLanguage) {
		this._displayLanguage = new Code(displayLanguage);
	}

	get displayLanguage() {
		return this._displayLanguage;
	}

	// limitedExpansion	Σ	0..1	boolean	Controls behaviour of the value set expand operation when value sets are too large to be completely expanded
	set limitedExpansion(limitedExpansion) {
		this._limitedExpansion = limitedExpansion;
	}

	get limitedExpansion() {
		return this._limitedExpansion;
	}

	toJSON() {
		const json = {
			url: this._url,
			identifier: this._identifier,
			version: this._version,
			name: this._name,
			status: this._status,
			experimental: this._experimental,
			date: this._date,
			publisher: this._publisher,
			contact: this._contact,
			description: this._description,
			useContext: this._useContext,
			jurisdiction: this._jurisdiction,
			fixedVersion: this._fixedVersion,
			excludedSystem: this._excludedSystem,
			includeDesignations: this._includeDesignations,
			designation: this._designation,
			includeDefinition: this._includeDefinition,
			activeOnly: this._activeOnly,
			excludeNested: this._excludeNested,
			excludeNotForUI: this._excludeNotForUI,
			excludePostCoordinated: this._excludePostCoordinated,
			displayLanguage: this._displayLanguage,
			limitedExpansion: this._limitedExpansion,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.ExpansionProfile = ExpansionProfile;
module.exports.FixedVersion = FixedVersion;
module.exports.ExcludedSystem = ExcludedSystem;
module.exports.Include = Include;
module.exports.Exclude = Exclude;
module.exports.Designation = Designation;
