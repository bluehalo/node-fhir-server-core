const DomainResource = require('./DomainResource');
const OidScalar = require('./scalars/Oid.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class ImagingObjectSelection extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImagingObjectSelection';
		Object.assign(this, opt);
	}

	// This is a ImagingObjectSelection resource
	static get __resourceType() {
		return 'ImagingObjectSelection';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__ImagingObjectSelection = new_value;
	}

	// Instance UID of the DICOM KOS SOP Instances represented in this resource.
	get uid() {
		return this.__uid;
	}

	set uid(new_value) {
		// Throw if new value does not match the pattern
		let pattern = OidScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field uid`);
		}
		this.__uid = new_value;
	}

	// A patient resource reference which is the patient subject of all DICOM SOP Instances in this ImagingObjectSelection.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// The reason for, or significance of, the selection of objects referenced in the resource.
	get title() {
		return this.__title;
	}

	set title(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__title = new CodeableConcept(new_value);
	}

	// Text description of the DICOM SOP instances selected in the ImagingObjectSelection. This should be aligned with the content of the title element, and can provide further explanation of the SOP instances in the selection.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Author of ImagingObjectSelection. It can be a human author or a device which made the decision of the SOP instances selected. For example, a radiologist selected a set of imaging SOP instances to attach in a diagnostic report, and a CAD application may author a selection to describe SOP instances it used to generate a detection conclusion.
	get author() {
		return this.__author;
	}

	set author(new_value) {
		const Reference = require('./Reference');
		this.__author = new Reference(new_value);
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

	// Study identity and locating information of the DICOM SOP instances in the selection.
	get study() {
		return this.__study;
	}

	set study(new_value) {
		const ImagingObjectSelectionStudy = require('./ImagingObjectSelectionStudy');
		this.__study = Array.isArray(new_value)
			? new_value.map(val => new ImagingObjectSelectionStudy(val))
			: [new ImagingObjectSelectionStudy(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			uid: this.__uid,
			patient: this.__patient && this.__patient.toJSON(),
			title: this.__title && this.__title.toJSON(),
			description: this.__description,
			author: this.__author && this.__author.toJSON(),
			authoringTime: this.__authoringTime,
			study: this.__study && this.__study.map(v => v.toJSON()),
		});
	}
}

module.exports = ImagingObjectSelection;
