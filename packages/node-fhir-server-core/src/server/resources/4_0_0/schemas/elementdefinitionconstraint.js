/**
 * @name exports
 * @summary ElementDefinitionConstraint Class
 */
module.exports = class ElementDefinitionConstraint {
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

		Object.defineProperty(this, '_key', {
			enumerable: true,
			get: () => this.__data._key,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._key = new Element(value);
			},
		});

		Object.defineProperty(this, 'key', {
			enumerable: true,
			get: () => this.__data.key,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.key = value;
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

		Object.defineProperty(this, '_severity', {
			enumerable: true,
			get: () => this.__data._severity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._severity = new Element(value);
			},
		});

		Object.defineProperty(this, 'severity', {
			enumerable: true,
			get: () => this.__data.severity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.severity = value;
			},
		});

		Object.defineProperty(this, '_human', {
			enumerable: true,
			get: () => this.__data._human,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._human = new Element(value);
			},
		});

		Object.defineProperty(this, 'human', {
			enumerable: true,
			get: () => this.__data.human,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.human = value;
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

		Object.defineProperty(this, '_source', {
			enumerable: true,
			get: () => this.__data._source,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._source = new Element(value);
			},
		});

		Object.defineProperty(this, 'source', {
			enumerable: true,
			get: () => this.__data.source,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.source = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ElementDefinitionConstraint',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ElementDefinitionConstraint';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			_key: this._key && this._key.toJSON(),
			key: this.key,
			_requirements: this._requirements && this._requirements.toJSON(),
			requirements: this.requirements,
			_severity: this._severity && this._severity.toJSON(),
			severity: this.severity,
			_human: this._human && this._human.toJSON(),
			human: this.human,
			_expression: this._expression && this._expression.toJSON(),
			expression: this.expression,
			_xpath: this._xpath && this._xpath.toJSON(),
			xpath: this.xpath,
			_source: this._source && this._source.toJSON(),
			source: this.source,
		};
	}
};
