/**
 * @name exports
 * @summary TerminologyCapabilitiesCodeSystem Class
 */
module.exports = class TerminologyCapabilitiesCodeSystem {
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

		Object.defineProperty(this, '_uri', {
			enumerable: true,
			get: () => this.__data._uri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._uri = new Element(value);
			},
		});

		Object.defineProperty(this, 'uri', {
			enumerable: true,
			get: () => this.__data.uri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.uri = value;
			},
		});

		Object.defineProperty(this, 'version', {
			enumerable: true,
			get: () => this.__data.version,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TerminologyCapabilitiesCodeSystemVersion = require('./terminologycapabilitiescodesystemversion.js');
				this.__data.version = Array.isArray(value)
					? value.map(v => new TerminologyCapabilitiesCodeSystemVersion(v))
					: [new TerminologyCapabilitiesCodeSystemVersion(value)];
			},
		});

		Object.defineProperty(this, '_subsumption', {
			enumerable: true,
			get: () => this.__data._subsumption,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._subsumption = new Element(value);
			},
		});

		Object.defineProperty(this, 'subsumption', {
			enumerable: true,
			get: () => this.__data.subsumption,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.subsumption = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'TerminologyCapabilitiesCodeSystem',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'TerminologyCapabilitiesCodeSystem';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_uri: this._uri && this._uri.toJSON(),
			uri: this.uri,
			version: this.version && this.version.map(v => v.toJSON()),
			_subsumption: this._subsumption && this._subsumption.toJSON(),
			subsumption: this.subsumption,
		};
	}
};
