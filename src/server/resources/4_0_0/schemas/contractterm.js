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

		Object.defineProperty(this, 'topicCodeableConcept', {
			enumerable: true,
			get: () => this.__data.topicCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.topicCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'topicReference', {
			enumerable: true,
			get: () => this.__data.topicReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.topicReference = new Reference(value);
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

		Object.defineProperty(this, 'securityLabel', {
			enumerable: true,
			get: () => this.__data.securityLabel,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContractTermSecurityLabel = require('./contracttermsecuritylabel.js');
				this.__data.securityLabel = Array.isArray(value)
					? value.map(v => new ContractTermSecurityLabel(v))
					: [new ContractTermSecurityLabel(value)];
			},
		});

		Object.defineProperty(this, 'offer', {
			enumerable: true,
			get: () => this.__data.offer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContractTermOffer = require('./contracttermoffer.js');
				this.__data.offer = new ContractTermOffer(value);
			},
		});

		Object.defineProperty(this, 'asset', {
			enumerable: true,
			get: () => this.__data.asset,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContractTermAsset = require('./contracttermasset.js');
				this.__data.asset = Array.isArray(value)
					? value.map(v => new ContractTermAsset(v))
					: [new ContractTermAsset(value)];
			},
		});

		Object.defineProperty(this, 'action', {
			enumerable: true,
			get: () => this.__data.action,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContractTermAction = require('./contracttermaction.js');
				this.__data.action = Array.isArray(value)
					? value.map(v => new ContractTermAction(v))
					: [new ContractTermAction(value)];
			},
		});

		Object.defineProperty(this, 'group', {
			enumerable: true,
			get: () => this.__data.group,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContractTerm = require('./contractterm.js');
				this.__data.group = Array.isArray(value) ? value.map(v => new ContractTerm(v)) : [new ContractTerm(value)];
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
			topicCodeableConcept: this.topicCodeableConcept && this.topicCodeableConcept.toJSON(),
			topicReference: this.topicReference && this.topicReference.toJSON(),
			type: this.type && this.type.toJSON(),
			subType: this.subType && this.subType.toJSON(),
			_text: this._text && this._text.toJSON(),
			text: this.text,
			securityLabel: this.securityLabel && this.securityLabel.map(v => v.toJSON()),
			offer: this.offer && this.offer.toJSON(),
			asset: this.asset && this.asset.map(v => v.toJSON()),
			action: this.action && this.action.map(v => v.toJSON()),
			group: this.group && this.group.map(v => v.toJSON()),
		};
	}
};
