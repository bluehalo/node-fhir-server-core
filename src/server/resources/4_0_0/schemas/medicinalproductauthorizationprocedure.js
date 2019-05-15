/**
 * @name exports
 * @summary MedicinalProductAuthorizationProcedure Class
 */
module.exports = class MedicinalProductAuthorizationProcedure {
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

		Object.defineProperty(this, 'identifier', {
			enumerable: true,
			get: () => this.__data.identifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.identifier = new Identifier(value);
			},
		});

		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.type = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'datePeriod', {
			enumerable: true,
			get: () => this.__data.datePeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.datePeriod = new Period(value);
			},
		});

		Object.defineProperty(this, '_dateDateTime', {
			enumerable: true,
			get: () => this.__data._dateDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._dateDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'dateDateTime', {
			enumerable: true,
			get: () => this.__data.dateDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.dateDateTime = value;
			},
		});

		Object.defineProperty(this, 'application', {
			enumerable: true,
			get: () => this.__data.application,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicinalProductAuthorizationProcedure = require('./medicinalproductauthorizationprocedure.js');
				this.__data.application = Array.isArray(value)
					? value.map(v => new MedicinalProductAuthorizationProcedure(v))
					: [new MedicinalProductAuthorizationProcedure(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicinalProductAuthorizationProcedure',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicinalProductAuthorizationProcedure';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			identifier: this.identifier && this.identifier.toJSON(),
			type: this.type && this.type.toJSON(),
			datePeriod: this.datePeriod && this.datePeriod.toJSON(),
			_dateDateTime: this._dateDateTime && this._dateDateTime.toJSON(),
			dateDateTime: this.dateDateTime,
			application: this.application && this.application.map(v => v.toJSON()),
		};
	}
};
