/**
 * @name exports
 * @summary ContractContentDefinition Class
 */
module.exports = class ContractContentDefinition {
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

		Object.defineProperty(this, 'publisher', {
			enumerable: true,
			get: () => this.__data.publisher,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.publisher = new Reference(value);
			},
		});

		Object.defineProperty(this, '_publicationDate', {
			enumerable: true,
			get: () => this.__data._publicationDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._publicationDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'publicationDate', {
			enumerable: true,
			get: () => this.__data.publicationDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.publicationDate = value;
			},
		});

		Object.defineProperty(this, '_publicationStatus', {
			enumerable: true,
			get: () => this.__data._publicationStatus,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._publicationStatus = new Element(value);
			},
		});

		Object.defineProperty(this, 'publicationStatus', {
			enumerable: true,
			get: () => this.__data.publicationStatus,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.publicationStatus = value;
			},
		});

		Object.defineProperty(this, '_copyright', {
			enumerable: true,
			get: () => this.__data._copyright,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._copyright = new Element(value);
			},
		});

		Object.defineProperty(this, 'copyright', {
			enumerable: true,
			get: () => this.__data.copyright,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.copyright = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ContractContentDefinition',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ContractContentDefinition';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			type: this.type && this.type.toJSON(),
			subType: this.subType && this.subType.toJSON(),
			publisher: this.publisher && this.publisher.toJSON(),
			_publicationDate: this._publicationDate && this._publicationDate.toJSON(),
			publicationDate: this.publicationDate,
			_publicationStatus: this._publicationStatus && this._publicationStatus.toJSON(),
			publicationStatus: this.publicationStatus,
			_copyright: this._copyright && this._copyright.toJSON(),
			copyright: this.copyright,
		};
	}
};
