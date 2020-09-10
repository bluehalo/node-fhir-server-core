/**
 * @name exports
 * @summary ContractTermAsset Class
 */
module.exports = class ContractTermAsset {
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

		Object.defineProperty(this, 'scope', {
			enumerable: true,
			get: () => this.__data.scope,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.scope = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.type = Array.isArray(value) ? value.map(v => new CodeableConcept(v)) : [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'typeReference', {
			enumerable: true,
			get: () => this.__data.typeReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.typeReference = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'subtype', {
			enumerable: true,
			get: () => this.__data.subtype,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.subtype = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'relationship', {
			enumerable: true,
			get: () => this.__data.relationship,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.relationship = new Coding(value);
			},
		});

		Object.defineProperty(this, 'context', {
			enumerable: true,
			get: () => this.__data.context,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContractTermAssetContext = require('./contracttermassetcontext.js');
				this.__data.context = Array.isArray(value)
					? value.map(v => new ContractTermAssetContext(v))
					: [new ContractTermAssetContext(value)];
			},
		});

		Object.defineProperty(this, '_condition', {
			enumerable: true,
			get: () => this.__data._condition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._condition = new Element(value);
			},
		});

		Object.defineProperty(this, 'condition', {
			enumerable: true,
			get: () => this.__data.condition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.condition = value;
			},
		});

		Object.defineProperty(this, 'periodType', {
			enumerable: true,
			get: () => this.__data.periodType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.periodType = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'period', {
			enumerable: true,
			get: () => this.__data.period,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.period = Array.isArray(value) ? value.map(v => new Period(v)) : [new Period(value)];
			},
		});

		Object.defineProperty(this, 'usePeriod', {
			enumerable: true,
			get: () => this.__data.usePeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.usePeriod = Array.isArray(value) ? value.map(v => new Period(v)) : [new Period(value)];
			},
		});

		Object.defineProperty(this, '_text', {
			enumerable: true,
			get: () => this.__data._text,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._text = new Element(value);
			},
		});

		Object.defineProperty(this, 'text', {
			enumerable: true,
			get: () => this.__data.text,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.text = value;
			},
		});

		Object.defineProperty(this, '_linkId', {
			enumerable: true,
			get: () => this.__data._linkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._linkId = new Element(value);
			},
		});

		Object.defineProperty(this, 'linkId', {
			enumerable: true,
			get: () => this.__data.linkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.linkId = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'answer', {
			enumerable: true,
			get: () => this.__data.answer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContractTermOfferAnswer = require('./contracttermofferanswer.js');
				this.__data.answer = Array.isArray(value)
					? value.map(v => new ContractTermOfferAnswer(v))
					: [new ContractTermOfferAnswer(value)];
			},
		});

		Object.defineProperty(this, '_securityLabelNumber', {
			enumerable: true,
			get: () => this.__data._securityLabelNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._securityLabelNumber = new Element(value);
			},
		});

		Object.defineProperty(this, 'securityLabelNumber', {
			enumerable: true,
			get: () => this.__data.securityLabelNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.securityLabelNumber = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'valuedItem', {
			enumerable: true,
			get: () => this.__data.valuedItem,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContractTermAssetValuedItem = require('./contracttermassetvalueditem.js');
				this.__data.valuedItem = Array.isArray(value)
					? value.map(v => new ContractTermAssetValuedItem(v))
					: [new ContractTermAssetValuedItem(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ContractTermAsset',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ContractTermAsset';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			scope: this.scope && this.scope.toJSON(),
			type: this.type && this.type.map(v => v.toJSON()),
			typeReference: this.typeReference && this.typeReference.map(v => v.toJSON()),
			subtype: this.subtype && this.subtype.map(v => v.toJSON()),
			relationship: this.relationship && this.relationship.toJSON(),
			context: this.context && this.context.map(v => v.toJSON()),
			_condition: this._condition && this._condition.toJSON(),
			condition: this.condition,
			periodType: this.periodType && this.periodType.map(v => v.toJSON()),
			period: this.period && this.period.map(v => v.toJSON()),
			usePeriod: this.usePeriod && this.usePeriod.map(v => v.toJSON()),
			_text: this._text && this._text.toJSON(),
			text: this.text,
			_linkId: this._linkId && this._linkId.toJSON(),
			linkId: this.linkId,
			answer: this.answer && this.answer.map(v => v.toJSON()),
			_securityLabelNumber: this._securityLabelNumber && this._securityLabelNumber.toJSON(),
			securityLabelNumber: this.securityLabelNumber,
			valuedItem: this.valuedItem && this.valuedItem.map(v => v.toJSON()),
		};
	}
};
