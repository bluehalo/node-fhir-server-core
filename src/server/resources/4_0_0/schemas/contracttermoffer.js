/**
 * @name exports
 * @summary ContractTermOffer Class
 */
module.exports = class ContractTermOffer {
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
				this.__data.identifier = Array.isArray(value) ? value.map(v => new Identifier(v)) : [new Identifier(value)];
			},
		});

		Object.defineProperty(this, 'party', {
			enumerable: true,
			get: () => this.__data.party,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContractTermOfferParty = require('./contracttermofferparty.js');
				this.__data.party = Array.isArray(value)
					? value.map(v => new ContractTermOfferParty(v))
					: [new ContractTermOfferParty(value)];
			},
		});

		Object.defineProperty(this, 'topic', {
			enumerable: true,
			get: () => this.__data.topic,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.topic = new Reference(value);
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
				this.__data.type = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'decision', {
			enumerable: true,
			get: () => this.__data.decision,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.decision = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'decisionMode', {
			enumerable: true,
			get: () => this.__data.decisionMode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.decisionMode = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
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

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ContractTermOffer',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ContractTermOffer';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			party: this.party && this.party.map(v => v.toJSON()),
			topic: this.topic && this.topic.toJSON(),
			type: this.type && this.type.toJSON(),
			decision: this.decision && this.decision.toJSON(),
			decisionMode: this.decisionMode && this.decisionMode.map(v => v.toJSON()),
			answer: this.answer && this.answer.map(v => v.toJSON()),
			_text: this._text && this._text.toJSON(),
			text: this.text,
			_linkId: this._linkId && this._linkId.toJSON(),
			linkId: this.linkId,
			_securityLabelNumber: this._securityLabelNumber && this._securityLabelNumber.toJSON(),
			securityLabelNumber: this.securityLabelNumber,
		};
	}
};
