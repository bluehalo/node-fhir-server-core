/**
 * @name exports
 * @summary ElementDefinitionType Class
 */
module.exports = class ElementDefinitionType {
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

		Object.defineProperty(this, '_targetProfile', {
			enumerable: true,
			get: () => this.__data._targetProfile,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._targetProfile = new Element(value);
			},
		});

		Object.defineProperty(this, 'targetProfile', {
			enumerable: true,
			get: () => this.__data.targetProfile,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.targetProfile = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_aggregation', {
			enumerable: true,
			get: () => this.__data._aggregation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._aggregation = new Element(value);
			},
		});

		Object.defineProperty(this, 'aggregation', {
			enumerable: true,
			get: () => this.__data.aggregation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.aggregation = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_versioning', {
			enumerable: true,
			get: () => this.__data._versioning,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._versioning = new Element(value);
			},
		});

		Object.defineProperty(this, 'versioning', {
			enumerable: true,
			get: () => this.__data.versioning,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.versioning = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ElementDefinitionType',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ElementDefinitionType';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			_code: this._code && this._code.toJSON(),
			code: this.code,
			_profile: this._profile && this._profile.toJSON(),
			profile: this.profile,
			_targetProfile: this._targetProfile && this._targetProfile.toJSON(),
			targetProfile: this.targetProfile,
			_aggregation: this._aggregation && this._aggregation.toJSON(),
			aggregation: this.aggregation,
			_versioning: this._versioning && this._versioning.toJSON(),
			versioning: this.versioning,
		};
	}
};
