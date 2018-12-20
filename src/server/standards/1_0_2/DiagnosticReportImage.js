const BackboneElement = require('./BackboneElement');

class DiagnosticReportImage extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DiagnosticReportImage';
		Object.assign(this, opt);
	}

	// This is a DiagnosticReportImage resource
	static get __resourceType() {
		return 'DiagnosticReportImage';
	}

	// A comment about the image. Typically, this is used to provide an explanation for why the image is included, or to draw the viewer\'s attention to important features.
	get comment() {
		return this.__comment;
	}

	set comment(new_value) {
		this.__comment = new_value;
	}

	// Reference to the image source.
	get link() {
		return this.__link;
	}

	set link(new_value) {
		const Reference = require('./Reference');
		this.__link = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			comment: this.__comment,
			link: this.__link && this.__link.toJSON(),
		});
	}
}

module.exports = DiagnosticReportImage;
