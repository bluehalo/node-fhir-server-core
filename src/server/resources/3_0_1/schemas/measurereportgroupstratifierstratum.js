/**
 * @name exports
 * @summary MeasureReportGroupStratifierStratum Class
 */
module.exports = class MeasureReportGroupStratifierStratum {
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

		Object.defineProperty(this, '_value', {
			enumerable: true,
			get: () => this.__data._value,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._value = new Element(value);
			},
		});

		Object.defineProperty(this, 'value', {
			enumerable: true,
			get: () => this.__data.value,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.value = value;
			},
		});

		Object.defineProperty(this, 'population', {
			enumerable: true,
			get: () => this.__data.population,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MeasureReportGroupStratifierStratumPopulation = require('./measurereportgroupstratifierstratumpopulation.js');
				this.__data.population = Array.isArray(value)
					? value.map(v => new MeasureReportGroupStratifierStratumPopulation(v))
					: [new MeasureReportGroupStratifierStratumPopulation(value)];
			},
		});

		Object.defineProperty(this, '_measureScore', {
			enumerable: true,
			get: () => this.__data._measureScore,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._measureScore = new Element(value);
			},
		});

		Object.defineProperty(this, 'measureScore', {
			enumerable: true,
			get: () => this.__data.measureScore,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.measureScore = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MeasureReportGroupStratifierStratum',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MeasureReportGroupStratifierStratum';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_value: this._value && this._value.toJSON(),
			value: this.value,
			population: this.population && this.population.map(v => v.toJSON()),
			_measureScore: this._measureScore && this._measureScore.toJSON(),
			measureScore: this.measureScore,
		};
	}
};
