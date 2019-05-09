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

		Object.defineProperty(this, '_sequenceLinkId', {
			enumerable: true,
			get: () => this.__data._sequenceLinkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sequenceLinkId = new Element(value);
			},
		});

		Object.defineProperty(this, 'sequenceLinkId', {
			enumerable: true,
			get: () => this.__data.sequenceLinkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sequenceLinkId = value;
			},
		});

		Object.defineProperty(this, '_detailSequenceLinkId', {
			enumerable: true,
			get: () => this.__data._detailSequenceLinkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._detailSequenceLinkId = new Element(value);
			},
		});

		Object.defineProperty(this, 'detailSequenceLinkId', {
			enumerable: true,
			get: () => this.__data.detailSequenceLinkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.detailSequenceLinkId = value;
			},
		});

		Object.defineProperty(this, '_subdetailSequenceLinkId', {
			enumerable: true,
			get: () => this.__data._subdetailSequenceLinkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._subdetailSequenceLinkId = new Element(value);
			},
		});

		Object.defineProperty(this, 'subdetailSequenceLinkId', {
			enumerable: true,
			get: () => this.__data.subdetailSequenceLinkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.subdetailSequenceLinkId = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/adjudication-error
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
			_sequenceLinkId: this._sequenceLinkId && this._sequenceLinkId.toJSON(),
			sequenceLinkId: this.sequenceLinkId,
			_detailSequenceLinkId: this._detailSequenceLinkId && this._detailSequenceLinkId.toJSON(),
			detailSequenceLinkId: this.detailSequenceLinkId,
			_subdetailSequenceLinkId: this._subdetailSequenceLinkId && this._subdetailSequenceLinkId.toJSON(),
			subdetailSequenceLinkId: this.subdetailSequenceLinkId,
			code: this.code && this.code.toJSON(),
		};
	}
};
