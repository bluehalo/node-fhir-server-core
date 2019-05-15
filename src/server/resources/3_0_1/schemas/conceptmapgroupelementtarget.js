/**
 * @name exports
 * @summary ConceptMapGroupElementTarget Class
 */
module.exports = class ConceptMapGroupElementTarget {
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

		Object.defineProperty(this, '_equivalence', {
			enumerable: true,
			get: () => this.__data._equivalence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._equivalence = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/concept-map-equivalence
		Object.defineProperty(this, 'equivalence', {
			enumerable: true,
			get: () => this.__data.equivalence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.equivalence = value;
			},
		});

		Object.defineProperty(this, '_comment', {
			enumerable: true,
			get: () => this.__data._comment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._comment = new Element(value);
			},
		});

		Object.defineProperty(this, 'comment', {
			enumerable: true,
			get: () => this.__data.comment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.comment = value;
			},
		});

		Object.defineProperty(this, 'dependsOn', {
			enumerable: true,
			get: () => this.__data.dependsOn,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConceptMapGroupElementTargetDependsOn = require('./conceptmapgroupelementtargetdependson.js');
				this.__data.dependsOn = Array.isArray(value)
					? value.map(v => new ConceptMapGroupElementTargetDependsOn(v))
					: [new ConceptMapGroupElementTargetDependsOn(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ConceptMapGroupElementTarget',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ConceptMapGroupElementTarget';
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
			_equivalence: this._equivalence && this._equivalence.toJSON(),
			equivalence: this.equivalence,
			_comment: this._comment && this._comment.toJSON(),
			comment: this.comment,
			dependsOn: this.dependsOn && this.dependsOn.map(v => v.toJSON()),
		};
	}
};
