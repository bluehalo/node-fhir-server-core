/**
 * @name exports
 * @summary ImplementationGuideDefinition Class
 */
module.exports = class ImplementationGuideDefinition {
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

		Object.defineProperty(this, 'grouping', {
			enumerable: true,
			get: () => this.__data.grouping,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImplementationGuideDefinitionGrouping = require('./implementationguidedefinitiongrouping.js');
				this.__data.grouping = Array.isArray(value)
					? value.map(v => new ImplementationGuideDefinitionGrouping(v))
					: [new ImplementationGuideDefinitionGrouping(value)];
			},
		});

		Object.defineProperty(this, 'resource', {
			enumerable: true,
			get: () => this.__data.resource,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImplementationGuideDefinitionResource = require('./implementationguidedefinitionresource.js');
				this.__data.resource = Array.isArray(value)
					? value.map(v => new ImplementationGuideDefinitionResource(v))
					: [new ImplementationGuideDefinitionResource(value)];
			},
		});

		Object.defineProperty(this, 'page', {
			enumerable: true,
			get: () => this.__data.page,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImplementationGuideDefinitionPage = require('./implementationguidedefinitionpage.js');
				this.__data.page = new ImplementationGuideDefinitionPage(value);
			},
		});

		Object.defineProperty(this, 'parameter', {
			enumerable: true,
			get: () => this.__data.parameter,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImplementationGuideDefinitionParameter = require('./implementationguidedefinitionparameter.js');
				this.__data.parameter = Array.isArray(value)
					? value.map(v => new ImplementationGuideDefinitionParameter(v))
					: [new ImplementationGuideDefinitionParameter(value)];
			},
		});

		Object.defineProperty(this, 'template', {
			enumerable: true,
			get: () => this.__data.template,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImplementationGuideDefinitionTemplate = require('./implementationguidedefinitiontemplate.js');
				this.__data.template = Array.isArray(value)
					? value.map(v => new ImplementationGuideDefinitionTemplate(v))
					: [new ImplementationGuideDefinitionTemplate(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ImplementationGuideDefinition',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ImplementationGuideDefinition';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			grouping: this.grouping && this.grouping.map(v => v.toJSON()),
			resource: this.resource && this.resource.map(v => v.toJSON()),
			page: this.page && this.page.toJSON(),
			parameter: this.parameter && this.parameter.map(v => v.toJSON()),
			template: this.template && this.template.map(v => v.toJSON()),
		};
	}
};
