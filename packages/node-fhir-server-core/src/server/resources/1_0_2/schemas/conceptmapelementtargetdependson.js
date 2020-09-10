/**
 * @name exports
 * @summary ConceptMapElementTargetDependsOn Class
 */
module.exports = class ConceptMapElementTargetDependsOn {
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

		Object.defineProperty(this, '_element', {
			enumerable: true,
			get: () => this.__data._element,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._element = new Element(value);
			},
		});

		Object.defineProperty(this, 'element', {
			enumerable: true,
			get: () => this.__data.element,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.element = value;
			},
		});

		Object.defineProperty(this, '_codeSystem', {
			enumerable: true,
			get: () => this.__data._codeSystem,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._codeSystem = new Element(value);
			},
		});

		Object.defineProperty(this, 'codeSystem', {
			enumerable: true,
			get: () => this.__data.codeSystem,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.codeSystem = value;
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

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ConceptMapElementTargetDependsOn',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ConceptMapElementTargetDependsOn';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_element: this._element && this._element.toJSON(),
			element: this.element,
			_codeSystem: this._codeSystem && this._codeSystem.toJSON(),
			codeSystem: this.codeSystem,
			_code: this._code && this._code.toJSON(),
			code: this.code,
		};
	}
};
