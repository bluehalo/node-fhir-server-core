/**
 * @name exports
 * @summary MolecularSequenceStructureVariant Class
 */
module.exports = class MolecularSequenceStructureVariant {
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

		Object.defineProperty(this, 'variantType', {
			enumerable: true,
			get: () => this.__data.variantType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.variantType = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_exact', {
			enumerable: true,
			get: () => this.__data._exact,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._exact = new Element(value);
			},
		});

		Object.defineProperty(this, 'exact', {
			enumerable: true,
			get: () => this.__data.exact,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.exact = value;
			},
		});

		Object.defineProperty(this, '_length', {
			enumerable: true,
			get: () => this.__data._length,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._length = new Element(value);
			},
		});

		Object.defineProperty(this, 'length', {
			enumerable: true,
			get: () => this.__data.length,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.length = value;
			},
		});

		Object.defineProperty(this, 'outer', {
			enumerable: true,
			get: () => this.__data.outer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MolecularSequenceStructureVariantOuter = require('./molecularsequencestructurevariantouter.js');
				this.__data.outer = new MolecularSequenceStructureVariantOuter(value);
			},
		});

		Object.defineProperty(this, 'inner', {
			enumerable: true,
			get: () => this.__data.inner,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MolecularSequenceStructureVariantInner = require('./molecularsequencestructurevariantinner.js');
				this.__data.inner = new MolecularSequenceStructureVariantInner(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MolecularSequenceStructureVariant',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MolecularSequenceStructureVariant';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			variantType: this.variantType && this.variantType.toJSON(),
			_exact: this._exact && this._exact.toJSON(),
			exact: this.exact,
			_length: this._length && this._length.toJSON(),
			length: this.length,
			outer: this.outer && this.outer.toJSON(),
			inner: this.inner && this.inner.toJSON(),
		};
	}
};
