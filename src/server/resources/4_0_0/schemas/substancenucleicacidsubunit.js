/**
 * @name exports
 * @summary SubstanceNucleicAcidSubunit Class
 */
module.exports = class SubstanceNucleicAcidSubunit {
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

		Object.defineProperty(this, '_subunit', {
			enumerable: true,
			get: () => this.__data._subunit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._subunit = new Element(value);
			},
		});

		Object.defineProperty(this, 'subunit', {
			enumerable: true,
			get: () => this.__data.subunit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.subunit = value;
			},
		});

		Object.defineProperty(this, '_sequence', {
			enumerable: true,
			get: () => this.__data._sequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sequence = new Element(value);
			},
		});

		Object.defineProperty(this, 'sequence', {
			enumerable: true,
			get: () => this.__data.sequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sequence = value;
			},
		});

		Object.defineProperty(this, '_length', {
			enumerable: true,
			get: () => this.__data._length,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._length = new Element(value);
			},
		});

		Object.defineProperty(this, 'length', {
			enumerable: true,
			get: () => this.__data.length,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.length = value;
			},
		});

		Object.defineProperty(this, 'sequenceAttachment', {
			enumerable: true,
			get: () => this.__data.sequenceAttachment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Attachment = require('./attachment.js');
				this.__data.sequenceAttachment = new Attachment(value);
			},
		});

		Object.defineProperty(this, 'fivePrime', {
			enumerable: true,
			get: () => this.__data.fivePrime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.fivePrime = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'threePrime', {
			enumerable: true,
			get: () => this.__data.threePrime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.threePrime = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'linkage', {
			enumerable: true,
			get: () => this.__data.linkage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceNucleicAcidSubunitLinkage = require('./substancenucleicacidsubunitlinkage.js');
				this.__data.linkage = Array.isArray(value)
					? value.map(v => new SubstanceNucleicAcidSubunitLinkage(v))
					: [new SubstanceNucleicAcidSubunitLinkage(value)];
			},
		});

		Object.defineProperty(this, 'sugar', {
			enumerable: true,
			get: () => this.__data.sugar,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceNucleicAcidSubunitSugar = require('./substancenucleicacidsubunitsugar.js');
				this.__data.sugar = Array.isArray(value)
					? value.map(v => new SubstanceNucleicAcidSubunitSugar(v))
					: [new SubstanceNucleicAcidSubunitSugar(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstanceNucleicAcidSubunit',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstanceNucleicAcidSubunit';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_subunit: this._subunit && this._subunit.toJSON(),
			subunit: this.subunit,
			_sequence: this._sequence && this._sequence.toJSON(),
			sequence: this.sequence,
			_length: this._length && this._length.toJSON(),
			length: this.length,
			sequenceAttachment: this.sequenceAttachment && this.sequenceAttachment.toJSON(),
			fivePrime: this.fivePrime && this.fivePrime.toJSON(),
			threePrime: this.threePrime && this.threePrime.toJSON(),
			linkage: this.linkage && this.linkage.map(v => v.toJSON()),
			sugar: this.sugar && this.sugar.map(v => v.toJSON()),
		};
	}
};
