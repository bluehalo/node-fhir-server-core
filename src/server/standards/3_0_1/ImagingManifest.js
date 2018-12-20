const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class ImagingManifest extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImagingManifest';
		Object.assign(this, opt);
	}

	// This is a ImagingManifest resource
	static get __resourceType() {
		return 'ImagingManifest';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__ImagingManifest = new_value;
	}

	// Unique identifier of the DICOM Key Object Selection (KOS) that this resource represents.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// A patient resource reference which is the patient subject of all DICOM SOP Instances in this ImagingManifest.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// Date and time when the selection of the referenced instances were made. It is (typically) different from the creation date of the selection resource, and from dates associated with the referenced instances (e.g. capture time of the referenced image).
	get authoringTime() {
		return this.__authoringTime;
	}

	set authoringTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field authoringTime`);
		}
		this.__authoringTime = new_value;
	}

	// Author of ImagingManifest. It can be a human author or a device which made the decision of the SOP instances selected. For example, a radiologist selected a set of imaging SOP instances to attach in a diagnostic report, and a CAD application may author a selection to describe SOP instances it used to generate a detection conclusion.
	get author() {
		return this.__author;
	}

	set author(new_value) {
		const Reference = require('./Reference');
		this.__author = new Reference(new_value);
	}

	// Free text narrative description of the ImagingManifest.   The value may be derived from the DICOM Standard Part 16, CID-7010 descriptions (e.g. Best in Set, Complete Study Content). Note that those values cover the wide range of uses of the DICOM Key Object Selection object, several of which are not supported by ImagingManifest. Specifically, there is no expected behavior associated with descriptions that suggest referenced images be removed or not used.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Study identity and locating information of the DICOM SOP instances in the selection.
	get study() {
		return this.__study;
	}

	set study(new_value) {
		const ImagingManifestStudy = require('./ImagingManifestStudy');
		this.__study = Array.isArray(new_value)
			? new_value.map(val => new ImagingManifestStudy(val))
			: [new ImagingManifestStudy(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.toJSON(),
			patient: this.__patient && this.__patient.toJSON(),
			authoringTime: this.__authoringTime,
			author: this.__author && this.__author.toJSON(),
			description: this.__description,
			study: this.__study && this.__study.map(v => v.toJSON()),
		});
	}
}

module.exports = ImagingManifest;
