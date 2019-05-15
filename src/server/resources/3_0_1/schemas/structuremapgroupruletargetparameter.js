/**
 * @name exports
 * @summary StructureMapGroupRuleTargetParameter Class
 */
module.exports = class StructureMapGroupRuleTargetParameter {
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

		Object.defineProperty(this, '_valueId', {
			enumerable: true,
			get: () => this.__data._valueId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueId = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueId', {
			enumerable: true,
			get: () => this.__data.valueId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueId = value;
			},
		});

		Object.defineProperty(this, '_valueString', {
			enumerable: true,
			get: () => this.__data._valueString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueString = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueString', {
			enumerable: true,
			get: () => this.__data.valueString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueString = value;
			},
		});

		Object.defineProperty(this, '_valueBoolean', {
			enumerable: true,
			get: () => this.__data._valueBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueBoolean = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueBoolean', {
			enumerable: true,
			get: () => this.__data.valueBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueBoolean = value;
			},
		});

		Object.defineProperty(this, '_valueInteger', {
			enumerable: true,
			get: () => this.__data._valueInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueInteger = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueInteger', {
			enumerable: true,
			get: () => this.__data.valueInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueInteger = value;
			},
		});

		Object.defineProperty(this, '_valueDecimal', {
			enumerable: true,
			get: () => this.__data._valueDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueDecimal = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueDecimal', {
			enumerable: true,
			get: () => this.__data.valueDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueDecimal = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'StructureMapGroupRuleTargetParameter',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'StructureMapGroupRuleTargetParameter';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_valueId: this._valueId && this._valueId.toJSON(),
			valueId: this.valueId,
			_valueString: this._valueString && this._valueString.toJSON(),
			valueString: this.valueString,
			_valueBoolean: this._valueBoolean && this._valueBoolean.toJSON(),
			valueBoolean: this.valueBoolean,
			_valueInteger: this._valueInteger && this._valueInteger.toJSON(),
			valueInteger: this.valueInteger,
			_valueDecimal: this._valueDecimal && this._valueDecimal.toJSON(),
			valueDecimal: this.valueDecimal,
		};
	}
};
