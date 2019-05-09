/**
 * @name exports
 * @summary MessageDefinition Class
 */
module.exports = class MessageDefinition {
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

		Object.defineProperty(this, '_url', {
			enumerable: true,
			get: () => this.__data._url,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._url = new Element(value);
			},
		});

		Object.defineProperty(this, 'url', {
			enumerable: true,
			get: () => this.__data.url,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.url = value;
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

		Object.defineProperty(this, '_version', {
			enumerable: true,
			get: () => this.__data._version,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._version = new Element(value);
			},
		});

		Object.defineProperty(this, 'version', {
			enumerable: true,
			get: () => this.__data.version,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.version = value;
			},
		});

		Object.defineProperty(this, '_name', {
			enumerable: true,
			get: () => this.__data._name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._name = new Element(value);
			},
		});

		Object.defineProperty(this, 'name', {
			enumerable: true,
			get: () => this.__data.name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.name = value;
			},
		});

		Object.defineProperty(this, '_title', {
			enumerable: true,
			get: () => this.__data._title,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._title = new Element(value);
			},
		});

		Object.defineProperty(this, 'title', {
			enumerable: true,
			get: () => this.__data.title,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.title = value;
			},
		});

		Object.defineProperty(this, '_replaces', {
			enumerable: true,
			get: () => this.__data._replaces,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._replaces = new Element(value);
			},
		});

		Object.defineProperty(this, 'replaces', {
			enumerable: true,
			get: () => this.__data.replaces,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.replaces = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_status', {
			enumerable: true,
			get: () => this.__data._status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._status = new Element(value);
			},
		});

		Object.defineProperty(this, 'status', {
			enumerable: true,
			get: () => this.__data.status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.status = value;
			},
		});

		Object.defineProperty(this, '_experimental', {
			enumerable: true,
			get: () => this.__data._experimental,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._experimental = new Element(value);
			},
		});

		Object.defineProperty(this, 'experimental', {
			enumerable: true,
			get: () => this.__data.experimental,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.experimental = value;
			},
		});

		Object.defineProperty(this, '_date', {
			enumerable: true,
			get: () => this.__data._date,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._date = new Element(value);
			},
		});

		Object.defineProperty(this, 'date', {
			enumerable: true,
			get: () => this.__data.date,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.date = value;
			},
		});

		Object.defineProperty(this, '_publisher', {
			enumerable: true,
			get: () => this.__data._publisher,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._publisher = new Element(value);
			},
		});

		Object.defineProperty(this, 'publisher', {
			enumerable: true,
			get: () => this.__data.publisher,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.publisher = value;
			},
		});

		Object.defineProperty(this, 'contact', {
			enumerable: true,
			get: () => this.__data.contact,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContactDetail = require('./contactdetail.js');
				this.__data.contact = Array.isArray(value) ? value.map(v => new ContactDetail(v)) : [new ContactDetail(value)];
			},
		});

		Object.defineProperty(this, '_description', {
			enumerable: true,
			get: () => this.__data._description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._description = new Element(value);
			},
		});

		Object.defineProperty(this, 'description', {
			enumerable: true,
			get: () => this.__data.description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.description = value;
			},
		});

		Object.defineProperty(this, 'useContext', {
			enumerable: true,
			get: () => this.__data.useContext,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let UsageContext = require('./usagecontext.js');
				this.__data.useContext = Array.isArray(value) ? value.map(v => new UsageContext(v)) : [new UsageContext(value)];
			},
		});

		Object.defineProperty(this, 'jurisdiction', {
			enumerable: true,
			get: () => this.__data.jurisdiction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.jurisdiction = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, '_purpose', {
			enumerable: true,
			get: () => this.__data._purpose,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._purpose = new Element(value);
			},
		});

		Object.defineProperty(this, 'purpose', {
			enumerable: true,
			get: () => this.__data.purpose,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.purpose = value;
			},
		});

		Object.defineProperty(this, '_copyright', {
			enumerable: true,
			get: () => this.__data._copyright,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._copyright = new Element(value);
			},
		});

		Object.defineProperty(this, 'copyright', {
			enumerable: true,
			get: () => this.__data.copyright,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.copyright = value;
			},
		});

		Object.defineProperty(this, '_base', {
			enumerable: true,
			get: () => this.__data._base,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._base = new Element(value);
			},
		});

		Object.defineProperty(this, 'base', {
			enumerable: true,
			get: () => this.__data.base,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.base = value;
			},
		});

		Object.defineProperty(this, '_parent', {
			enumerable: true,
			get: () => this.__data._parent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._parent = new Element(value);
			},
		});

		Object.defineProperty(this, 'parent', {
			enumerable: true,
			get: () => this.__data.parent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.parent = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'eventCoding', {
			enumerable: true,
			get: () => this.__data.eventCoding,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.eventCoding = new Coding(value);
			},
		});

		Object.defineProperty(this, '_eventUri', {
			enumerable: true,
			get: () => this.__data._eventUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._eventUri = new Element(value);
			},
		});

		Object.defineProperty(this, 'eventUri', {
			enumerable: true,
			get: () => this.__data.eventUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.eventUri = value;
			},
		});

		Object.defineProperty(this, '_category', {
			enumerable: true,
			get: () => this.__data._category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._category = new Element(value);
			},
		});

		Object.defineProperty(this, 'category', {
			enumerable: true,
			get: () => this.__data.category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.category = value;
			},
		});

		Object.defineProperty(this, 'focus', {
			enumerable: true,
			get: () => this.__data.focus,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MessageDefinitionFocus = require('./messagedefinitionfocus.js');
				this.__data.focus = Array.isArray(value)
					? value.map(v => new MessageDefinitionFocus(v))
					: [new MessageDefinitionFocus(value)];
			},
		});

		Object.defineProperty(this, '_responseRequired', {
			enumerable: true,
			get: () => this.__data._responseRequired,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._responseRequired = new Element(value);
			},
		});

		Object.defineProperty(this, 'responseRequired', {
			enumerable: true,
			get: () => this.__data.responseRequired,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.responseRequired = value;
			},
		});

		Object.defineProperty(this, 'allowedResponse', {
			enumerable: true,
			get: () => this.__data.allowedResponse,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MessageDefinitionAllowedResponse = require('./messagedefinitionallowedresponse.js');
				this.__data.allowedResponse = Array.isArray(value)
					? value.map(v => new MessageDefinitionAllowedResponse(v))
					: [new MessageDefinitionAllowedResponse(value)];
			},
		});

		Object.defineProperty(this, '_graph', {
			enumerable: true,
			get: () => this.__data._graph,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._graph = new Element(value);
			},
		});

		Object.defineProperty(this, 'graph', {
			enumerable: true,
			get: () => this.__data.graph,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.graph = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MessageDefinition',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MessageDefinition';
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
			_url: this._url && this._url.toJSON(),
			url: this.url,
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			_version: this._version && this._version.toJSON(),
			version: this.version,
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_title: this._title && this._title.toJSON(),
			title: this.title,
			_replaces: this._replaces && this._replaces.toJSON(),
			replaces: this.replaces,
			_status: this._status && this._status.toJSON(),
			status: this.status,
			_experimental: this._experimental && this._experimental.toJSON(),
			experimental: this.experimental,
			_date: this._date && this._date.toJSON(),
			date: this.date,
			_publisher: this._publisher && this._publisher.toJSON(),
			publisher: this.publisher,
			contact: this.contact && this.contact.map(v => v.toJSON()),
			_description: this._description && this._description.toJSON(),
			description: this.description,
			useContext: this.useContext && this.useContext.map(v => v.toJSON()),
			jurisdiction: this.jurisdiction && this.jurisdiction.map(v => v.toJSON()),
			_purpose: this._purpose && this._purpose.toJSON(),
			purpose: this.purpose,
			_copyright: this._copyright && this._copyright.toJSON(),
			copyright: this.copyright,
			_base: this._base && this._base.toJSON(),
			base: this.base,
			_parent: this._parent && this._parent.toJSON(),
			parent: this.parent,
			eventCoding: this.eventCoding && this.eventCoding.toJSON(),
			_eventUri: this._eventUri && this._eventUri.toJSON(),
			eventUri: this.eventUri,
			_category: this._category && this._category.toJSON(),
			category: this.category,
			focus: this.focus && this.focus.map(v => v.toJSON()),
			_responseRequired: this._responseRequired && this._responseRequired.toJSON(),
			responseRequired: this.responseRequired,
			allowedResponse: this.allowedResponse && this.allowedResponse.map(v => v.toJSON()),
			_graph: this._graph && this._graph.toJSON(),
			graph: this.graph,
		};
	}
};
