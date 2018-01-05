const Meta = require('./Metadata');
const Code = require('./Code');

class Resource {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// Σ	0..1	id	Logical id of this artifact
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// Σ	0..1	Meta	Metadata about the resource
	get meta() {
		return this._meta;
	}

	set meta(meta) {
		this._meta = new Meta(meta);
	}

	// implicitRules	?! Σ	0..1	uri	A set of rules under which this content was created
	set implicitRules(implicitRules) {
		this._implicitRules = implicitRules;
	}

	get implicitRules() {
		return this._implicitRules;
	}

	// language		0..1	code
	set language(language) {
		this._language = new Code(language);
	}

	get language() {
		return this._language;
	}

	toJSON() {
		return {
			id: this._id,
			meta: this._meta,
			implicitRules: this._implicitRules,
			language: this._language
		};
	}
}

module.exports = Resource;

