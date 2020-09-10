/**
 * @name exports
 * @summary EffectEvidenceSynthesisEffectEstimatePrecisionEstimate Class
 */
module.exports = class EffectEvidenceSynthesisEffectEstimatePrecisionEstimate {
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

		Object.defineProperty(this, '_level', {
			enumerable: true,
			get: () => this.__data._level,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._level = new Element(value);
			},
		});

		Object.defineProperty(this, 'level', {
			enumerable: true,
			get: () => this.__data.level,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.level = value;
			},
		});

		Object.defineProperty(this, '_from', {
			enumerable: true,
			get: () => this.__data._from,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._from = new Element(value);
			},
		});

		Object.defineProperty(this, 'from', {
			enumerable: true,
			get: () => this.__data.from,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.from = value;
			},
		});

		Object.defineProperty(this, '_to', {
			enumerable: true,
			get: () => this.__data._to,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._to = new Element(value);
			},
		});

		Object.defineProperty(this, 'to', {
			enumerable: true,
			get: () => this.__data.to,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.to = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'EffectEvidenceSynthesisEffectEstimatePrecisionEstimate',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'EffectEvidenceSynthesisEffectEstimatePrecisionEstimate';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			type: this.type && this.type.toJSON(),
			_level: this._level && this._level.toJSON(),
			level: this.level,
			_from: this._from && this._from.toJSON(),
			from: this.from,
			_to: this._to && this._to.toJSON(),
			to: this.to,
		};
	}
};
