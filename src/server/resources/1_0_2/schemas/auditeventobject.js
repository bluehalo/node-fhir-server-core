/**
 * @name exports
 * @summary AuditEventObject Class
 */
module.exports = class AuditEventObject {
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

		Object.defineProperty(this, 'reference', {
			enumerable: true,
			get: () => this.__data.reference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.reference = new Reference(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/object-type
		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.type = new Coding(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/object-role
		Object.defineProperty(this, 'role', {
			enumerable: true,
			get: () => this.__data.role,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.role = new Coding(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/object-lifecycle
		Object.defineProperty(this, 'lifecycle', {
			enumerable: true,
			get: () => this.__data.lifecycle,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.lifecycle = new Coding(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/security-labels
		Object.defineProperty(this, 'securityLabel', {
			enumerable: true,
			get: () => this.__data.securityLabel,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.securityLabel = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});

		Object.defineProperty(this, '_name', {
			enumerable: true,
			get: () => this.__data._name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._name = new Element(value);
			},
		});

		Object.defineProperty(this, 'name', {
			enumerable: true,
			get: () => this.__data.name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.name = value;
			},
		});

		Object.defineProperty(this, '_description', {
			enumerable: true,
			get: () => this.__data._description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._description = new Element(value);
			},
		});

		Object.defineProperty(this, 'description', {
			enumerable: true,
			get: () => this.__data.description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.description = value;
			},
		});

		Object.defineProperty(this, '_query', {
			enumerable: true,
			get: () => this.__data._query,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._query = new Element(value);
			},
		});

		Object.defineProperty(this, 'query', {
			enumerable: true,
			get: () => this.__data.query,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.query = value;
			},
		});

		Object.defineProperty(this, 'detail', {
			enumerable: true,
			get: () => this.__data.detail,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let AuditEventObjectDetail = require('./auditeventobjectdetail.js');
				this.__data.detail = Array.isArray(value)
					? value.map(v => new AuditEventObjectDetail(v))
					: [new AuditEventObjectDetail(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'AuditEventObject',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'AuditEventObject';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			identifier: this.identifier && this.identifier.toJSON(),
			reference: this.reference && this.reference.toJSON(),
			type: this.type && this.type.toJSON(),
			role: this.role && this.role.toJSON(),
			lifecycle: this.lifecycle && this.lifecycle.toJSON(),
			securityLabel: this.securityLabel && this.securityLabel.map(v => v.toJSON()),
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_description: this._description && this._description.toJSON(),
			description: this.description,
			_query: this._query && this._query.toJSON(),
			query: this.query,
			detail: this.detail && this.detail.map(v => v.toJSON()),
		};
	}
};
