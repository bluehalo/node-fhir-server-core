/**
 * @name exports
 * @summary Immunization Class
 */
module.exports = class Immunization {
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

		Object.defineProperty(this, 'statusReason', {
			enumerable: true,
			get: () => this.__data.statusReason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.statusReason = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'vaccineCode', {
			enumerable: true,
			get: () => this.__data.vaccineCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.vaccineCode = new CodeableConcept(value);
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

		Object.defineProperty(this, '_occurrenceDateTime', {
			enumerable: true,
			get: () => this.__data._occurrenceDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._occurrenceDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'occurrenceDateTime', {
			enumerable: true,
			get: () => this.__data.occurrenceDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.occurrenceDateTime = value;
			},
		});

		Object.defineProperty(this, '_occurrenceString', {
			enumerable: true,
			get: () => this.__data._occurrenceString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._occurrenceString = new Element(value);
			},
		});

		Object.defineProperty(this, 'occurrenceString', {
			enumerable: true,
			get: () => this.__data.occurrenceString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.occurrenceString = value;
			},
		});

		Object.defineProperty(this, '_recorded', {
			enumerable: true,
			get: () => this.__data._recorded,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._recorded = new Element(value);
			},
		});

		Object.defineProperty(this, 'recorded', {
			enumerable: true,
			get: () => this.__data.recorded,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.recorded = value;
			},
		});

		Object.defineProperty(this, '_primarySource', {
			enumerable: true,
			get: () => this.__data._primarySource,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._primarySource = new Element(value);
			},
		});

		Object.defineProperty(this, 'primarySource', {
			enumerable: true,
			get: () => this.__data.primarySource,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.primarySource = value;
			},
		});

		Object.defineProperty(this, 'reportOrigin', {
			enumerable: true,
			get: () => this.__data.reportOrigin,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.reportOrigin = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'location', {
			enumerable: true,
			get: () => this.__data.location,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.location = new Reference(value);
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

		Object.defineProperty(this, '_lotNumber', {
			enumerable: true,
			get: () => this.__data._lotNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._lotNumber = new Element(value);
			},
		});

		Object.defineProperty(this, 'lotNumber', {
			enumerable: true,
			get: () => this.__data.lotNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.lotNumber = value;
			},
		});

		Object.defineProperty(this, '_expirationDate', {
			enumerable: true,
			get: () => this.__data._expirationDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._expirationDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'expirationDate', {
			enumerable: true,
			get: () => this.__data.expirationDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.expirationDate = value;
			},
		});

		Object.defineProperty(this, 'site', {
			enumerable: true,
			get: () => this.__data.site,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.site = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'route', {
			enumerable: true,
			get: () => this.__data.route,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.route = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'doseQuantity', {
			enumerable: true,
			get: () => this.__data.doseQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.doseQuantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'performer', {
			enumerable: true,
			get: () => this.__data.performer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImmunizationPerformer = require('./immunizationperformer.js');
				this.__data.performer = Array.isArray(value)
					? value.map(v => new ImmunizationPerformer(v))
					: [new ImmunizationPerformer(value)];
			},
		});

		Object.defineProperty(this, 'note', {
			enumerable: true,
			get: () => this.__data.note,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Annotation = require('./annotation.js');
				this.__data.note = Array.isArray(value) ? value.map(v => new Annotation(v)) : [new Annotation(value)];
			},
		});

		Object.defineProperty(this, 'reasonCode', {
			enumerable: true,
			get: () => this.__data.reasonCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.reasonCode = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'reasonReference', {
			enumerable: true,
			get: () => this.__data.reasonReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.reasonReference = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, '_isSubpotent', {
			enumerable: true,
			get: () => this.__data._isSubpotent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._isSubpotent = new Element(value);
			},
		});

		Object.defineProperty(this, 'isSubpotent', {
			enumerable: true,
			get: () => this.__data.isSubpotent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.isSubpotent = value;
			},
		});

		Object.defineProperty(this, 'subpotentReason', {
			enumerable: true,
			get: () => this.__data.subpotentReason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.subpotentReason = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'education', {
			enumerable: true,
			get: () => this.__data.education,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImmunizationEducation = require('./immunizationeducation.js');
				this.__data.education = Array.isArray(value)
					? value.map(v => new ImmunizationEducation(v))
					: [new ImmunizationEducation(value)];
			},
		});

		Object.defineProperty(this, 'programEligibility', {
			enumerable: true,
			get: () => this.__data.programEligibility,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.programEligibility = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'fundingSource', {
			enumerable: true,
			get: () => this.__data.fundingSource,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.fundingSource = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'reaction', {
			enumerable: true,
			get: () => this.__data.reaction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImmunizationReaction = require('./immunizationreaction.js');
				this.__data.reaction = Array.isArray(value)
					? value.map(v => new ImmunizationReaction(v))
					: [new ImmunizationReaction(value)];
			},
		});

		Object.defineProperty(this, 'protocolApplied', {
			enumerable: true,
			get: () => this.__data.protocolApplied,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImmunizationProtocolApplied = require('./immunizationprotocolapplied.js');
				this.__data.protocolApplied = Array.isArray(value)
					? value.map(v => new ImmunizationProtocolApplied(v))
					: [new ImmunizationProtocolApplied(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Immunization',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Immunization';
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
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			_status: this._status && this._status.toJSON(),
			status: this.status,
			statusReason: this.statusReason && this.statusReason.toJSON(),
			vaccineCode: this.vaccineCode && this.vaccineCode.toJSON(),
			patient: this.patient && this.patient.toJSON(),
			encounter: this.encounter && this.encounter.toJSON(),
			_occurrenceDateTime: this._occurrenceDateTime && this._occurrenceDateTime.toJSON(),
			occurrenceDateTime: this.occurrenceDateTime,
			_occurrenceString: this._occurrenceString && this._occurrenceString.toJSON(),
			occurrenceString: this.occurrenceString,
			_recorded: this._recorded && this._recorded.toJSON(),
			recorded: this.recorded,
			_primarySource: this._primarySource && this._primarySource.toJSON(),
			primarySource: this.primarySource,
			reportOrigin: this.reportOrigin && this.reportOrigin.toJSON(),
			location: this.location && this.location.toJSON(),
			manufacturer: this.manufacturer && this.manufacturer.toJSON(),
			_lotNumber: this._lotNumber && this._lotNumber.toJSON(),
			lotNumber: this.lotNumber,
			_expirationDate: this._expirationDate && this._expirationDate.toJSON(),
			expirationDate: this.expirationDate,
			site: this.site && this.site.toJSON(),
			route: this.route && this.route.toJSON(),
			doseQuantity: this.doseQuantity && this.doseQuantity.toJSON(),
			performer: this.performer && this.performer.map(v => v.toJSON()),
			note: this.note && this.note.map(v => v.toJSON()),
			reasonCode: this.reasonCode && this.reasonCode.map(v => v.toJSON()),
			reasonReference: this.reasonReference && this.reasonReference.map(v => v.toJSON()),
			_isSubpotent: this._isSubpotent && this._isSubpotent.toJSON(),
			isSubpotent: this.isSubpotent,
			subpotentReason: this.subpotentReason && this.subpotentReason.map(v => v.toJSON()),
			education: this.education && this.education.map(v => v.toJSON()),
			programEligibility: this.programEligibility && this.programEligibility.map(v => v.toJSON()),
			fundingSource: this.fundingSource && this.fundingSource.toJSON(),
			reaction: this.reaction && this.reaction.map(v => v.toJSON()),
			protocolApplied: this.protocolApplied && this.protocolApplied.map(v => v.toJSON()),
		};
	}
};
