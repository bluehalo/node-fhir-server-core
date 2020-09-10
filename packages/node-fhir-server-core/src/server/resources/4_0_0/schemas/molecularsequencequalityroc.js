/**
 * @name exports
 * @summary MolecularSequenceQualityRoc Class
 */
module.exports = class MolecularSequenceQualityRoc {
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

		Object.defineProperty(this, '_score', {
			enumerable: true,
			get: () => this.__data._score,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._score = new Element(value);
			},
		});

		Object.defineProperty(this, 'score', {
			enumerable: true,
			get: () => this.__data.score,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.score = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_numTP', {
			enumerable: true,
			get: () => this.__data._numTP,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._numTP = new Element(value);
			},
		});

		Object.defineProperty(this, 'numTP', {
			enumerable: true,
			get: () => this.__data.numTP,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.numTP = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_numFP', {
			enumerable: true,
			get: () => this.__data._numFP,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._numFP = new Element(value);
			},
		});

		Object.defineProperty(this, 'numFP', {
			enumerable: true,
			get: () => this.__data.numFP,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.numFP = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_numFN', {
			enumerable: true,
			get: () => this.__data._numFN,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._numFN = new Element(value);
			},
		});

		Object.defineProperty(this, 'numFN', {
			enumerable: true,
			get: () => this.__data.numFN,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.numFN = Array.isArray(value) ? value.map(v => v) : [value];
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

				this.__data.precision = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_sensitivity', {
			enumerable: true,
			get: () => this.__data._sensitivity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sensitivity = new Element(value);
			},
		});

		Object.defineProperty(this, 'sensitivity', {
			enumerable: true,
			get: () => this.__data.sensitivity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sensitivity = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_fMeasure', {
			enumerable: true,
			get: () => this.__data._fMeasure,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fMeasure = new Element(value);
			},
		});

		Object.defineProperty(this, 'fMeasure', {
			enumerable: true,
			get: () => this.__data.fMeasure,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fMeasure = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MolecularSequenceQualityRoc',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MolecularSequenceQualityRoc';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_score: this._score && this._score.toJSON(),
			score: this.score,
			_numTP: this._numTP && this._numTP.toJSON(),
			numTP: this.numTP,
			_numFP: this._numFP && this._numFP.toJSON(),
			numFP: this.numFP,
			_numFN: this._numFN && this._numFN.toJSON(),
			numFN: this.numFN,
			_precision: this._precision && this._precision.toJSON(),
			precision: this.precision,
			_sensitivity: this._sensitivity && this._sensitivity.toJSON(),
			sensitivity: this.sensitivity,
			_fMeasure: this._fMeasure && this._fMeasure.toJSON(),
			fMeasure: this.fMeasure,
		};
	}
};
