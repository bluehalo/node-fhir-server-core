/**
 * @name exports
 * @summary ContractTerm Class
 */
module.exports = class ContractTerm {
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

		Object.defineProperty(this, 'identifier', {
			enumerable: true,
			get: () => this.__data.identifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.identifier = new Identifier(value);
			},
		});

		Object.defineProperty(this, '_issued', {
			enumerable: true,
			get: () => this.__data._issued,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._issued = new Element(value);
			},
		});

		Object.defineProperty(this, 'issued', {
			enumerable: true,
			get: () => this.__data.issued,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.issued = value;
			},
		});

		Object.defineProperty(this, 'applies', {
			enumerable: true,
			get: () => this.__data.applies,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.applies = new Period(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/contract-term-type
		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.type = new CodeableConcept(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/contract-term-subtype
		Object.defineProperty(this, 'subType', {
			enumerable: true,
			get: () => this.__data.subType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.subType = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'subject', {
			enumerable: true,
			get: () => this.__data.subject,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.subject = new Reference(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/contract-action
		Object.defineProperty(this, 'action', {
			enumerable: true,
			get: () => this.__data.action,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.action = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		Object.defineProperty(this, 'actionReason', {
			enumerable: true,
			get: () => this.__data.actionReason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.actionReason = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'actor', {
			enumerable: true,
			get: () => this.__data.actor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContractTermActor = require('./contracttermactor.js');
				this.__data.actor = Array.isArray(value)
					? value.map(v => new ContractTermActor(v))
					: [new ContractTermActor(value)];
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

		Object.defineProperty(this, 'valuedItem', {
			enumerable: true,
			get: () => this.__data.valuedItem,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContractTermValuedItem = require('./contracttermvalueditem.js');
				this.__data.valuedItem = Array.isArray(value)
					? value.map(v => new ContractTermValuedItem(v))
					: [new ContractTermValuedItem(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ContractTerm',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ContractTerm';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			identifier: this.identifier && this.identifier.toJSON(),
			_issued: this._issued && this._issued.toJSON(),
			issued: this.issued,
			applies: this.applies && this.applies.toJSON(),
			type: this.type && this.type.toJSON(),
			subType: this.subType && this.subType.toJSON(),
			subject: this.subject && this.subject.toJSON(),
			action: this.action && this.action.map(v => v.toJSON()),
			actionReason: this.actionReason && this.actionReason.map(v => v.toJSON()),
			actor: this.actor && this.actor.map(v => v.toJSON()),
			_text: this._text && this._text.toJSON(),
			text: this.text,
			valuedItem: this.valuedItem && this.valuedItem.map(v => v.toJSON()),
		};
	}
};
