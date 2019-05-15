/**
 * @name exports
 * @summary MedicationKnowledge Class
 */
module.exports = class MedicationKnowledge {
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

		Object.defineProperty(this, 'code', {
			enumerable: true,
			get: () => this.__data.code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.code = new CodeableConcept(value);
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

		Object.defineProperty(this, 'manufacturer', {
			enumerable: true,
			get: () => this.__data.manufacturer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.manufacturer = new Reference(value);
			},
		});

		Object.defineProperty(this, 'doseForm', {
			enumerable: true,
			get: () => this.__data.doseForm,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.doseForm = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'amount', {
			enumerable: true,
			get: () => this.__data.amount,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.amount = new Quantity(value);
			},
		});

		Object.defineProperty(this, '_synonym', {
			enumerable: true,
			get: () => this.__data._synonym,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._synonym = new Element(value);
			},
		});

		Object.defineProperty(this, 'synonym', {
			enumerable: true,
			get: () => this.__data.synonym,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.synonym = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'relatedMedicationKnowledge', {
			enumerable: true,
			get: () => this.__data.relatedMedicationKnowledge,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationKnowledgeRelatedMedicationKnowledge = require('./medicationknowledgerelatedmedicationknowledge.js');
				this.__data.relatedMedicationKnowledge = Array.isArray(value)
					? value.map(v => new MedicationKnowledgeRelatedMedicationKnowledge(v))
					: [new MedicationKnowledgeRelatedMedicationKnowledge(value)];
			},
		});

		Object.defineProperty(this, 'associatedMedication', {
			enumerable: true,
			get: () => this.__data.associatedMedication,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.associatedMedication = Array.isArray(value)
					? value.map(v => new Reference(v))
					: [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'productType', {
			enumerable: true,
			get: () => this.__data.productType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.productType = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'monograph', {
			enumerable: true,
			get: () => this.__data.monograph,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationKnowledgeMonograph = require('./medicationknowledgemonograph.js');
				this.__data.monograph = Array.isArray(value)
					? value.map(v => new MedicationKnowledgeMonograph(v))
					: [new MedicationKnowledgeMonograph(value)];
			},
		});

		Object.defineProperty(this, 'ingredient', {
			enumerable: true,
			get: () => this.__data.ingredient,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationKnowledgeIngredient = require('./medicationknowledgeingredient.js');
				this.__data.ingredient = Array.isArray(value)
					? value.map(v => new MedicationKnowledgeIngredient(v))
					: [new MedicationKnowledgeIngredient(value)];
			},
		});

		Object.defineProperty(this, '_preparationInstruction', {
			enumerable: true,
			get: () => this.__data._preparationInstruction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._preparationInstruction = new Element(value);
			},
		});

		Object.defineProperty(this, 'preparationInstruction', {
			enumerable: true,
			get: () => this.__data.preparationInstruction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.preparationInstruction = value;
			},
		});

		Object.defineProperty(this, 'intendedRoute', {
			enumerable: true,
			get: () => this.__data.intendedRoute,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.intendedRoute = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'cost', {
			enumerable: true,
			get: () => this.__data.cost,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationKnowledgeCost = require('./medicationknowledgecost.js');
				this.__data.cost = Array.isArray(value)
					? value.map(v => new MedicationKnowledgeCost(v))
					: [new MedicationKnowledgeCost(value)];
			},
		});

		Object.defineProperty(this, 'monitoringProgram', {
			enumerable: true,
			get: () => this.__data.monitoringProgram,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationKnowledgeMonitoringProgram = require('./medicationknowledgemonitoringprogram.js');
				this.__data.monitoringProgram = Array.isArray(value)
					? value.map(v => new MedicationKnowledgeMonitoringProgram(v))
					: [new MedicationKnowledgeMonitoringProgram(value)];
			},
		});

		Object.defineProperty(this, 'administrationGuidelines', {
			enumerable: true,
			get: () => this.__data.administrationGuidelines,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationKnowledgeAdministrationGuidelines = require('./medicationknowledgeadministrationguidelines.js');
				this.__data.administrationGuidelines = Array.isArray(value)
					? value.map(v => new MedicationKnowledgeAdministrationGuidelines(v))
					: [new MedicationKnowledgeAdministrationGuidelines(value)];
			},
		});

		Object.defineProperty(this, 'medicineClassification', {
			enumerable: true,
			get: () => this.__data.medicineClassification,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationKnowledgeMedicineClassification = require('./medicationknowledgemedicineclassification.js');
				this.__data.medicineClassification = Array.isArray(value)
					? value.map(v => new MedicationKnowledgeMedicineClassification(v))
					: [new MedicationKnowledgeMedicineClassification(value)];
			},
		});

		Object.defineProperty(this, 'packaging', {
			enumerable: true,
			get: () => this.__data.packaging,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationKnowledgePackaging = require('./medicationknowledgepackaging.js');
				this.__data.packaging = new MedicationKnowledgePackaging(value);
			},
		});

		Object.defineProperty(this, 'drugCharacteristic', {
			enumerable: true,
			get: () => this.__data.drugCharacteristic,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationKnowledgeDrugCharacteristic = require('./medicationknowledgedrugcharacteristic.js');
				this.__data.drugCharacteristic = Array.isArray(value)
					? value.map(v => new MedicationKnowledgeDrugCharacteristic(v))
					: [new MedicationKnowledgeDrugCharacteristic(value)];
			},
		});

		Object.defineProperty(this, 'contraindication', {
			enumerable: true,
			get: () => this.__data.contraindication,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.contraindication = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'regulatory', {
			enumerable: true,
			get: () => this.__data.regulatory,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationKnowledgeRegulatory = require('./medicationknowledgeregulatory.js');
				this.__data.regulatory = Array.isArray(value)
					? value.map(v => new MedicationKnowledgeRegulatory(v))
					: [new MedicationKnowledgeRegulatory(value)];
			},
		});

		Object.defineProperty(this, 'kinetics', {
			enumerable: true,
			get: () => this.__data.kinetics,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationKnowledgeKinetics = require('./medicationknowledgekinetics.js');
				this.__data.kinetics = Array.isArray(value)
					? value.map(v => new MedicationKnowledgeKinetics(v))
					: [new MedicationKnowledgeKinetics(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicationKnowledge',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicationKnowledge';
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
			code: this.code && this.code.toJSON(),
			_status: this._status && this._status.toJSON(),
			status: this.status,
			manufacturer: this.manufacturer && this.manufacturer.toJSON(),
			doseForm: this.doseForm && this.doseForm.toJSON(),
			amount: this.amount && this.amount.toJSON(),
			_synonym: this._synonym && this._synonym.toJSON(),
			synonym: this.synonym,
			relatedMedicationKnowledge:
				this.relatedMedicationKnowledge && this.relatedMedicationKnowledge.map(v => v.toJSON()),
			associatedMedication: this.associatedMedication && this.associatedMedication.map(v => v.toJSON()),
			productType: this.productType && this.productType.map(v => v.toJSON()),
			monograph: this.monograph && this.monograph.map(v => v.toJSON()),
			ingredient: this.ingredient && this.ingredient.map(v => v.toJSON()),
			_preparationInstruction: this._preparationInstruction && this._preparationInstruction.toJSON(),
			preparationInstruction: this.preparationInstruction,
			intendedRoute: this.intendedRoute && this.intendedRoute.map(v => v.toJSON()),
			cost: this.cost && this.cost.map(v => v.toJSON()),
			monitoringProgram: this.monitoringProgram && this.monitoringProgram.map(v => v.toJSON()),
			administrationGuidelines: this.administrationGuidelines && this.administrationGuidelines.map(v => v.toJSON()),
			medicineClassification: this.medicineClassification && this.medicineClassification.map(v => v.toJSON()),
			packaging: this.packaging && this.packaging.toJSON(),
			drugCharacteristic: this.drugCharacteristic && this.drugCharacteristic.map(v => v.toJSON()),
			contraindication: this.contraindication && this.contraindication.map(v => v.toJSON()),
			regulatory: this.regulatory && this.regulatory.map(v => v.toJSON()),
			kinetics: this.kinetics && this.kinetics.map(v => v.toJSON()),
		};
	}
};
