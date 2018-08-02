const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const ImagingManifest_Study = require('./ImagingManifest_Study');

class ImagingManifest extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'ImagingManifest';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ImagingManifest';
	}

	// This is a ImagingManifest resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['ImagingManifest'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Unique identifier of the DICOM Key Object Selection (KOS) that this resource represents.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// A patient resource reference which is the patient subject of all DICOM SOP Instances in this ImagingManifest.
	get patient () {
		return this._patient;
	}

	set patient ( new_value ) {
		this._patient = new Reference(new_value);
	}

	// Date and time when the selection of the referenced instances were made. It is (typically) different from the creation date of the selection resource, and from dates associated with the referenced instances (e.g. capture time of the referenced image).
	get authoringTime () {
		return this._authoringTime;
	}

	set authoringTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field authoringTime`);
		}
		this._authoringTime = new_value;
	}

	// Author of ImagingManifest. It can be a human author or a device which made the decision of the SOP instances selected. For example, a radiologist selected a set of imaging SOP instances to attach in a diagnostic report, and a CAD application may author a selection to describe SOP instances it used to generate a detection conclusion.
	get author () {
		return this._author;
	}

	set author ( new_value ) {
		this._author = new Reference(new_value);
	}

	// Free text narrative description of the ImagingManifest.   The value may be derived from the DICOM Standard Part 16, CID-7010 descriptions (e.g. Best in Set, Complete Study Content). Note that those values cover the wide range of uses of the DICOM Key Object Selection object, several of which are not supported by ImagingManifest. Specifically, there is no expected behavior associated with descriptions that suggest referenced images be removed or not used.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Study identity and locating information of the DICOM SOP instances in the selection.
	get study () {
		return this._study;
	}

	set study ( new_value ) {
		this._study = Array.isArray(new_value) ? new_value.map(val => new ImagingManifest_Study(val)) : [new ImagingManifest_Study(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.toJSON(),
			patient: this._patient && this._patient.toJSON(),
			authoringTime: this._authoringTime,
			author: this._author && this._author.toJSON(),
			description: this._description,
			study: this._study && this._study.map(v => v.toJSON())
		});
	}

}

module.exports = ImagingManifest;
