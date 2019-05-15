/**
 * @name exports
 * @summary ValueSetCompose Class
 */
module.exports = class ValueSetCompose {
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

		Object.defineProperty(this, '_import', {
			enumerable: true,
			get: () => this.__data._import,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._import = new Element(value);
			},
		});

		Object.defineProperty(this, 'import', {
			enumerable: true,
			get: () => this.__data.import,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.import = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'include', {
			enumerable: true,
			get: () => this.__data.include,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ValueSetComposeInclude = require('./valuesetcomposeinclude.js');
				this.__data.include = Array.isArray(value)
					? value.map(v => new ValueSetComposeInclude(v))
					: [new ValueSetComposeInclude(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ValueSetCompose',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ValueSetCompose';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_import: this._import && this._import.toJSON(),
			import: this.import,
			include: this.include && this.include.map(v => v.toJSON()),
		};
	}
};
