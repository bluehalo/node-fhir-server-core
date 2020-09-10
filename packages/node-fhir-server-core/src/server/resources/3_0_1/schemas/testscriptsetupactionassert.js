/**
 * @name exports
 * @summary TestScriptSetupActionAssert Class
 */
module.exports = class TestScriptSetupActionAssert {
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

		Object.defineProperty(this, '_label', {
			enumerable: true,
			get: () => this.__data._label,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._label = new Element(value);
			},
		});

		Object.defineProperty(this, 'label', {
			enumerable: true,
			get: () => this.__data.label,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.label = value;
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

		Object.defineProperty(this, '_direction', {
			enumerable: true,
			get: () => this.__data._direction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._direction = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/assert-direction-codes
		Object.defineProperty(this, 'direction', {
			enumerable: true,
			get: () => this.__data.direction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.direction = value;
			},
		});

		Object.defineProperty(this, '_compareToSourceId', {
			enumerable: true,
			get: () => this.__data._compareToSourceId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._compareToSourceId = new Element(value);
			},
		});

		Object.defineProperty(this, 'compareToSourceId', {
			enumerable: true,
			get: () => this.__data.compareToSourceId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.compareToSourceId = value;
			},
		});

		Object.defineProperty(this, '_compareToSourceExpression', {
			enumerable: true,
			get: () => this.__data._compareToSourceExpression,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._compareToSourceExpression = new Element(value);
			},
		});

		Object.defineProperty(this, 'compareToSourceExpression', {
			enumerable: true,
			get: () => this.__data.compareToSourceExpression,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.compareToSourceExpression = value;
			},
		});

		Object.defineProperty(this, '_compareToSourcePath', {
			enumerable: true,
			get: () => this.__data._compareToSourcePath,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._compareToSourcePath = new Element(value);
			},
		});

		Object.defineProperty(this, 'compareToSourcePath', {
			enumerable: true,
			get: () => this.__data.compareToSourcePath,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.compareToSourcePath = value;
			},
		});

		Object.defineProperty(this, '_contentType', {
			enumerable: true,
			get: () => this.__data._contentType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._contentType = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/content-type
		Object.defineProperty(this, 'contentType', {
			enumerable: true,
			get: () => this.__data.contentType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contentType = value;
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

		Object.defineProperty(this, '_headerField', {
			enumerable: true,
			get: () => this.__data._headerField,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._headerField = new Element(value);
			},
		});

		Object.defineProperty(this, 'headerField', {
			enumerable: true,
			get: () => this.__data.headerField,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.headerField = value;
			},
		});

		Object.defineProperty(this, '_minimumId', {
			enumerable: true,
			get: () => this.__data._minimumId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._minimumId = new Element(value);
			},
		});

		Object.defineProperty(this, 'minimumId', {
			enumerable: true,
			get: () => this.__data.minimumId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.minimumId = value;
			},
		});

		Object.defineProperty(this, '_navigationLinks', {
			enumerable: true,
			get: () => this.__data._navigationLinks,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._navigationLinks = new Element(value);
			},
		});

		Object.defineProperty(this, 'navigationLinks', {
			enumerable: true,
			get: () => this.__data.navigationLinks,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.navigationLinks = value;
			},
		});

		Object.defineProperty(this, '_operator', {
			enumerable: true,
			get: () => this.__data._operator,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._operator = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/assert-operator-codes
		Object.defineProperty(this, 'operator', {
			enumerable: true,
			get: () => this.__data.operator,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.operator = value;
			},
		});

		Object.defineProperty(this, '_path', {
			enumerable: true,
			get: () => this.__data._path,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._path = new Element(value);
			},
		});

		Object.defineProperty(this, 'path', {
			enumerable: true,
			get: () => this.__data.path,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.path = value;
			},
		});

		Object.defineProperty(this, '_requestMethod', {
			enumerable: true,
			get: () => this.__data._requestMethod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._requestMethod = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/http-operations
		Object.defineProperty(this, 'requestMethod', {
			enumerable: true,
			get: () => this.__data.requestMethod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.requestMethod = value;
			},
		});

		Object.defineProperty(this, '_requestURL', {
			enumerable: true,
			get: () => this.__data._requestURL,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._requestURL = new Element(value);
			},
		});

		Object.defineProperty(this, 'requestURL', {
			enumerable: true,
			get: () => this.__data.requestURL,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.requestURL = value;
			},
		});

		Object.defineProperty(this, '_resource', {
			enumerable: true,
			get: () => this.__data._resource,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._resource = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/defined-types
		Object.defineProperty(this, 'resource', {
			enumerable: true,
			get: () => this.__data.resource,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.resource = value;
			},
		});

		Object.defineProperty(this, '_response', {
			enumerable: true,
			get: () => this.__data._response,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._response = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/assert-response-code-types
		Object.defineProperty(this, 'response', {
			enumerable: true,
			get: () => this.__data.response,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.response = value;
			},
		});

		Object.defineProperty(this, '_responseCode', {
			enumerable: true,
			get: () => this.__data._responseCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._responseCode = new Element(value);
			},
		});

		Object.defineProperty(this, 'responseCode', {
			enumerable: true,
			get: () => this.__data.responseCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.responseCode = value;
			},
		});

		Object.defineProperty(this, 'rule', {
			enumerable: true,
			get: () => this.__data.rule,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TestScriptSetupActionAssertRule = require('./testscriptsetupactionassertrule.js');
				this.__data.rule = new TestScriptSetupActionAssertRule(value);
			},
		});

		Object.defineProperty(this, 'ruleset', {
			enumerable: true,
			get: () => this.__data.ruleset,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TestScriptSetupActionAssertRuleset = require('./testscriptsetupactionassertruleset.js');
				this.__data.ruleset = new TestScriptSetupActionAssertRuleset(value);
			},
		});

		Object.defineProperty(this, '_sourceId', {
			enumerable: true,
			get: () => this.__data._sourceId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sourceId = new Element(value);
			},
		});

		Object.defineProperty(this, 'sourceId', {
			enumerable: true,
			get: () => this.__data.sourceId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sourceId = value;
			},
		});

		Object.defineProperty(this, '_validateProfileId', {
			enumerable: true,
			get: () => this.__data._validateProfileId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._validateProfileId = new Element(value);
			},
		});

		Object.defineProperty(this, 'validateProfileId', {
			enumerable: true,
			get: () => this.__data.validateProfileId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.validateProfileId = value;
			},
		});

		Object.defineProperty(this, '_value', {
			enumerable: true,
			get: () => this.__data._value,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._value = new Element(value);
			},
		});

		Object.defineProperty(this, 'value', {
			enumerable: true,
			get: () => this.__data.value,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.value = value;
			},
		});

		Object.defineProperty(this, '_warningOnly', {
			enumerable: true,
			get: () => this.__data._warningOnly,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._warningOnly = new Element(value);
			},
		});

		Object.defineProperty(this, 'warningOnly', {
			enumerable: true,
			get: () => this.__data.warningOnly,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.warningOnly = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'TestScriptSetupActionAssert',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'TestScriptSetupActionAssert';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_label: this._label && this._label.toJSON(),
			label: this.label,
			_description: this._description && this._description.toJSON(),
			description: this.description,
			_direction: this._direction && this._direction.toJSON(),
			direction: this.direction,
			_compareToSourceId: this._compareToSourceId && this._compareToSourceId.toJSON(),
			compareToSourceId: this.compareToSourceId,
			_compareToSourceExpression: this._compareToSourceExpression && this._compareToSourceExpression.toJSON(),
			compareToSourceExpression: this.compareToSourceExpression,
			_compareToSourcePath: this._compareToSourcePath && this._compareToSourcePath.toJSON(),
			compareToSourcePath: this.compareToSourcePath,
			_contentType: this._contentType && this._contentType.toJSON(),
			contentType: this.contentType,
			_expression: this._expression && this._expression.toJSON(),
			expression: this.expression,
			_headerField: this._headerField && this._headerField.toJSON(),
			headerField: this.headerField,
			_minimumId: this._minimumId && this._minimumId.toJSON(),
			minimumId: this.minimumId,
			_navigationLinks: this._navigationLinks && this._navigationLinks.toJSON(),
			navigationLinks: this.navigationLinks,
			_operator: this._operator && this._operator.toJSON(),
			operator: this.operator,
			_path: this._path && this._path.toJSON(),
			path: this.path,
			_requestMethod: this._requestMethod && this._requestMethod.toJSON(),
			requestMethod: this.requestMethod,
			_requestURL: this._requestURL && this._requestURL.toJSON(),
			requestURL: this.requestURL,
			_resource: this._resource && this._resource.toJSON(),
			resource: this.resource,
			_response: this._response && this._response.toJSON(),
			response: this.response,
			_responseCode: this._responseCode && this._responseCode.toJSON(),
			responseCode: this.responseCode,
			rule: this.rule && this.rule.toJSON(),
			ruleset: this.ruleset && this.ruleset.toJSON(),
			_sourceId: this._sourceId && this._sourceId.toJSON(),
			sourceId: this.sourceId,
			_validateProfileId: this._validateProfileId && this._validateProfileId.toJSON(),
			validateProfileId: this.validateProfileId,
			_value: this._value && this._value.toJSON(),
			value: this.value,
			_warningOnly: this._warningOnly && this._warningOnly.toJSON(),
			warningOnly: this.warningOnly,
		};
	}
};
