/**
 * @name exports
 * @summary SequenceVariant Class
 */
module.exports = class SequenceVariant {
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

		Object.defineProperty(this, '_start', {
			enumerable: true,
			get: () => this.__data._start,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._start = new Element(value);
			},
		});

		Object.defineProperty(this, 'start', {
			enumerable: true,
			get: () => this.__data.start,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.start = value;
			},
		});

		Object.defineProperty(this, '_end', {
			enumerable: true,
			get: () => this.__data._end,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._end = new Element(value);
			},
		});

		Object.defineProperty(this, 'end', {
			enumerable: true,
			get: () => this.__data.end,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.end = value;
			},
		});

		Object.defineProperty(this, '_observedAllele', {
			enumerable: true,
			get: () => this.__data._observedAllele,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._observedAllele = new Element(value);
			},
		});

		Object.defineProperty(this, 'observedAllele', {
			enumerable: true,
			get: () => this.__data.observedAllele,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.observedAllele = value;
			},
		});

		Object.defineProperty(this, '_referenceAllele', {
			enumerable: true,
			get: () => this.__data._referenceAllele,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._referenceAllele = new Element(value);
			},
		});

		Object.defineProperty(this, 'referenceAllele', {
			enumerable: true,
			get: () => this.__data.referenceAllele,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.referenceAllele = value;
			},
		});

		Object.defineProperty(this, '_cigar', {
			enumerable: true,
			get: () => this.__data._cigar,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._cigar = new Element(value);
			},
		});

		Object.defineProperty(this, 'cigar', {
			enumerable: true,
			get: () => this.__data.cigar,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.cigar = value;
			},
		});

		Object.defineProperty(this, 'variantPointer', {
			enumerable: true,
			get: () => this.__data.variantPointer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.variantPointer = new Reference(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SequenceVariant',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SequenceVariant';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_start: this._start && this._start.toJSON(),
			start: this.start,
			_end: this._end && this._end.toJSON(),
			end: this.end,
			_observedAllele: this._observedAllele && this._observedAllele.toJSON(),
			observedAllele: this.observedAllele,
			_referenceAllele: this._referenceAllele && this._referenceAllele.toJSON(),
			referenceAllele: this.referenceAllele,
			_cigar: this._cigar && this._cigar.toJSON(),
			cigar: this.cigar,
			variantPointer: this.variantPointer && this.variantPointer.toJSON(),
		};
	}
};
