const Element = require('./Element');

class BackboneElement extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'BackboneElement';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'BackboneElement';
	}

	// May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
	get modifierExtension () {
		return this._modifierExtension;
	}

	set modifierExtension ( new_value ) {
		const Extension = require('./Extension');
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._modifierExtension = Array.isArray(new_value) ? new_value.map(val => new Extension(val)) : [new Extension(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			modifierExtension: this.modifierExtension.map(v => v.toJSON())
		});
	}

}

module.exports = BackboneElement;
