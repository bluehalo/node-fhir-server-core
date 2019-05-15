/**
 * @name exports
 * @summary Conformance Class
 */
module.exports = class Conformance {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/conformance-resource-status
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

				let ConformanceContact = require('./conformancecontact.js');
				this.__data.contact = Array.isArray(value)
					? value.map(v => new ConformanceContact(v))
					: [new ConformanceContact(value)];
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

		Object.defineProperty(this, '_requirements', {
			enumerable: true,
			get: () => this.__data._requirements,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._requirements = new Element(value);
			},
		});

		Object.defineProperty(this, 'requirements', {
			enumerable: true,
			get: () => this.__data.requirements,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.requirements = value;
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

		Object.defineProperty(this, '_kind', {
			enumerable: true,
			get: () => this.__data._kind,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._kind = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/conformance-statement-kind
		Object.defineProperty(this, 'kind', {
			enumerable: true,
			get: () => this.__data.kind,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.kind = value;
			},
		});

		Object.defineProperty(this, 'software', {
			enumerable: true,
			get: () => this.__data.software,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConformanceSoftware = require('./conformancesoftware.js');
				this.__data.software = new ConformanceSoftware(value);
			},
		});

		Object.defineProperty(this, 'implementation', {
			enumerable: true,
			get: () => this.__data.implementation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConformanceImplementation = require('./conformanceimplementation.js');
				this.__data.implementation = new ConformanceImplementation(value);
			},
		});

		Object.defineProperty(this, '_fhirVersion', {
			enumerable: true,
			get: () => this.__data._fhirVersion,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fhirVersion = new Element(value);
			},
		});

		Object.defineProperty(this, 'fhirVersion', {
			enumerable: true,
			get: () => this.__data.fhirVersion,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fhirVersion = value;
			},
		});

		Object.defineProperty(this, '_acceptUnknown', {
			enumerable: true,
			get: () => this.__data._acceptUnknown,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._acceptUnknown = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/unknown-content-code
		Object.defineProperty(this, 'acceptUnknown', {
			enumerable: true,
			get: () => this.__data.acceptUnknown,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.acceptUnknown = value;
			},
		});

		Object.defineProperty(this, '_format', {
			enumerable: true,
			get: () => this.__data._format,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._format = new Element(value);
			},
		});

		Object.defineProperty(this, 'format', {
			enumerable: true,
			get: () => this.__data.format,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.format = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'profile', {
			enumerable: true,
			get: () => this.__data.profile,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.profile = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'rest', {
			enumerable: true,
			get: () => this.__data.rest,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConformanceRest = require('./conformancerest.js');
				this.__data.rest = Array.isArray(value) ? value.map(v => new ConformanceRest(v)) : [new ConformanceRest(value)];
			},
		});

		Object.defineProperty(this, 'messaging', {
			enumerable: true,
			get: () => this.__data.messaging,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConformanceMessaging = require('./conformancemessaging.js');
				this.__data.messaging = Array.isArray(value)
					? value.map(v => new ConformanceMessaging(v))
					: [new ConformanceMessaging(value)];
			},
		});

		Object.defineProperty(this, 'document', {
			enumerable: true,
			get: () => this.__data.document,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConformanceDocument = require('./conformancedocument.js');
				this.__data.document = Array.isArray(value)
					? value.map(v => new ConformanceDocument(v))
					: [new ConformanceDocument(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Conformance',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Conformance';
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
			_version: this._version && this._version.toJSON(),
			version: this.version,
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_status: this._status && this._status.toJSON(),
			status: this.status,
			_experimental: this._experimental && this._experimental.toJSON(),
			experimental: this.experimental,
			_publisher: this._publisher && this._publisher.toJSON(),
			publisher: this.publisher,
			contact: this.contact && this.contact.map(v => v.toJSON()),
			_date: this._date && this._date.toJSON(),
			date: this.date,
			_description: this._description && this._description.toJSON(),
			description: this.description,
			_requirements: this._requirements && this._requirements.toJSON(),
			requirements: this.requirements,
			_copyright: this._copyright && this._copyright.toJSON(),
			copyright: this.copyright,
			_kind: this._kind && this._kind.toJSON(),
			kind: this.kind,
			software: this.software && this.software.toJSON(),
			implementation: this.implementation && this.implementation.toJSON(),
			_fhirVersion: this._fhirVersion && this._fhirVersion.toJSON(),
			fhirVersion: this.fhirVersion,
			_acceptUnknown: this._acceptUnknown && this._acceptUnknown.toJSON(),
			acceptUnknown: this.acceptUnknown,
			_format: this._format && this._format.toJSON(),
			format: this.format,
			profile: this.profile && this.profile.map(v => v.toJSON()),
			rest: this.rest && this.rest.map(v => v.toJSON()),
			messaging: this.messaging && this.messaging.map(v => v.toJSON()),
			document: this.document && this.document.map(v => v.toJSON()),
		};
	}
};
