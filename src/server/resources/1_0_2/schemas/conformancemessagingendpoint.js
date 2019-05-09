/**
 * @name exports
 * @summary ConformanceMessagingEndpoint Class
 */
module.exports = class ConformanceMessagingEndpoint {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/message-transport
		Object.defineProperty(this, 'protocol', {
			enumerable: true,
			get: () => this.__data.protocol,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.protocol = new Coding(value);
			},
		});

		Object.defineProperty(this, '_address', {
			enumerable: true,
			get: () => this.__data._address,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._address = new Element(value);
			},
		});

		Object.defineProperty(this, 'address', {
			enumerable: true,
			get: () => this.__data.address,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.address = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ConformanceMessagingEndpoint',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ConformanceMessagingEndpoint';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			protocol: this.protocol && this.protocol.toJSON(),
			_address: this._address && this._address.toJSON(),
			address: this.address,
		};
	}
};
