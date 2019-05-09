/**
 * @name exports
 * @summary MedicationPackage Class
 */
module.exports = class MedicationPackage {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-package-form
		Object.defineProperty(this, 'container', {
			enumerable: true,
			get: () => this.__data.container,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.container = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'content', {
			enumerable: true,
			get: () => this.__data.content,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationPackageContent = require('./medicationpackagecontent.js');
				this.__data.content = Array.isArray(value)
					? value.map(v => new MedicationPackageContent(v))
					: [new MedicationPackageContent(value)];
			},
		});

		Object.defineProperty(this, 'batch', {
			enumerable: true,
			get: () => this.__data.batch,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationPackageBatch = require('./medicationpackagebatch.js');
				this.__data.batch = Array.isArray(value)
					? value.map(v => new MedicationPackageBatch(v))
					: [new MedicationPackageBatch(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicationPackage',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicationPackage';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			container: this.container && this.container.toJSON(),
			content: this.content && this.content.map(v => v.toJSON()),
			batch: this.batch && this.batch.map(v => v.toJSON()),
		};
	}
};
