/**
 * @name exports
 * @summary ClaimMissingTeeth Class
 */
module.exports = class ClaimMissingTeeth {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/teeth
		Object.defineProperty(this, 'tooth', {
			enumerable: true,
			get: () => this.__data.tooth,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.tooth = new Coding(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/missing-tooth-reason
		Object.defineProperty(this, 'reason', {
			enumerable: true,
			get: () => this.__data.reason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.reason = new Coding(value);
			},
		});

		Object.defineProperty(this, '_extractionDate', {
			enumerable: true,
			get: () => this.__data._extractionDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._extractionDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'extractionDate', {
			enumerable: true,
			get: () => this.__data.extractionDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.extractionDate = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ClaimMissingTeeth',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ClaimMissingTeeth';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			tooth: this.tooth && this.tooth.toJSON(),
			reason: this.reason && this.reason.toJSON(),
			_extractionDate: this._extractionDate && this._extractionDate.toJSON(),
			extractionDate: this.extractionDate,
		};
	}
};
