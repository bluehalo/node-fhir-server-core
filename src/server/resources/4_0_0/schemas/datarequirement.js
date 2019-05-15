/**
 * @name exports
 * @summary DataRequirement Class
 */
module.exports = class DataRequirement {
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

		Object.defineProperty(this, '_type', {
			enumerable: true,
			get: () => this.__data._type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._type = new Element(value);
			},
		});

		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.type = value;
			},
		});

		Object.defineProperty(this, '_profile', {
			enumerable: true,
			get: () => this.__data._profile,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._profile = new Element(value);
			},
		});

		Object.defineProperty(this, 'profile', {
			enumerable: true,
			get: () => this.__data.profile,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.profile = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'subjectCodeableConcept', {
			enumerable: true,
			get: () => this.__data.subjectCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.subjectCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'subjectReference', {
			enumerable: true,
			get: () => this.__data.subjectReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.subjectReference = new Reference(value);
			},
		});

		Object.defineProperty(this, '_mustSupport', {
			enumerable: true,
			get: () => this.__data._mustSupport,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._mustSupport = new Element(value);
			},
		});

		Object.defineProperty(this, 'mustSupport', {
			enumerable: true,
			get: () => this.__data.mustSupport,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.mustSupport = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'codeFilter', {
			enumerable: true,
			get: () => this.__data.codeFilter,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data.codeFilter = Array.isArray(value) ? value.map(v => new Element(v)) : [new Element(value)];
			},
		});

		Object.defineProperty(this, 'dateFilter', {
			enumerable: true,
			get: () => this.__data.dateFilter,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data.dateFilter = Array.isArray(value) ? value.map(v => new Element(v)) : [new Element(value)];
			},
		});

		Object.defineProperty(this, '_limit', {
			enumerable: true,
			get: () => this.__data._limit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._limit = new Element(value);
			},
		});

		Object.defineProperty(this, 'limit', {
			enumerable: true,
			get: () => this.__data.limit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.limit = value;
			},
		});

		Object.defineProperty(this, 'sort', {
			enumerable: true,
			get: () => this.__data.sort,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data.sort = Array.isArray(value) ? value.map(v => new Element(v)) : [new Element(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'DataRequirement',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'DataRequirement';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			_type: this._type && this._type.toJSON(),
			type: this.type,
			_profile: this._profile && this._profile.toJSON(),
			profile: this.profile,
			subjectCodeableConcept: this.subjectCodeableConcept && this.subjectCodeableConcept.toJSON(),
			subjectReference: this.subjectReference && this.subjectReference.toJSON(),
			_mustSupport: this._mustSupport && this._mustSupport.toJSON(),
			mustSupport: this.mustSupport,
			codeFilter: this.codeFilter && this.codeFilter.map(v => v.toJSON()),
			dateFilter: this.dateFilter && this.dateFilter.map(v => v.toJSON()),
			_limit: this._limit && this._limit.toJSON(),
			limit: this.limit,
			sort: this.sort && this.sort.map(v => v.toJSON()),
		};
	}
};
