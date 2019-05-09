/**
 * @name exports
 * @summary NutritionOrderOralDiet Class
 */
module.exports = class NutritionOrderOralDiet {
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
				this.__data.type = Array.isArray(value) ? value.map(v => new CodeableConcept(v)) : [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'schedule', {
			enumerable: true,
			get: () => this.__data.schedule,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Timing = require('./timing.js');
				this.__data.schedule = Array.isArray(value) ? value.map(v => new Timing(v)) : [new Timing(value)];
			},
		});

		Object.defineProperty(this, 'nutrient', {
			enumerable: true,
			get: () => this.__data.nutrient,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let NutritionOrderOralDietNutrient = require('./nutritionorderoraldietnutrient.js');
				this.__data.nutrient = Array.isArray(value)
					? value.map(v => new NutritionOrderOralDietNutrient(v))
					: [new NutritionOrderOralDietNutrient(value)];
			},
		});

		Object.defineProperty(this, 'texture', {
			enumerable: true,
			get: () => this.__data.texture,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let NutritionOrderOralDietTexture = require('./nutritionorderoraldiettexture.js');
				this.__data.texture = Array.isArray(value)
					? value.map(v => new NutritionOrderOralDietTexture(v))
					: [new NutritionOrderOralDietTexture(value)];
			},
		});

		Object.defineProperty(this, 'fluidConsistencyType', {
			enumerable: true,
			get: () => this.__data.fluidConsistencyType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.fluidConsistencyType = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, '_instruction', {
			enumerable: true,
			get: () => this.__data._instruction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._instruction = new Element(value);
			},
		});

		Object.defineProperty(this, 'instruction', {
			enumerable: true,
			get: () => this.__data.instruction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.instruction = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'NutritionOrderOralDiet',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'NutritionOrderOralDiet';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			type: this.type && this.type.map(v => v.toJSON()),
			schedule: this.schedule && this.schedule.map(v => v.toJSON()),
			nutrient: this.nutrient && this.nutrient.map(v => v.toJSON()),
			texture: this.texture && this.texture.map(v => v.toJSON()),
			fluidConsistencyType: this.fluidConsistencyType && this.fluidConsistencyType.map(v => v.toJSON()),
			_instruction: this._instruction && this._instruction.toJSON(),
			instruction: this.instruction,
		};
	}
};
