/**
 * @name exports
 * @summary SequenceQuality Class
 */
module.exports = class SequenceQuality {
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

		Object.defineProperty(this, '_type', {
			enumerable: true,
			get: () => this.__data._type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._type = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/quality-type
		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.type = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/sequence-quality-standardSequence
		Object.defineProperty(this, 'standardSequence', {
			enumerable: true,
			get: () => this.__data.standardSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.standardSequence = new CodeableConcept(value);
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

		Object.defineProperty(this, 'score', {
			enumerable: true,
			get: () => this.__data.score,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.score = new Quantity(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/sequence-quality-method
		Object.defineProperty(this, 'method', {
			enumerable: true,
			get: () => this.__data.method,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.method = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_truthTP', {
			enumerable: true,
			get: () => this.__data._truthTP,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._truthTP = new Element(value);
			},
		});

		Object.defineProperty(this, 'truthTP', {
			enumerable: true,
			get: () => this.__data.truthTP,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.truthTP = value;
			},
		});

		Object.defineProperty(this, '_queryTP', {
			enumerable: true,
			get: () => this.__data._queryTP,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._queryTP = new Element(value);
			},
		});

		Object.defineProperty(this, 'queryTP', {
			enumerable: true,
			get: () => this.__data.queryTP,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.queryTP = value;
			},
		});

		Object.defineProperty(this, '_truthFN', {
			enumerable: true,
			get: () => this.__data._truthFN,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._truthFN = new Element(value);
			},
		});

		Object.defineProperty(this, 'truthFN', {
			enumerable: true,
			get: () => this.__data.truthFN,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.truthFN = value;
			},
		});

		Object.defineProperty(this, '_queryFP', {
			enumerable: true,
			get: () => this.__data._queryFP,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._queryFP = new Element(value);
			},
		});

		Object.defineProperty(this, 'queryFP', {
			enumerable: true,
			get: () => this.__data.queryFP,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.queryFP = value;
			},
		});

		Object.defineProperty(this, '_gtFP', {
			enumerable: true,
			get: () => this.__data._gtFP,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._gtFP = new Element(value);
			},
		});

		Object.defineProperty(this, 'gtFP', {
			enumerable: true,
			get: () => this.__data.gtFP,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.gtFP = value;
			},
		});

		Object.defineProperty(this, '_precision', {
			enumerable: true,
			get: () => this.__data._precision,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._precision = new Element(value);
			},
		});

		Object.defineProperty(this, 'precision', {
			enumerable: true,
			get: () => this.__data.precision,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.precision = value;
			},
		});

		Object.defineProperty(this, '_recall', {
			enumerable: true,
			get: () => this.__data._recall,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._recall = new Element(value);
			},
		});

		Object.defineProperty(this, 'recall', {
			enumerable: true,
			get: () => this.__data.recall,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.recall = value;
			},
		});

		Object.defineProperty(this, '_fScore', {
			enumerable: true,
			get: () => this.__data._fScore,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fScore = new Element(value);
			},
		});

		Object.defineProperty(this, 'fScore', {
			enumerable: true,
			get: () => this.__data.fScore,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fScore = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SequenceQuality',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SequenceQuality';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_type: this._type && this._type.toJSON(),
			type: this.type,
			standardSequence: this.standardSequence && this.standardSequence.toJSON(),
			_start: this._start && this._start.toJSON(),
			start: this.start,
			_end: this._end && this._end.toJSON(),
			end: this.end,
			score: this.score && this.score.toJSON(),
			method: this.method && this.method.toJSON(),
			_truthTP: this._truthTP && this._truthTP.toJSON(),
			truthTP: this.truthTP,
			_queryTP: this._queryTP && this._queryTP.toJSON(),
			queryTP: this.queryTP,
			_truthFN: this._truthFN && this._truthFN.toJSON(),
			truthFN: this.truthFN,
			_queryFP: this._queryFP && this._queryFP.toJSON(),
			queryFP: this.queryFP,
			_gtFP: this._gtFP && this._gtFP.toJSON(),
			gtFP: this.gtFP,
			_precision: this._precision && this._precision.toJSON(),
			precision: this.precision,
			_recall: this._recall && this._recall.toJSON(),
			recall: this.recall,
			_fScore: this._fScore && this._fScore.toJSON(),
			fScore: this.fScore,
		};
	}
};
