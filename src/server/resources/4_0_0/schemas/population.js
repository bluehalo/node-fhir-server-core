/**
 * @name exports
 * @summary Population Class
 */
module.exports = class Population {
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

		Object.defineProperty(this, 'ageRange', {
			enumerable: true,
			get: () => this.__data.ageRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.ageRange = new Range(value);
			},
		});

		Object.defineProperty(this, 'ageCodeableConcept', {
			enumerable: true,
			get: () => this.__data.ageCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.ageCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'gender', {
			enumerable: true,
			get: () => this.__data.gender,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.gender = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'race', {
			enumerable: true,
			get: () => this.__data.race,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.race = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'physiologicalCondition', {
			enumerable: true,
			get: () => this.__data.physiologicalCondition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.physiologicalCondition = new CodeableConcept(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Population',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Population';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			ageRange: this.ageRange && this.ageRange.toJSON(),
			ageCodeableConcept: this.ageCodeableConcept && this.ageCodeableConcept.toJSON(),
			gender: this.gender && this.gender.toJSON(),
			race: this.race && this.race.toJSON(),
			physiologicalCondition: this.physiologicalCondition && this.physiologicalCondition.toJSON(),
		};
	}
};
