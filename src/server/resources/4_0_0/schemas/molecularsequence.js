/**
 * @name exports
 * @summary MolecularSequence Class
 */
module.exports = class MolecularSequence {
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

		Object.defineProperty(this, 'meta', {
			enumerable: true,
			get: () => this.__data.meta,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Meta = require('./meta.js');
				this.__data.meta = new Meta(value);
			},
		});

		Object.defineProperty(this, '_implicitRules', {
			enumerable: true,
			get: () => this.__data._implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._implicitRules = new Element(value);
			},
		});

		Object.defineProperty(this, 'implicitRules', {
			enumerable: true,
			get: () => this.__data.implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.implicitRules = value;
			},
		});

		Object.defineProperty(this, '_language', {
			enumerable: true,
			get: () => this.__data._language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._language = new Element(value);
			},
		});

		Object.defineProperty(this, 'language', {
			enumerable: true,
			get: () => this.__data.language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.language = value;
			},
		});

		Object.defineProperty(this, 'text', {
			enumerable: true,
			get: () => this.__data.text,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Narrative = require('./narrative.js');
				this.__data.text = new Narrative(value);
			},
		});

		Object.defineProperty(this, 'contained', {
			enumerable: true,
			get: () => this.__data.contained,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contained = Array.isArray(value) ? value.map(v => v) : [value];
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

		Object.defineProperty(this, 'identifier', {
			enumerable: true,
			get: () => this.__data.identifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.identifier = Array.isArray(value) ? value.map(v => new Identifier(v)) : [new Identifier(value)];
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

		Object.defineProperty(this, '_coordinateSystem', {
			enumerable: true,
			get: () => this.__data._coordinateSystem,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._coordinateSystem = new Element(value);
			},
		});

		Object.defineProperty(this, 'coordinateSystem', {
			enumerable: true,
			get: () => this.__data.coordinateSystem,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.coordinateSystem = value;
			},
		});

		Object.defineProperty(this, 'patient', {
			enumerable: true,
			get: () => this.__data.patient,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.patient = new Reference(value);
			},
		});

		Object.defineProperty(this, 'specimen', {
			enumerable: true,
			get: () => this.__data.specimen,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.specimen = new Reference(value);
			},
		});

		Object.defineProperty(this, 'device', {
			enumerable: true,
			get: () => this.__data.device,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.device = new Reference(value);
			},
		});

		Object.defineProperty(this, 'performer', {
			enumerable: true,
			get: () => this.__data.performer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.performer = new Reference(value);
			},
		});

		Object.defineProperty(this, 'quantity', {
			enumerable: true,
			get: () => this.__data.quantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.quantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'referenceSeq', {
			enumerable: true,
			get: () => this.__data.referenceSeq,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MolecularSequenceReferenceSeq = require('./molecularsequencereferenceseq.js');
				this.__data.referenceSeq = new MolecularSequenceReferenceSeq(value);
			},
		});

		Object.defineProperty(this, 'variant', {
			enumerable: true,
			get: () => this.__data.variant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MolecularSequenceVariant = require('./molecularsequencevariant.js');
				this.__data.variant = Array.isArray(value)
					? value.map(v => new MolecularSequenceVariant(v))
					: [new MolecularSequenceVariant(value)];
			},
		});

		Object.defineProperty(this, '_observedSeq', {
			enumerable: true,
			get: () => this.__data._observedSeq,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._observedSeq = new Element(value);
			},
		});

		Object.defineProperty(this, 'observedSeq', {
			enumerable: true,
			get: () => this.__data.observedSeq,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.observedSeq = value;
			},
		});

		Object.defineProperty(this, 'quality', {
			enumerable: true,
			get: () => this.__data.quality,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MolecularSequenceQuality = require('./molecularsequencequality.js');
				this.__data.quality = Array.isArray(value)
					? value.map(v => new MolecularSequenceQuality(v))
					: [new MolecularSequenceQuality(value)];
			},
		});

		Object.defineProperty(this, '_readCoverage', {
			enumerable: true,
			get: () => this.__data._readCoverage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._readCoverage = new Element(value);
			},
		});

		Object.defineProperty(this, 'readCoverage', {
			enumerable: true,
			get: () => this.__data.readCoverage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.readCoverage = value;
			},
		});

		Object.defineProperty(this, 'repository', {
			enumerable: true,
			get: () => this.__data.repository,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MolecularSequenceRepository = require('./molecularsequencerepository.js');
				this.__data.repository = Array.isArray(value)
					? value.map(v => new MolecularSequenceRepository(v))
					: [new MolecularSequenceRepository(value)];
			},
		});

		Object.defineProperty(this, 'pointer', {
			enumerable: true,
			get: () => this.__data.pointer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.pointer = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'structureVariant', {
			enumerable: true,
			get: () => this.__data.structureVariant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MolecularSequenceStructureVariant = require('./molecularsequencestructurevariant.js');
				this.__data.structureVariant = Array.isArray(value)
					? value.map(v => new MolecularSequenceStructureVariant(v))
					: [new MolecularSequenceStructureVariant(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MolecularSequence',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MolecularSequence';
	}

	toJSON() {
		return {
			resourceType: this.resourceType,
			id: this.id,
			meta: this.meta && this.meta.toJSON(),
			_implicitRules: this._implicitRules && this._implicitRules.toJSON(),
			implicitRules: this.implicitRules,
			_language: this._language && this._language.toJSON(),
			language: this.language,
			text: this.text && this.text.toJSON(),
			contained: this.contained,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			_type: this._type && this._type.toJSON(),
			type: this.type,
			_coordinateSystem: this._coordinateSystem && this._coordinateSystem.toJSON(),
			coordinateSystem: this.coordinateSystem,
			patient: this.patient && this.patient.toJSON(),
			specimen: this.specimen && this.specimen.toJSON(),
			device: this.device && this.device.toJSON(),
			performer: this.performer && this.performer.toJSON(),
			quantity: this.quantity && this.quantity.toJSON(),
			referenceSeq: this.referenceSeq && this.referenceSeq.toJSON(),
			variant: this.variant && this.variant.map(v => v.toJSON()),
			_observedSeq: this._observedSeq && this._observedSeq.toJSON(),
			observedSeq: this.observedSeq,
			quality: this.quality && this.quality.map(v => v.toJSON()),
			_readCoverage: this._readCoverage && this._readCoverage.toJSON(),
			readCoverage: this.readCoverage,
			repository: this.repository && this.repository.map(v => v.toJSON()),
			pointer: this.pointer && this.pointer.map(v => v.toJSON()),
			structureVariant: this.structureVariant && this.structureVariant.map(v => v.toJSON()),
		};
	}
};
