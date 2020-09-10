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

		Object.defineProperty(this, 'value', {
			enumerable: true,
			get: () => this.__data.value,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.value = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'component', {
			enumerable: true,
			get: () => this.__data.component,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MeasureReportGroupStratifierStratumComponent = require('./measurereportgroupstratifierstratumcomponent.js');
				this.__data.component = Array.isArray(value)
					? value.map(v => new MeasureReportGroupStratifierStratumComponent(v))
					: [new MeasureReportGroupStratifierStratumComponent(value)];
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

		Object.defineProperty(this, 'measureScore', {
			enumerable: true,
			get: () => this.__data.measureScore,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.measureScore = new Quantity(value);
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
			value: this.value && this.value.toJSON(),
			component: this.component && this.component.map(v => v.toJSON()),
			population: this.population && this.population.map(v => v.toJSON()),
			measureScore: this.measureScore && this.measureScore.toJSON(),
		};
	}
};
