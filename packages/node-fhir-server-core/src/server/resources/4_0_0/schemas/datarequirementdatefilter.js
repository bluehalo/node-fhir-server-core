/**
 * @name exports
 * @summary DataRequirementDateFilter Class
 */
module.exports = class DataRequirementDateFilter {
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

		Object.defineProperty(this, '_valueDateTime', {
			enumerable: true,
			get: () => this.__data._valueDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueDateTime', {
			enumerable: true,
			get: () => this.__data.valueDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueDateTime = value;
			},
		});

		Object.defineProperty(this, 'valuePeriod', {
			enumerable: true,
			get: () => this.__data.valuePeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.valuePeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'valueDuration', {
			enumerable: true,
			get: () => this.__data.valueDuration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.valueDuration = new Duration(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'DataRequirementDateFilter',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'DataRequirementDateFilter';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			_path: this._path && this._path.toJSON(),
			path: this.path,
			_searchParam: this._searchParam && this._searchParam.toJSON(),
			searchParam: this.searchParam,
			_valueDateTime: this._valueDateTime && this._valueDateTime.toJSON(),
			valueDateTime: this.valueDateTime,
			valuePeriod: this.valuePeriod && this.valuePeriod.toJSON(),
			valueDuration: this.valueDuration && this.valueDuration.toJSON(),
		};
	}
};
