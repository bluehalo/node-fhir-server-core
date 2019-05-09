/**
 * @name exports
 * @summary SearchParameter Class
 */
module.exports = class SearchParameter {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/publication-status
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
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

		Object.defineProperty(this, '_code', {
			enumerable: true,
			get: () => this.__data._code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._code = new Element(value);
			},
		});

		Object.defineProperty(this, 'code', {
			enumerable: true,
			get: () => this.__data.code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.code = value;
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		Object.defineProperty(this, 'base', {
			enumerable: true,
			get: () => this.__data.base,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.base = Array.isArray(value) ? value.map(v => v) : [value];
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/search-param-type
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

		Object.defineProperty(this, '_derivedFrom', {
			enumerable: true,
			get: () => this.__data._derivedFrom,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._derivedFrom = new Element(value);
			},
		});

		Object.defineProperty(this, 'derivedFrom', {
			enumerable: true,
			get: () => this.__data.derivedFrom,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.derivedFrom = value;
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

		Object.defineProperty(this, '_expression', {
			enumerable: true,
			get: () => this.__data._expression,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._expression = new Element(value);
			},
		});

		Object.defineProperty(this, 'expression', {
			enumerable: true,
			get: () => this.__data.expression,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.expression = value;
			},
		});

		Object.defineProperty(this, '_xpath', {
			enumerable: true,
			get: () => this.__data._xpath,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._xpath = new Element(value);
			},
		});

		Object.defineProperty(this, 'xpath', {
			enumerable: true,
			get: () => this.__data.xpath,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.xpath = value;
			},
		});

		Object.defineProperty(this, '_xpathUsage', {
			enumerable: true,
			get: () => this.__data._xpathUsage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._xpathUsage = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/search-xpath-usage
		Object.defineProperty(this, 'xpathUsage', {
			enumerable: true,
			get: () => this.__data.xpathUsage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.xpathUsage = value;
			},
		});

		Object.defineProperty(this, '_target', {
			enumerable: true,
			get: () => this.__data._target,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._target = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		Object.defineProperty(this, 'target', {
			enumerable: true,
			get: () => this.__data.target,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.target = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_comparator', {
			enumerable: true,
			get: () => this.__data._comparator,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._comparator = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/search-comparator
		Object.defineProperty(this, 'comparator', {
			enumerable: true,
			get: () => this.__data.comparator,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.comparator = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_modifier', {
			enumerable: true,
			get: () => this.__data._modifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._modifier = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/search-modifier-code
		Object.defineProperty(this, 'modifier', {
			enumerable: true,
			get: () => this.__data.modifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.modifier = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_chain', {
			enumerable: true,
			get: () => this.__data._chain,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._chain = new Element(value);
			},
		});

		Object.defineProperty(this, 'chain', {
			enumerable: true,
			get: () => this.__data.chain,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.chain = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'component', {
			enumerable: true,
			get: () => this.__data.component,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SearchParameterComponent = require('./searchparametercomponent.js');
				this.__data.component = Array.isArray(value)
					? value.map(v => new SearchParameterComponent(v))
					: [new SearchParameterComponent(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SearchParameter',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SearchParameter';
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
			_date: this._date && this._date.toJSON(),
			date: this.date,
			_publisher: this._publisher && this._publisher.toJSON(),
			publisher: this.publisher,
			contact: this.contact && this.contact.map(v => v.toJSON()),
			useContext: this.useContext && this.useContext.map(v => v.toJSON()),
			jurisdiction: this.jurisdiction && this.jurisdiction.map(v => v.toJSON()),
			_purpose: this._purpose && this._purpose.toJSON(),
			purpose: this.purpose,
			_code: this._code && this._code.toJSON(),
			code: this.code,
			_base: this._base && this._base.toJSON(),
			base: this.base,
			_type: this._type && this._type.toJSON(),
			type: this.type,
			_derivedFrom: this._derivedFrom && this._derivedFrom.toJSON(),
			derivedFrom: this.derivedFrom,
			_description: this._description && this._description.toJSON(),
			description: this.description,
			_expression: this._expression && this._expression.toJSON(),
			expression: this.expression,
			_xpath: this._xpath && this._xpath.toJSON(),
			xpath: this.xpath,
			_xpathUsage: this._xpathUsage && this._xpathUsage.toJSON(),
			xpathUsage: this.xpathUsage,
			_target: this._target && this._target.toJSON(),
			target: this.target,
			_comparator: this._comparator && this._comparator.toJSON(),
			comparator: this.comparator,
			_modifier: this._modifier && this._modifier.toJSON(),
			modifier: this.modifier,
			_chain: this._chain && this._chain.toJSON(),
			chain: this.chain,
			component: this.component && this.component.map(v => v.toJSON()),
		};
	}
};
