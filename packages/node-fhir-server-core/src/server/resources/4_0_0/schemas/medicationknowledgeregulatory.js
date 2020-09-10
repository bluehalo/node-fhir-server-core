/**
 * @name exports
 * @summary MedicationKnowledgeRegulatory Class
 */
module.exports = class MedicationKnowledgeRegulatory {
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

		Object.defineProperty(this, 'regulatoryAuthority', {
			enumerable: true,
			get: () => this.__data.regulatoryAuthority,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.regulatoryAuthority = new Reference(value);
			},
		});

		Object.defineProperty(this, 'substitution', {
			enumerable: true,
			get: () => this.__data.substitution,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationKnowledgeRegulatorySubstitution = require('./medicationknowledgeregulatorysubstitution.js');
				this.__data.substitution = Array.isArray(value)
					? value.map(v => new MedicationKnowledgeRegulatorySubstitution(v))
					: [new MedicationKnowledgeRegulatorySubstitution(value)];
			},
		});

		Object.defineProperty(this, 'schedule', {
			enumerable: true,
			get: () => this.__data.schedule,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationKnowledgeRegulatorySchedule = require('./medicationknowledgeregulatoryschedule.js');
				this.__data.schedule = Array.isArray(value)
					? value.map(v => new MedicationKnowledgeRegulatorySchedule(v))
					: [new MedicationKnowledgeRegulatorySchedule(value)];
			},
		});

		Object.defineProperty(this, 'maxDispense', {
			enumerable: true,
			get: () => this.__data.maxDispense,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationKnowledgeRegulatoryMaxDispense = require('./medicationknowledgeregulatorymaxdispense.js');
				this.__data.maxDispense = new MedicationKnowledgeRegulatoryMaxDispense(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicationKnowledgeRegulatory',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicationKnowledgeRegulatory';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			regulatoryAuthority: this.regulatoryAuthority && this.regulatoryAuthority.toJSON(),
			substitution: this.substitution && this.substitution.map(v => v.toJSON()),
			schedule: this.schedule && this.schedule.map(v => v.toJSON()),
			maxDispense: this.maxDispense && this.maxDispense.toJSON(),
		};
	}
};
