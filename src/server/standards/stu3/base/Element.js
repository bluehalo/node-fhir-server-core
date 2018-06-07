class Element {

	constructor ( opts ) {
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Element';
	}

	// unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
	get id () {
		return this._id;
	}

	set id ( new_value ) {
		this._id = new_value;
	}

	// May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
	get extension () {
		return this._extension;
	}

	set extension ( new_value ) {
		const Extension = require('./Extension');
		this._extension = Array.isArray(new_value) ? new_value.map(val => new Extension(val)) : [new Extension(new_value)];
	}

	toJSON () {
		return {
			id: this._id,
			extension: this._extension
		};
	}

}

module.exports = Element;
