/**
 * @name exports
 * @summary TriggerDefinition Class
 */
module.exports = class TriggerDefinition {
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

		Object.defineProperty(this, '_type', {
			enumerable: true,
			get: () => this.__data._type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._type = new Element(value);
			},
		});

		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.type = value;
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

		Object.defineProperty(this, 'timingTiming', {
			enumerable: true,
			get: () => this.__data.timingTiming,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Timing = require('./timing.js');
				this.__data.timingTiming = new Timing(value);
			},
		});

		Object.defineProperty(this, 'timingReference', {
			enumerable: true,
			get: () => this.__data.timingReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.timingReference = new Reference(value);
			},
		});

		Object.defineProperty(this, '_timingDate', {
			enumerable: true,
			get: () => this.__data._timingDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._timingDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'timingDate', {
			enumerable: true,
			get: () => this.__data.timingDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.timingDate = value;
			},
		});

		Object.defineProperty(this, '_timingDateTime', {
			enumerable: true,
			get: () => this.__data._timingDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._timingDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'timingDateTime', {
			enumerable: true,
			get: () => this.__data.timingDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.timingDateTime = value;
			},
		});

		Object.defineProperty(this, 'data', {
			enumerable: true,
			get: () => this.__data.data,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let DataRequirement = require('./datarequirement.js');
				this.__data.data = Array.isArray(value) ? value.map(v => new DataRequirement(v)) : [new DataRequirement(value)];
			},
		});

		Object.defineProperty(this, 'condition', {
			enumerable: true,
			get: () => this.__data.condition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Expression = require('./expression.js');
				this.__data.condition = new Expression(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'TriggerDefinition',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'TriggerDefinition';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			_type: this._type && this._type.toJSON(),
			type: this.type,
			_name: this._name && this._name.toJSON(),
			name: this.name,
			timingTiming: this.timingTiming && this.timingTiming.toJSON(),
			timingReference: this.timingReference && this.timingReference.toJSON(),
			_timingDate: this._timingDate && this._timingDate.toJSON(),
			timingDate: this.timingDate,
			_timingDateTime: this._timingDateTime && this._timingDateTime.toJSON(),
			timingDateTime: this.timingDateTime,
			data: this.data && this.data.map(v => v.toJSON()),
			condition: this.condition && this.condition.toJSON(),
		};
	}
};
