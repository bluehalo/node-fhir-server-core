/**
 * @name exports
 * @summary GraphDefinitionLinkTarget Class
 */
module.exports = class GraphDefinitionLinkTarget {
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

		Object.defineProperty(this, '_params', {
			enumerable: true,
			get: () => this.__data._params,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._params = new Element(value);
			},
		});

		Object.defineProperty(this, 'params', {
			enumerable: true,
			get: () => this.__data.params,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.params = value;
			},
		});

		Object.defineProperty(this, '_profile', {
			enumerable: true,
			get: () => this.__data._profile,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._profile = new Element(value);
			},
		});

		Object.defineProperty(this, 'profile', {
			enumerable: true,
			get: () => this.__data.profile,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.profile = value;
			},
		});

		Object.defineProperty(this, 'compartment', {
			enumerable: true,
			get: () => this.__data.compartment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let GraphDefinitionLinkTargetCompartment = require('./graphdefinitionlinktargetcompartment.js');
				this.__data.compartment = Array.isArray(value)
					? value.map(v => new GraphDefinitionLinkTargetCompartment(v))
					: [new GraphDefinitionLinkTargetCompartment(value)];
			},
		});

		Object.defineProperty(this, 'link', {
			enumerable: true,
			get: () => this.__data.link,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let GraphDefinitionLink = require('./graphdefinitionlink.js');
				this.__data.link = Array.isArray(value)
					? value.map(v => new GraphDefinitionLink(v))
					: [new GraphDefinitionLink(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'GraphDefinitionLinkTarget',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'GraphDefinitionLinkTarget';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_type: this._type && this._type.toJSON(),
			type: this.type,
			_params: this._params && this._params.toJSON(),
			params: this.params,
			_profile: this._profile && this._profile.toJSON(),
			profile: this.profile,
			compartment: this.compartment && this.compartment.map(v => v.toJSON()),
			link: this.link && this.link.map(v => v.toJSON()),
		};
	}
};
