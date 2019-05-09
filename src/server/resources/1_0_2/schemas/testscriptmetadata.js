/**
 * @name exports
 * @summary TestScriptMetadata Class
 */
module.exports = class TestScriptMetadata {
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

		Object.defineProperty(this, 'link', {
			enumerable: true,
			get: () => this.__data.link,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TestScriptMetadataLink = require('./testscriptmetadatalink.js');
				this.__data.link = Array.isArray(value)
					? value.map(v => new TestScriptMetadataLink(v))
					: [new TestScriptMetadataLink(value)];
			},
		});

		Object.defineProperty(this, 'capability', {
			enumerable: true,
			get: () => this.__data.capability,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TestScriptMetadataCapability = require('./testscriptmetadatacapability.js');
				this.__data.capability = Array.isArray(value)
					? value.map(v => new TestScriptMetadataCapability(v))
					: [new TestScriptMetadataCapability(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'TestScriptMetadata',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'TestScriptMetadata';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			link: this.link && this.link.map(v => v.toJSON()),
			capability: this.capability && this.capability.map(v => v.toJSON()),
		};
	}
};
