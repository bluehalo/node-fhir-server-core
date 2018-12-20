const Element = require('./Element');

class BackboneElement extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'BackboneElement';
		Object.assign(this, opt);
	}

	// This is a BackboneElement resource
	static get __resourceType() {
		return 'BackboneElement';
	}

	// May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
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
			modifierExtension: this.__modifierExtension && this.__modifierExtension.map(v => v.toJSON()),
		});
	}
}

module.exports = BackboneElement;
