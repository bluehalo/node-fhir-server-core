/**
 * @name exports
 * @summary ClaimResponseError Class
 */
module.exports = class ClaimResponseError {
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

		Object.defineProperty(this, '_itemSequence', {
			enumerable: true,
			get: () => this.__data._itemSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._itemSequence = new Element(value);
			},
		});

		Object.defineProperty(this, 'itemSequence', {
			enumerable: true,
			get: () => this.__data.itemSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.itemSequence = value;
			},
		});

		Object.defineProperty(this, '_detailSequence', {
			enumerable: true,
			get: () => this.__data._detailSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._detailSequence = new Element(value);
			},
		});

		Object.defineProperty(this, 'detailSequence', {
			enumerable: true,
			get: () => this.__data.detailSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.detailSequence = value;
			},
		});

		Object.defineProperty(this, '_subDetailSequence', {
			enumerable: true,
			get: () => this.__data._subDetailSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._subDetailSequence = new Element(value);
			},
		});

		Object.defineProperty(this, 'subDetailSequence', {
			enumerable: true,
			get: () => this.__data.subDetailSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.subDetailSequence = value;
			},
		});

		Object.defineProperty(this, 'code', {
			enumerable: true,
			get: () => this.__data.code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.code = new CodeableConcept(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ClaimResponseError',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ClaimResponseError';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_itemSequence: this._itemSequence && this._itemSequence.toJSON(),
			itemSequence: this.itemSequence,
			_detailSequence: this._detailSequence && this._detailSequence.toJSON(),
			detailSequence: this.detailSequence,
			_subDetailSequence: this._subDetailSequence && this._subDetailSequence.toJSON(),
			subDetailSequence: this.subDetailSequence,
			code: this.code && this.code.toJSON(),
		};
	}
};
