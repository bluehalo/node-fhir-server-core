/**
 * @name exports
 * @summary SubstancePolymerRepeatRepeatUnit Class
 */
module.exports = class SubstancePolymerRepeatRepeatUnit {
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

		Object.defineProperty(this, 'orientationOfPolymerisation', {
			enumerable: true,
			get: () => this.__data.orientationOfPolymerisation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.orientationOfPolymerisation = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_repeatUnit', {
			enumerable: true,
			get: () => this.__data._repeatUnit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._repeatUnit = new Element(value);
			},
		});

		Object.defineProperty(this, 'repeatUnit', {
			enumerable: true,
			get: () => this.__data.repeatUnit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.repeatUnit = value;
			},
		});

		Object.defineProperty(this, 'amount', {
			enumerable: true,
			get: () => this.__data.amount,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceAmount = require('./substanceamount.js');
				this.__data.amount = new SubstanceAmount(value);
			},
		});

		Object.defineProperty(this, 'degreeOfPolymerisation', {
			enumerable: true,
			get: () => this.__data.degreeOfPolymerisation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation = require('./substancepolymerrepeatrepeatunitdegreeofpolymerisation.js');
				this.__data.degreeOfPolymerisation = Array.isArray(value)
					? value.map(v => new SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation(v))
					: [new SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation(value)];
			},
		});

		Object.defineProperty(this, 'structuralRepresentation', {
			enumerable: true,
			get: () => this.__data.structuralRepresentation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstancePolymerRepeatRepeatUnitStructuralRepresentation = require('./substancepolymerrepeatrepeatunitstructuralrepresentation.js');
				this.__data.structuralRepresentation = Array.isArray(value)
					? value.map(v => new SubstancePolymerRepeatRepeatUnitStructuralRepresentation(v))
					: [new SubstancePolymerRepeatRepeatUnitStructuralRepresentation(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstancePolymerRepeatRepeatUnit',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstancePolymerRepeatRepeatUnit';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			orientationOfPolymerisation: this.orientationOfPolymerisation && this.orientationOfPolymerisation.toJSON(),
			_repeatUnit: this._repeatUnit && this._repeatUnit.toJSON(),
			repeatUnit: this.repeatUnit,
			amount: this.amount && this.amount.toJSON(),
			degreeOfPolymerisation: this.degreeOfPolymerisation && this.degreeOfPolymerisation.map(v => v.toJSON()),
			structuralRepresentation: this.structuralRepresentation && this.structuralRepresentation.map(v => v.toJSON()),
		};
	}
};
