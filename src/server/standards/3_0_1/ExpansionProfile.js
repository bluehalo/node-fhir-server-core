const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const ContactDetail = require('./ContactDetail');
const UsageContext = require('./UsageContext');
const CodeableConcept = require('./CodeableConcept');
const ExpansionProfile_FixedVersion = require('./ExpansionProfile_FixedVersion');
const ExpansionProfile_ExcludedSystem = require('./ExpansionProfile_ExcludedSystem');
const ExpansionProfile_Designation = require('./ExpansionProfile_Designation');

class ExpansionProfile extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'ExpansionProfile';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ExpansionProfile';
	}

	// This is a ExpansionProfile resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['ExpansionProfile'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// An absolute URI that is used to identify this expansion profile when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this expansion profile is (or will be) published. The URL SHOULD include the major version of the expansion profile. For more information see [Technical and Business Versions](resource.html#versions).
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	// A formal identifier that is used to identify this expansion profile when it is represented in other formats, or referenced in a specification, model, design or an instance.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// The identifier that is used to identify this version of the expansion profile when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the expansion profile author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
	get version () {
		return this._version;
	}

	set version ( new_value ) {
		this._version = new_value;
	}

	// A natural language name identifying the expansion profile. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// The status of this expansion profile. Enables tracking the life-cycle of the content.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['draft', 'active', 'retired', 'unknown'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// A boolean value to indicate that this expansion profile is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental () {
		return this._experimental;
	}

	set experimental ( new_value ) {
		this._experimental = new_value;
	}

	// The date  (and optionally time) when the expansion profile was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the expansion profile changes.
	get date () {
		return this._date;
	}

	set date ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this._date = new_value;
	}

	// The name of the individual or organization that published the expansion profile.
	get publisher () {
		return this._publisher;
	}

	set publisher ( new_value ) {
		this._publisher = new_value;
	}

	// Contact details to assist a user in finding and communicating with the publisher.
	get contact () {
		return this._contact;
	}

	set contact ( new_value ) {
		this._contact = Array.isArray(new_value) ? new_value.map(val => new ContactDetail(val)) : [new ContactDetail(new_value)];
	}

	// A free text natural language description of the expansion profile from a consumer's perspective.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate expansion profile instances.
	get useContext () {
		return this._useContext;
	}

	set useContext ( new_value ) {
		this._useContext = Array.isArray(new_value) ? new_value.map(val => new UsageContext(val)) : [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the expansion profile is intended to be used.
	get jurisdiction () {
		return this._jurisdiction;
	}

	set jurisdiction ( new_value ) {
		this._jurisdiction = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Fix use of a particular code system to a particular version.
	get fixedVersion () {
		return this._fixedVersion;
	}

	set fixedVersion ( new_value ) {
		this._fixedVersion = Array.isArray(new_value) ? new_value.map(val => new ExpansionProfile_FixedVersion(val)) : [new ExpansionProfile_FixedVersion(new_value)];
	}

	// Code system, or a particular version of a code system to be excluded from value set expansions.
	get excludedSystem () {
		return this._excludedSystem;
	}

	set excludedSystem ( new_value ) {
		this._excludedSystem = new ExpansionProfile_ExcludedSystem(new_value);
	}

	// Controls whether concept designations are to be included or excluded in value set expansions.
	get includeDesignations () {
		return this._includeDesignations;
	}

	set includeDesignations ( new_value ) {
		this._includeDesignations = new_value;
	}

	// A set of criteria that provide the constraints imposed on the value set expansion by including or excluding designations.
	get designation () {
		return this._designation;
	}

	set designation ( new_value ) {
		this._designation = new ExpansionProfile_Designation(new_value);
	}

	// Controls whether the value set definition is included or excluded in value set expansions.
	get includeDefinition () {
		return this._includeDefinition;
	}

	set includeDefinition ( new_value ) {
		this._includeDefinition = new_value;
	}

	// Controls whether inactive concepts are included or excluded in value set expansions.
	get activeOnly () {
		return this._activeOnly;
	}

	set activeOnly ( new_value ) {
		this._activeOnly = new_value;
	}

	// Controls whether or not the value set expansion nests codes or not (i.e. ValueSet.expansion.contains.contains).
	get excludeNested () {
		return this._excludeNested;
	}

	set excludeNested ( new_value ) {
		this._excludeNested = new_value;
	}

	// Controls whether or not the value set expansion includes codes which cannot be displayed in user interfaces.
	get excludeNotForUI () {
		return this._excludeNotForUI;
	}

	set excludeNotForUI ( new_value ) {
		this._excludeNotForUI = new_value;
	}

	// Controls whether or not the value set expansion includes post coordinated codes.
	get excludePostCoordinated () {
		return this._excludePostCoordinated;
	}

	set excludePostCoordinated ( new_value ) {
		this._excludePostCoordinated = new_value;
	}

	// Specifies the language to be used for description in the expansions i.e. the language to be used for ValueSet.expansion.contains.display.
	get displayLanguage () {
		return this._displayLanguage;
	}

	set displayLanguage ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field displayLanguage`);
		}
		this._displayLanguage = new_value;
	}

	// If the value set being expanded is incomplete (because it is too big to expand), return a limited expansion (a subset) with an indicator that expansion is incomplete, using the extension [http://hl7.org/fhir/StructureDefinition/valueset-toocostly](extension-valueset-toocostly.html).
	get limitedExpansion () {
		return this._limitedExpansion;
	}

	set limitedExpansion ( new_value ) {
		this._limitedExpansion = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			url: this._url,
			identifier: this._identifier && this._identifier.toJSON(),
			version: this._version,
			name: this._name,
			status: this._status,
			experimental: this._experimental,
			date: this._date,
			publisher: this._publisher,
			contact: this._contact && this._contact.map(v => v.toJSON()),
			description: this._description,
			useContext: this._useContext && this._useContext.map(v => v.toJSON()),
			jurisdiction: this._jurisdiction && this._jurisdiction.map(v => v.toJSON()),
			fixedVersion: this._fixedVersion && this._fixedVersion.map(v => v.toJSON()),
			excludedSystem: this._excludedSystem && this._excludedSystem.toJSON(),
			includeDesignations: this._includeDesignations,
			designation: this._designation && this._designation.toJSON(),
			includeDefinition: this._includeDefinition,
			activeOnly: this._activeOnly,
			excludeNested: this._excludeNested,
			excludeNotForUI: this._excludeNotForUI,
			excludePostCoordinated: this._excludePostCoordinated,
			displayLanguage: this._displayLanguage,
			limitedExpansion: this._limitedExpansion
		});
	}

}

module.exports = ExpansionProfile;
