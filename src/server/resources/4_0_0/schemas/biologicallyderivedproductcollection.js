/**
 * @name exports
 * @summary BiologicallyDerivedProductCollection Class
 */
module.exports = class BiologicallyDerivedProductCollection {
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

		Object.defineProperty(this, 'collector', {
			enumerable: true,
			get: () => this.__data.collector,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.collector = new Reference(value);
			},
		});

		Object.defineProperty(this, 'source', {
			enumerable: true,
			get: () => this.__data.source,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.source = new Reference(value);
			},
		});

		Object.defineProperty(this, '_collectedDateTime', {
			enumerable: true,
			get: () => this.__data._collectedDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._collectedDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'collectedDateTime', {
			enumerable: true,
			get: () => this.__data.collectedDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.collectedDateTime = value;
			},
		});

		Object.defineProperty(this, 'collectedPeriod', {
			enumerable: true,
			get: () => this.__data.collectedPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.collectedPeriod = new Period(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'BiologicallyDerivedProductCollection',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'BiologicallyDerivedProductCollection';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			collector: this.collector && this.collector.toJSON(),
			source: this.source && this.source.toJSON(),
			_collectedDateTime: this._collectedDateTime && this._collectedDateTime.toJSON(),
			collectedDateTime: this.collectedDateTime,
			collectedPeriod: this.collectedPeriod && this.collectedPeriod.toJSON(),
		};
	}
};
