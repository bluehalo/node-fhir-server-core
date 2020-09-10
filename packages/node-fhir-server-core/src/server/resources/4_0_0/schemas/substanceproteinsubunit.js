/**
 * @name exports
 * @summary SubstanceProteinSubunit Class
 */
module.exports = class SubstanceProteinSubunit {
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

		Object.defineProperty(this, '_subunit', {
			enumerable: true,
			get: () => this.__data._subunit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._subunit = new Element(value);
			},
		});

		Object.defineProperty(this, 'subunit', {
			enumerable: true,
			get: () => this.__data.subunit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.subunit = value;
			},
		});

		Object.defineProperty(this, '_sequence', {
			enumerable: true,
			get: () => this.__data._sequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sequence = new Element(value);
			},
		});

		Object.defineProperty(this, 'sequence', {
			enumerable: true,
			get: () => this.__data.sequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sequence = value;
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

		Object.defineProperty(this, 'sequenceAttachment', {
			enumerable: true,
			get: () => this.__data.sequenceAttachment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Attachment = require('./attachment.js');
				this.__data.sequenceAttachment = new Attachment(value);
			},
		});

		Object.defineProperty(this, 'nTerminalModificationId', {
			enumerable: true,
			get: () => this.__data.nTerminalModificationId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.nTerminalModificationId = new Identifier(value);
			},
		});

		Object.defineProperty(this, '_nTerminalModification', {
			enumerable: true,
			get: () => this.__data._nTerminalModification,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._nTerminalModification = new Element(value);
			},
		});

		Object.defineProperty(this, 'nTerminalModification', {
			enumerable: true,
			get: () => this.__data.nTerminalModification,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.nTerminalModification = value;
			},
		});

		Object.defineProperty(this, 'cTerminalModificationId', {
			enumerable: true,
			get: () => this.__data.cTerminalModificationId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.cTerminalModificationId = new Identifier(value);
			},
		});

		Object.defineProperty(this, '_cTerminalModification', {
			enumerable: true,
			get: () => this.__data._cTerminalModification,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._cTerminalModification = new Element(value);
			},
		});

		Object.defineProperty(this, 'cTerminalModification', {
			enumerable: true,
			get: () => this.__data.cTerminalModification,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.cTerminalModification = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstanceProteinSubunit',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstanceProteinSubunit';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_subunit: this._subunit && this._subunit.toJSON(),
			subunit: this.subunit,
			_sequence: this._sequence && this._sequence.toJSON(),
			sequence: this.sequence,
			_length: this._length && this._length.toJSON(),
			length: this.length,
			sequenceAttachment: this.sequenceAttachment && this.sequenceAttachment.toJSON(),
			nTerminalModificationId: this.nTerminalModificationId && this.nTerminalModificationId.toJSON(),
			_nTerminalModification: this._nTerminalModification && this._nTerminalModification.toJSON(),
			nTerminalModification: this.nTerminalModification,
			cTerminalModificationId: this.cTerminalModificationId && this.cTerminalModificationId.toJSON(),
			_cTerminalModification: this._cTerminalModification && this._cTerminalModification.toJSON(),
			cTerminalModification: this.cTerminalModification,
		};
	}
};
