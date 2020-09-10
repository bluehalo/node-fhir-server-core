/**
 * @name exports
 * @summary NutritionOrder Class
 */
module.exports = class NutritionOrder {
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

		Object.defineProperty(this, 'meta', {
			enumerable: true,
			get: () => this.__data.meta,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Meta = require('./meta.js');
				this.__data.meta = new Meta(value);
			},
		});

		Object.defineProperty(this, '_implicitRules', {
			enumerable: true,
			get: () => this.__data._implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._implicitRules = new Element(value);
			},
		});

		Object.defineProperty(this, 'implicitRules', {
			enumerable: true,
			get: () => this.__data.implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.implicitRules = value;
			},
		});

		Object.defineProperty(this, '_language', {
			enumerable: true,
			get: () => this.__data._language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._language = new Element(value);
			},
		});

		Object.defineProperty(this, 'language', {
			enumerable: true,
			get: () => this.__data.language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.language = value;
			},
		});

		Object.defineProperty(this, 'text', {
			enumerable: true,
			get: () => this.__data.text,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Narrative = require('./narrative.js');
				this.__data.text = new Narrative(value);
			},
		});

		Object.defineProperty(this, 'contained', {
			enumerable: true,
			get: () => this.__data.contained,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contained = Array.isArray(value) ? value.map(v => v) : [value];
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

		Object.defineProperty(this, 'patient', {
			enumerable: true,
			get: () => this.__data.patient,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.patient = new Reference(value);
			},
		});

		Object.defineProperty(this, 'orderer', {
			enumerable: true,
			get: () => this.__data.orderer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.orderer = new Reference(value);
			},
		});

		Object.defineProperty(this, 'identifier', {
			enumerable: true,
			get: () => this.__data.identifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.identifier = Array.isArray(value) ? value.map(v => new Identifier(v)) : [new Identifier(value)];
			},
		});

		Object.defineProperty(this, 'encounter', {
			enumerable: true,
			get: () => this.__data.encounter,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.encounter = new Reference(value);
			},
		});

		Object.defineProperty(this, '_dateTime', {
			enumerable: true,
			get: () => this.__data._dateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._dateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'dateTime', {
			enumerable: true,
			get: () => this.__data.dateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.dateTime = value;
			},
		});

		Object.defineProperty(this, '_status', {
			enumerable: true,
			get: () => this.__data._status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._status = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/nutrition-order-status
		Object.defineProperty(this, 'status', {
			enumerable: true,
			get: () => this.__data.status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.status = value;
			},
		});

		Object.defineProperty(this, 'allergyIntolerance', {
			enumerable: true,
			get: () => this.__data.allergyIntolerance,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.allergyIntolerance = Array.isArray(value)
					? value.map(v => new Reference(v))
					: [new Reference(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/encounter-diet
		Object.defineProperty(this, 'foodPreferenceModifier', {
			enumerable: true,
			get: () => this.__data.foodPreferenceModifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.foodPreferenceModifier = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/food-type
		Object.defineProperty(this, 'excludeFoodModifier', {
			enumerable: true,
			get: () => this.__data.excludeFoodModifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.excludeFoodModifier = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'oralDiet', {
			enumerable: true,
			get: () => this.__data.oralDiet,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let NutritionOrderOralDiet = require('./nutritionorderoraldiet.js');
				this.__data.oralDiet = new NutritionOrderOralDiet(value);
			},
		});

		Object.defineProperty(this, 'supplement', {
			enumerable: true,
			get: () => this.__data.supplement,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let NutritionOrderSupplement = require('./nutritionordersupplement.js');
				this.__data.supplement = Array.isArray(value)
					? value.map(v => new NutritionOrderSupplement(v))
					: [new NutritionOrderSupplement(value)];
			},
		});

		Object.defineProperty(this, 'enteralFormula', {
			enumerable: true,
			get: () => this.__data.enteralFormula,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let NutritionOrderEnteralFormula = require('./nutritionorderenteralformula.js');
				this.__data.enteralFormula = new NutritionOrderEnteralFormula(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'NutritionOrder',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'NutritionOrder';
	}

	toJSON() {
		return {
			resourceType: this.resourceType,
			id: this.id,
			meta: this.meta && this.meta.toJSON(),
			_implicitRules: this._implicitRules && this._implicitRules.toJSON(),
			implicitRules: this.implicitRules,
			_language: this._language && this._language.toJSON(),
			language: this.language,
			text: this.text && this.text.toJSON(),
			contained: this.contained,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			patient: this.patient && this.patient.toJSON(),
			orderer: this.orderer && this.orderer.toJSON(),
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			encounter: this.encounter && this.encounter.toJSON(),
			_dateTime: this._dateTime && this._dateTime.toJSON(),
			dateTime: this.dateTime,
			_status: this._status && this._status.toJSON(),
			status: this.status,
			allergyIntolerance: this.allergyIntolerance && this.allergyIntolerance.map(v => v.toJSON()),
			foodPreferenceModifier: this.foodPreferenceModifier && this.foodPreferenceModifier.map(v => v.toJSON()),
			excludeFoodModifier: this.excludeFoodModifier && this.excludeFoodModifier.map(v => v.toJSON()),
			oralDiet: this.oralDiet && this.oralDiet.toJSON(),
			supplement: this.supplement && this.supplement.map(v => v.toJSON()),
			enteralFormula: this.enteralFormula && this.enteralFormula.toJSON(),
		};
	}
};
