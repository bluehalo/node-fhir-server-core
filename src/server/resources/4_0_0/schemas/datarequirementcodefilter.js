/**
 * @name exports
 * @summary DataRequirementCodeFilter Class
 */
module.exports = class DataRequirementCodeFilter {
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

		Object.defineProperty(this, '_path', {
			enumerable: true,
			get: () => this.__data._path,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._path = new Element(value);
			},
		});

		Object.defineProperty(this, 'path', {
			enumerable: true,
			get: () => this.__data.path,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.path = value;
			},
		});

		Object.defineProperty(this, '_searchParam', {
			enumerable: true,
			get: () => this.__data._searchParam,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._searchParam = new Element(value);
			},
		});

		Object.defineProperty(this, 'searchParam', {
			enumerable: true,
			get: () => this.__data.searchParam,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.searchParam = value;
			},
		});

		Object.defineProperty(this, '_valueSet', {
			enumerable: true,
			get: () => this.__data._valueSet,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueSet = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueSet', {
			enumerable: true,
			get: () => this.__data.valueSet,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueSet = value;
			},
		});

		Object.defineProperty(this, 'code', {
			enumerable: true,
			get: () => this.__data.code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.code = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'DataRequirementCodeFilter',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'DataRequirementCodeFilter';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			_path: this._path && this._path.toJSON(),
			path: this.path,
			_searchParam: this._searchParam && this._searchParam.toJSON(),
			searchParam: this.searchParam,
			_valueSet: this._valueSet && this._valueSet.toJSON(),
			valueSet: this.valueSet,
			code: this.code && this.code.map(v => v.toJSON()),
		};
	}
};
