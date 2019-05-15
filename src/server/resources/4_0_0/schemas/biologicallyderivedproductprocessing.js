/**
 * @name exports
 * @summary BiologicallyDerivedProductProcessing Class
 */
module.exports = class BiologicallyDerivedProductProcessing {
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

		Object.defineProperty(this, 'procedure', {
			enumerable: true,
			get: () => this.__data.procedure,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.procedure = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'additive', {
			enumerable: true,
			get: () => this.__data.additive,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.additive = new Reference(value);
			},
		});

		Object.defineProperty(this, '_timeDateTime', {
			enumerable: true,
			get: () => this.__data._timeDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._timeDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'timeDateTime', {
			enumerable: true,
			get: () => this.__data.timeDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.timeDateTime = value;
			},
		});

		Object.defineProperty(this, 'timePeriod', {
			enumerable: true,
			get: () => this.__data.timePeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.timePeriod = new Period(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'BiologicallyDerivedProductProcessing',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'BiologicallyDerivedProductProcessing';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_description: this._description && this._description.toJSON(),
			description: this.description,
			procedure: this.procedure && this.procedure.toJSON(),
			additive: this.additive && this.additive.toJSON(),
			_timeDateTime: this._timeDateTime && this._timeDateTime.toJSON(),
			timeDateTime: this.timeDateTime,
			timePeriod: this.timePeriod && this.timePeriod.toJSON(),
		};
	}
};
