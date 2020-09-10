/**
 * @name exports
 * @summary ConceptMapGroup Class
 */
module.exports = class ConceptMapGroup {
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

		Object.defineProperty(this, '_source', {
			enumerable: true,
			get: () => this.__data._source,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._source = new Element(value);
			},
		});

		Object.defineProperty(this, 'source', {
			enumerable: true,
			get: () => this.__data.source,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.source = value;
			},
		});

		Object.defineProperty(this, '_sourceVersion', {
			enumerable: true,
			get: () => this.__data._sourceVersion,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sourceVersion = new Element(value);
			},
		});

		Object.defineProperty(this, 'sourceVersion', {
			enumerable: true,
			get: () => this.__data.sourceVersion,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sourceVersion = value;
			},
		});

		Object.defineProperty(this, '_target', {
			enumerable: true,
			get: () => this.__data._target,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._target = new Element(value);
			},
		});

		Object.defineProperty(this, 'target', {
			enumerable: true,
			get: () => this.__data.target,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.target = value;
			},
		});

		Object.defineProperty(this, '_targetVersion', {
			enumerable: true,
			get: () => this.__data._targetVersion,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._targetVersion = new Element(value);
			},
		});

		Object.defineProperty(this, 'targetVersion', {
			enumerable: true,
			get: () => this.__data.targetVersion,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.targetVersion = value;
			},
		});

		Object.defineProperty(this, 'element', {
			enumerable: true,
			get: () => this.__data.element,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConceptMapGroupElement = require('./conceptmapgroupelement.js');
				this.__data.element = Array.isArray(value)
					? value.map(v => new ConceptMapGroupElement(v))
					: [new ConceptMapGroupElement(value)];
			},
		});

		Object.defineProperty(this, 'unmapped', {
			enumerable: true,
			get: () => this.__data.unmapped,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConceptMapGroupUnmapped = require('./conceptmapgroupunmapped.js');
				this.__data.unmapped = new ConceptMapGroupUnmapped(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ConceptMapGroup',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ConceptMapGroup';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_source: this._source && this._source.toJSON(),
			source: this.source,
			_sourceVersion: this._sourceVersion && this._sourceVersion.toJSON(),
			sourceVersion: this.sourceVersion,
			_target: this._target && this._target.toJSON(),
			target: this.target,
			_targetVersion: this._targetVersion && this._targetVersion.toJSON(),
			targetVersion: this.targetVersion,
			element: this.element && this.element.map(v => v.toJSON()),
			unmapped: this.unmapped && this.unmapped.toJSON(),
		};
	}
};
