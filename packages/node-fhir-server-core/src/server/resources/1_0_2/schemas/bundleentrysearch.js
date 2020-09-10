/**
 * @name exports
 * @summary BundleEntrySearch Class
 */
module.exports = class BundleEntrySearch {
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

		Object.defineProperty(this, '_mode', {
			enumerable: true,
			get: () => this.__data._mode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._mode = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/search-entry-mode
		Object.defineProperty(this, 'mode', {
			enumerable: true,
			get: () => this.__data.mode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.mode = value;
			},
		});

		Object.defineProperty(this, '_score', {
			enumerable: true,
			get: () => this.__data._score,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._score = new Element(value);
			},
		});

		Object.defineProperty(this, 'score', {
			enumerable: true,
			get: () => this.__data.score,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.score = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'BundleEntrySearch',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'BundleEntrySearch';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_mode: this._mode && this._mode.toJSON(),
			mode: this.mode,
			_score: this._score && this._score.toJSON(),
			score: this.score,
		};
	}
};
