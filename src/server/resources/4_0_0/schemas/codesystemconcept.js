/**
 * @name exports
 * @summary CodeSystemConcept Class
 */
module.exports = class CodeSystemConcept {
	constructor(opts) {
		// Create an object to store all props
		Object.defineProperty(this, '__data', { value: {} });

		// Define getters and setters as enumerable

		Object.defineProperty(this, '_id', {
			enumerable: true,
			get: () => this.__data._id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._id = new Element(value);
			},
		});

		Object.defineProperty(this, 'id', {
			enumerable: true,
			get: () => this.__data.id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.id = value;
			},
		});

		Object.defineProperty(this, 'extension', {
			enumerable: true,
			get: () => this.__data.extension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.extension = Array.isArray(value) ? value.map(v => new Extension(v)) : [new Extension(value)];
			},
		});

		Object.defineProperty(this, 'modifierExtension', {
			enumerable: true,
			get: () => this.__data.modifierExtension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.modifierExtension = Array.isArray(value)
					? value.map(v => new Extension(v))
					: [new Extension(value)];
			},
		});

		Object.defineProperty(this, '_code', {
			enumerable: true,
			get: () => this.__data._code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._code = new Element(value);
			},
		});

		Object.defineProperty(this, 'code', {
			enumerable: true,
			get: () => this.__data.code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.code = value;
			},
		});

		Object.defineProperty(this, '_display', {
			enumerable: true,
			get: () => this.__data._display,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._display = new Element(value);
			},
		});

		Object.defineProperty(this, 'display', {
			enumerable: true,
			get: () => this.__data.display,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.display = value;
			},
		});

		Object.defineProperty(this, '_definition', {
			enumerable: true,
			get: () => this.__data._definition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._definition = new Element(value);
			},
		});

		Object.defineProperty(this, 'definition', {
			enumerable: true,
			get: () => this.__data.definition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.definition = value;
			},
		});

		Object.defineProperty(this, 'designation', {
			enumerable: true,
			get: () => this.__data.designation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeSystemConceptDesignation = require('./codesystemconceptdesignation.js');
				this.__data.designation = Array.isArray(value)
					? value.map(v => new CodeSystemConceptDesignation(v))
					: [new CodeSystemConceptDesignation(value)];
			},
		});

		Object.defineProperty(this, 'property', {
			enumerable: true,
			get: () => this.__data.property,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeSystemConceptProperty = require('./codesystemconceptproperty.js');
				this.__data.property = Array.isArray(value)
					? value.map(v => new CodeSystemConceptProperty(v))
					: [new CodeSystemConceptProperty(value)];
			},
		});

		Object.defineProperty(this, 'concept', {
			enumerable: true,
			get: () => this.__data.concept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeSystemConcept = require('./codesystemconcept.js');
				this.__data.concept = Array.isArray(value)
					? value.map(v => new CodeSystemConcept(v))
					: [new CodeSystemConcept(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'CodeSystemConcept',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'CodeSystemConcept';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_code: this._code && this._code.toJSON(),
			code: this.code,
			_display: this._display && this._display.toJSON(),
			display: this.display,
			_definition: this._definition && this._definition.toJSON(),
			definition: this.definition,
			designation: this.designation && this.designation.map(v => v.toJSON()),
			property: this.property && this.property.map(v => v.toJSON()),
			concept: this.concept && this.concept.map(v => v.toJSON()),
		};
	}
};
