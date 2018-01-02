const path = require('path');
const Resource = require(path.resolve('./src/server/resources/types/Resource'));
const Extension = require(path.resolve('./src/server/resources/types/Extension'));


class DomainResource extends Resource {
	constructor() {
		super();
	}

	// text	I	0..1	Narrative	Text summary of the resource, for human interpretation
	set text(text) {
		this._text = text;
	}

	get text() {
		return this._text;
	}

	// contained		0..*	Resource	Contained, inline Resources
	set contained(contained) {
		this._contained = contained;
	}

	get contained() {
		return this._contained;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		this._extension = new Extension(extension);
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!	0..*	Extension
	set modifierExtension(modifierExtension) {
		this._modifierExtension = new Extension(modifierExtension);
	}

	get modifierExtension() {
		return this._modifierExtension;
	}

	toJSON() {
		const toSerialize = {
			text: this._text,
			contained: this._contained,
			extension: this._extension,
			modifierExtension: this._modifierExtension
		};

		return Object.assign(toSerialize, super.toJSON());
	}
}

module.exports = DomainResource;
