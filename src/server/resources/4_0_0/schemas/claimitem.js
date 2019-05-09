/**
 * @name exports
 * @summary ClaimItem Class
 */
module.exports = class ClaimItem {
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

		Object.defineProperty(this, '_sequence', {
			enumerable: true,
			get: () => this.__data._sequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sequence = new Element(value);
			},
		});

		Object.defineProperty(this, 'sequence', {
			enumerable: true,
			get: () => this.__data.sequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sequence = value;
			},
		});

		Object.defineProperty(this, '_careTeamSequence', {
			enumerable: true,
			get: () => this.__data._careTeamSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._careTeamSequence = new Element(value);
			},
		});

		Object.defineProperty(this, 'careTeamSequence', {
			enumerable: true,
			get: () => this.__data.careTeamSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.careTeamSequence = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_diagnosisSequence', {
			enumerable: true,
			get: () => this.__data._diagnosisSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._diagnosisSequence = new Element(value);
			},
		});

		Object.defineProperty(this, 'diagnosisSequence', {
			enumerable: true,
			get: () => this.__data.diagnosisSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.diagnosisSequence = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_procedureSequence', {
			enumerable: true,
			get: () => this.__data._procedureSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._procedureSequence = new Element(value);
			},
		});

		Object.defineProperty(this, 'procedureSequence', {
			enumerable: true,
			get: () => this.__data.procedureSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.procedureSequence = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_informationSequence', {
			enumerable: true,
			get: () => this.__data._informationSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._informationSequence = new Element(value);
			},
		});

		Object.defineProperty(this, 'informationSequence', {
			enumerable: true,
			get: () => this.__data.informationSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.informationSequence = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'revenue', {
			enumerable: true,
			get: () => this.__data.revenue,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.revenue = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'category', {
			enumerable: true,
			get: () => this.__data.category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.category = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'productOrService', {
			enumerable: true,
			get: () => this.__data.productOrService,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.productOrService = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'modifier', {
			enumerable: true,
			get: () => this.__data.modifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.modifier = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'programCode', {
			enumerable: true,
			get: () => this.__data.programCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.programCode = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, '_servicedDate', {
			enumerable: true,
			get: () => this.__data._servicedDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._servicedDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'servicedDate', {
			enumerable: true,
			get: () => this.__data.servicedDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.servicedDate = value;
			},
		});

		Object.defineProperty(this, 'servicedPeriod', {
			enumerable: true,
			get: () => this.__data.servicedPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.servicedPeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'locationCodeableConcept', {
			enumerable: true,
			get: () => this.__data.locationCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.locationCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'locationAddress', {
			enumerable: true,
			get: () => this.__data.locationAddress,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Address = require('./address.js');
				this.__data.locationAddress = new Address(value);
			},
		});

		Object.defineProperty(this, 'locationReference', {
			enumerable: true,
			get: () => this.__data.locationReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.locationReference = new Reference(value);
			},
		});

		Object.defineProperty(this, 'quantity', {
			enumerable: true,
			get: () => this.__data.quantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.quantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'unitPrice', {
			enumerable: true,
			get: () => this.__data.unitPrice,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Money = require('./money.js');
				this.__data.unitPrice = new Money(value);
			},
		});

		Object.defineProperty(this, '_factor', {
			enumerable: true,
			get: () => this.__data._factor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._factor = new Element(value);
			},
		});

		Object.defineProperty(this, 'factor', {
			enumerable: true,
			get: () => this.__data.factor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.factor = value;
			},
		});

		Object.defineProperty(this, 'net', {
			enumerable: true,
			get: () => this.__data.net,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Money = require('./money.js');
				this.__data.net = new Money(value);
			},
		});

		Object.defineProperty(this, 'udi', {
			enumerable: true,
			get: () => this.__data.udi,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.udi = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'bodySite', {
			enumerable: true,
			get: () => this.__data.bodySite,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.bodySite = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'subSite', {
			enumerable: true,
			get: () => this.__data.subSite,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.subSite = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
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
				this.__data.encounter = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'detail', {
			enumerable: true,
			get: () => this.__data.detail,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClaimItemDetail = require('./claimitemdetail.js');
				this.__data.detail = Array.isArray(value)
					? value.map(v => new ClaimItemDetail(v))
					: [new ClaimItemDetail(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ClaimItem',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ClaimItem';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_sequence: this._sequence && this._sequence.toJSON(),
			sequence: this.sequence,
			_careTeamSequence: this._careTeamSequence && this._careTeamSequence.toJSON(),
			careTeamSequence: this.careTeamSequence,
			_diagnosisSequence: this._diagnosisSequence && this._diagnosisSequence.toJSON(),
			diagnosisSequence: this.diagnosisSequence,
			_procedureSequence: this._procedureSequence && this._procedureSequence.toJSON(),
			procedureSequence: this.procedureSequence,
			_informationSequence: this._informationSequence && this._informationSequence.toJSON(),
			informationSequence: this.informationSequence,
			revenue: this.revenue && this.revenue.toJSON(),
			category: this.category && this.category.toJSON(),
			productOrService: this.productOrService && this.productOrService.toJSON(),
			modifier: this.modifier && this.modifier.map(v => v.toJSON()),
			programCode: this.programCode && this.programCode.map(v => v.toJSON()),
			_servicedDate: this._servicedDate && this._servicedDate.toJSON(),
			servicedDate: this.servicedDate,
			servicedPeriod: this.servicedPeriod && this.servicedPeriod.toJSON(),
			locationCodeableConcept: this.locationCodeableConcept && this.locationCodeableConcept.toJSON(),
			locationAddress: this.locationAddress && this.locationAddress.toJSON(),
			locationReference: this.locationReference && this.locationReference.toJSON(),
			quantity: this.quantity && this.quantity.toJSON(),
			unitPrice: this.unitPrice && this.unitPrice.toJSON(),
			_factor: this._factor && this._factor.toJSON(),
			factor: this.factor,
			net: this.net && this.net.toJSON(),
			udi: this.udi && this.udi.map(v => v.toJSON()),
			bodySite: this.bodySite && this.bodySite.toJSON(),
			subSite: this.subSite && this.subSite.map(v => v.toJSON()),
			encounter: this.encounter && this.encounter.map(v => v.toJSON()),
			detail: this.detail && this.detail.map(v => v.toJSON()),
		};
	}
};
