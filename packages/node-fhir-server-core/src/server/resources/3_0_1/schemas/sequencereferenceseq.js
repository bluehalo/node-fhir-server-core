/**
 * @name exports
 * @summary SequenceReferenceSeq Class
 */
module.exports = class SequenceReferenceSeq {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/chromosome-human
		Object.defineProperty(this, 'chromosome', {
			enumerable: true,
			get: () => this.__data.chromosome,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.chromosome = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_genomeBuild', {
			enumerable: true,
			get: () => this.__data._genomeBuild,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._genomeBuild = new Element(value);
			},
		});

		Object.defineProperty(this, 'genomeBuild', {
			enumerable: true,
			get: () => this.__data.genomeBuild,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.genomeBuild = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/sequence-referenceSeq
		Object.defineProperty(this, 'referenceSeqId', {
			enumerable: true,
			get: () => this.__data.referenceSeqId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.referenceSeqId = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'referenceSeqPointer', {
			enumerable: true,
			get: () => this.__data.referenceSeqPointer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.referenceSeqPointer = new Reference(value);
			},
		});

		Object.defineProperty(this, '_referenceSeqString', {
			enumerable: true,
			get: () => this.__data._referenceSeqString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._referenceSeqString = new Element(value);
			},
		});

		Object.defineProperty(this, 'referenceSeqString', {
			enumerable: true,
			get: () => this.__data.referenceSeqString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.referenceSeqString = value;
			},
		});

		Object.defineProperty(this, '_strand', {
			enumerable: true,
			get: () => this.__data._strand,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._strand = new Element(value);
			},
		});

		Object.defineProperty(this, 'strand', {
			enumerable: true,
			get: () => this.__data.strand,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.strand = value;
			},
		});

		Object.defineProperty(this, '_windowStart', {
			enumerable: true,
			get: () => this.__data._windowStart,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._windowStart = new Element(value);
			},
		});

		Object.defineProperty(this, 'windowStart', {
			enumerable: true,
			get: () => this.__data.windowStart,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.windowStart = value;
			},
		});

		Object.defineProperty(this, '_windowEnd', {
			enumerable: true,
			get: () => this.__data._windowEnd,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._windowEnd = new Element(value);
			},
		});

		Object.defineProperty(this, 'windowEnd', {
			enumerable: true,
			get: () => this.__data.windowEnd,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.windowEnd = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SequenceReferenceSeq',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SequenceReferenceSeq';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			chromosome: this.chromosome && this.chromosome.toJSON(),
			_genomeBuild: this._genomeBuild && this._genomeBuild.toJSON(),
			genomeBuild: this.genomeBuild,
			referenceSeqId: this.referenceSeqId && this.referenceSeqId.toJSON(),
			referenceSeqPointer: this.referenceSeqPointer && this.referenceSeqPointer.toJSON(),
			_referenceSeqString: this._referenceSeqString && this._referenceSeqString.toJSON(),
			referenceSeqString: this.referenceSeqString,
			_strand: this._strand && this._strand.toJSON(),
			strand: this.strand,
			_windowStart: this._windowStart && this._windowStart.toJSON(),
			windowStart: this.windowStart,
			_windowEnd: this._windowEnd && this._windowEnd.toJSON(),
			windowEnd: this.windowEnd,
		};
	}
};
