/**
 * @name exports
 * @summary ObservationDefinitionQualifiedInterval Class
 */
module.exports = class ObservationDefinitionQualifiedInterval {
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

		Object.defineProperty(this, '_category', {
			enumerable: true,
			get: () => this.__data._category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._category = new Element(value);
			},
		});

		Object.defineProperty(this, 'category', {
			enumerable: true,
			get: () => this.__data.category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.category = value;
			},
		});

		Object.defineProperty(this, 'range', {
			enumerable: true,
			get: () => this.__data.range,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.range = new Range(value);
			},
		});

		Object.defineProperty(this, 'context', {
			enumerable: true,
			get: () => this.__data.context,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.context = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'appliesTo', {
			enumerable: true,
			get: () => this.__data.appliesTo,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.appliesTo = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, '_gender', {
			enumerable: true,
			get: () => this.__data._gender,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._gender = new Element(value);
			},
		});

		Object.defineProperty(this, 'gender', {
			enumerable: true,
			get: () => this.__data.gender,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.gender = value;
			},
		});

		Object.defineProperty(this, 'age', {
			enumerable: true,
			get: () => this.__data.age,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.age = new Range(value);
			},
		});

		Object.defineProperty(this, 'gestationalAge', {
			enumerable: true,
			get: () => this.__data.gestationalAge,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.gestationalAge = new Range(value);
			},
		});

		Object.defineProperty(this, '_condition', {
			enumerable: true,
			get: () => this.__data._condition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._condition = new Element(value);
			},
		});

		Object.defineProperty(this, 'condition', {
			enumerable: true,
			get: () => this.__data.condition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.condition = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ObservationDefinitionQualifiedInterval',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ObservationDefinitionQualifiedInterval';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_category: this._category && this._category.toJSON(),
			category: this.category,
			range: this.range && this.range.toJSON(),
			context: this.context && this.context.toJSON(),
			appliesTo: this.appliesTo && this.appliesTo.map(v => v.toJSON()),
			_gender: this._gender && this._gender.toJSON(),
			gender: this.gender,
			age: this.age && this.age.toJSON(),
			gestationalAge: this.gestationalAge && this.gestationalAge.toJSON(),
			_condition: this._condition && this._condition.toJSON(),
			condition: this.condition,
		};
	}
};
