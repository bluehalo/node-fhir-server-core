/**
 * @name exports
 * @summary PlanDefinitionGoalTarget Class
 */
module.exports = class PlanDefinitionGoalTarget {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/observation-codes
		Object.defineProperty(this, 'measure', {
			enumerable: true,
			get: () => this.__data.measure,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.measure = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'detailQuantity', {
			enumerable: true,
			get: () => this.__data.detailQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.detailQuantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'detailRange', {
			enumerable: true,
			get: () => this.__data.detailRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.detailRange = new Range(value);
			},
		});

		Object.defineProperty(this, 'detailCodeableConcept', {
			enumerable: true,
			get: () => this.__data.detailCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.detailCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'due', {
			enumerable: true,
			get: () => this.__data.due,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.due = new Duration(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'PlanDefinitionGoalTarget',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'PlanDefinitionGoalTarget';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			measure: this.measure && this.measure.toJSON(),
			detailQuantity: this.detailQuantity && this.detailQuantity.toJSON(),
			detailRange: this.detailRange && this.detailRange.toJSON(),
			detailCodeableConcept: this.detailCodeableConcept && this.detailCodeableConcept.toJSON(),
			due: this.due && this.due.toJSON(),
		};
	}
};
