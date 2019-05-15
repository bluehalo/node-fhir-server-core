/**
 * @name exports
 * @summary TerminologyCapabilitiesExpansion Class
 */
module.exports = class TerminologyCapabilitiesExpansion {
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

		Object.defineProperty(this, '_hierarchical', {
			enumerable: true,
			get: () => this.__data._hierarchical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._hierarchical = new Element(value);
			},
		});

		Object.defineProperty(this, 'hierarchical', {
			enumerable: true,
			get: () => this.__data.hierarchical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.hierarchical = value;
			},
		});

		Object.defineProperty(this, '_paging', {
			enumerable: true,
			get: () => this.__data._paging,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._paging = new Element(value);
			},
		});

		Object.defineProperty(this, 'paging', {
			enumerable: true,
			get: () => this.__data.paging,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.paging = value;
			},
		});

		Object.defineProperty(this, '_incomplete', {
			enumerable: true,
			get: () => this.__data._incomplete,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._incomplete = new Element(value);
			},
		});

		Object.defineProperty(this, 'incomplete', {
			enumerable: true,
			get: () => this.__data.incomplete,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.incomplete = value;
			},
		});

		Object.defineProperty(this, 'parameter', {
			enumerable: true,
			get: () => this.__data.parameter,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TerminologyCapabilitiesExpansionParameter = require('./terminologycapabilitiesexpansionparameter.js');
				this.__data.parameter = Array.isArray(value)
					? value.map(v => new TerminologyCapabilitiesExpansionParameter(v))
					: [new TerminologyCapabilitiesExpansionParameter(value)];
			},
		});

		Object.defineProperty(this, '_textFilter', {
			enumerable: true,
			get: () => this.__data._textFilter,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._textFilter = new Element(value);
			},
		});

		Object.defineProperty(this, 'textFilter', {
			enumerable: true,
			get: () => this.__data.textFilter,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.textFilter = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'TerminologyCapabilitiesExpansion',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'TerminologyCapabilitiesExpansion';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_hierarchical: this._hierarchical && this._hierarchical.toJSON(),
			hierarchical: this.hierarchical,
			_paging: this._paging && this._paging.toJSON(),
			paging: this.paging,
			_incomplete: this._incomplete && this._incomplete.toJSON(),
			incomplete: this.incomplete,
			parameter: this.parameter && this.parameter.map(v => v.toJSON()),
			_textFilter: this._textFilter && this._textFilter.toJSON(),
			textFilter: this.textFilter,
		};
	}
};
