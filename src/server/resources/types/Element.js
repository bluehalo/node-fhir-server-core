const Extension = require('./Extension');

class Element {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// id		0..1	id	xml:id (or equivalent in JSON)
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((x) => new Extension(x));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	toJSON() {
		return {
			id: this._id,
			extension: this._extension
		};
	}
}

module.exports = Element;
