const Resource = require('./Resource');

class DomainResource extends Resource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DomainResource';
		Object.assign(this, opt);
	}

	// This is a DomainResource resource
	static get __resourceType() {
		return 'DomainResource';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__DomainResource = new_value;
	}

	// A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it \'clinically safe\' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
	get text() {
		return this.__text;
	}

	set text(new_value) {
		const Narrative = require('./Narrative');
		this.__text = new Narrative(new_value);
	}

	// These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
	get contained() {
		return this.__contained;
	}

	set contained(new_value) {
		this.__contained = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
	get extension() {
		return this.__extension;
	}

	set extension(new_value) {
		const Extension = require('./Extension');
		this.__extension = Array.isArray(new_value) ? new_value.map(val => new Extension(val)) : [new Extension(new_value)];
	}

	// May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
	get modifierExtension() {
		return this.__modifierExtension;
	}

	set modifierExtension(new_value) {
		const Extension = require('./Extension');
		this.__modifierExtension = Array.isArray(new_value)
			? new_value.map(val => new Extension(val))
			: [new Extension(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			text: this.__text && this.__text.toJSON(),
			contained: this.__contained,
			extension: this.__extension && this.__extension.map(v => v.toJSON()),
			modifierExtension: this.__modifierExtension && this.__modifierExtension.map(v => v.toJSON()),
		});
	}
}

module.exports = DomainResource;
