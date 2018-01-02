'use strict';

const path = require('path');
const Meta = require(path.resolve('./src/server/resources/types/Metadata'));
const Code = require(path.resolve('./src/server/resources/types/Code'));


class Resource {
	constructor(id) {
		this._id = id;
	}

	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

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
		console.log('setting language');
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

