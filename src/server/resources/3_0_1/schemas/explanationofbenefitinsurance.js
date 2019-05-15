/**
 * @name exports
 * @summary ExplanationOfBenefitInsurance Class
 */
module.exports = class ExplanationOfBenefitInsurance {
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

		Object.defineProperty(this, 'coverage', {
			enumerable: true,
			get: () => this.__data.coverage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.coverage = new Reference(value);
			},
		});

		Object.defineProperty(this, '_preAuthRef', {
			enumerable: true,
			get: () => this.__data._preAuthRef,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._preAuthRef = new Element(value);
			},
		});

		Object.defineProperty(this, 'preAuthRef', {
			enumerable: true,
			get: () => this.__data.preAuthRef,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.preAuthRef = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ExplanationOfBenefitInsurance',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ExplanationOfBenefitInsurance';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			coverage: this.coverage && this.coverage.toJSON(),
			_preAuthRef: this._preAuthRef && this._preAuthRef.toJSON(),
			preAuthRef: this.preAuthRef,
		};
	}
};
