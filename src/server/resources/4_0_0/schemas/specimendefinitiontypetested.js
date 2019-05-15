/**
 * @name exports
 * @summary SpecimenDefinitionTypeTested Class
 */
module.exports = class SpecimenDefinitionTypeTested {
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

		Object.defineProperty(this, '_isDerived', {
			enumerable: true,
			get: () => this.__data._isDerived,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._isDerived = new Element(value);
			},
		});

		Object.defineProperty(this, 'isDerived', {
			enumerable: true,
			get: () => this.__data.isDerived,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.isDerived = value;
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

		Object.defineProperty(this, '_preference', {
			enumerable: true,
			get: () => this.__data._preference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._preference = new Element(value);
			},
		});

		Object.defineProperty(this, 'preference', {
			enumerable: true,
			get: () => this.__data.preference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.preference = value;
			},
		});

		Object.defineProperty(this, 'container', {
			enumerable: true,
			get: () => this.__data.container,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SpecimenDefinitionTypeTestedContainer = require('./specimendefinitiontypetestedcontainer.js');
				this.__data.container = new SpecimenDefinitionTypeTestedContainer(value);
			},
		});

		Object.defineProperty(this, '_requirement', {
			enumerable: true,
			get: () => this.__data._requirement,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._requirement = new Element(value);
			},
		});

		Object.defineProperty(this, 'requirement', {
			enumerable: true,
			get: () => this.__data.requirement,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.requirement = value;
			},
		});

		Object.defineProperty(this, 'retentionTime', {
			enumerable: true,
			get: () => this.__data.retentionTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.retentionTime = new Duration(value);
			},
		});

		Object.defineProperty(this, 'rejectionCriterion', {
			enumerable: true,
			get: () => this.__data.rejectionCriterion,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.rejectionCriterion = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'handling', {
			enumerable: true,
			get: () => this.__data.handling,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SpecimenDefinitionTypeTestedHandling = require('./specimendefinitiontypetestedhandling.js');
				this.__data.handling = Array.isArray(value)
					? value.map(v => new SpecimenDefinitionTypeTestedHandling(v))
					: [new SpecimenDefinitionTypeTestedHandling(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SpecimenDefinitionTypeTested',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SpecimenDefinitionTypeTested';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_isDerived: this._isDerived && this._isDerived.toJSON(),
			isDerived: this.isDerived,
			type: this.type && this.type.toJSON(),
			_preference: this._preference && this._preference.toJSON(),
			preference: this.preference,
			container: this.container && this.container.toJSON(),
			_requirement: this._requirement && this._requirement.toJSON(),
			requirement: this.requirement,
			retentionTime: this.retentionTime && this.retentionTime.toJSON(),
			rejectionCriterion: this.rejectionCriterion && this.rejectionCriterion.map(v => v.toJSON()),
			handling: this.handling && this.handling.map(v => v.toJSON()),
		};
	}
};
