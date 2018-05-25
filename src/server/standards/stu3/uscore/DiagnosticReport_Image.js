const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class DiagnosticReport_Image extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'DiagnosticReport_Image';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DiagnosticReport_Image';
	}

	// A comment about the image. Typically, this is used to provide an explanation for why the image is included, or to draw the viewer's attention to important features.
	get comment () {
		return this._comment;
	}

	set comment ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._comment = new_value;
	}

	// Reference to the image source.
	get link () {
		return this._link;
	}

	set link ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._link = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			comment: this.comment,
			link: this.link && this.link.toJSON()
		});
	}

}

module.exports = DiagnosticReport_Image;
