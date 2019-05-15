/**
 * @name exports
 * @summary StructureMapGroupRule Class
 */
module.exports = class StructureMapGroupRule {
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

		Object.defineProperty(this, 'source', {
			enumerable: true,
			get: () => this.__data.source,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let StructureMapGroupRuleSource = require('./structuremapgrouprulesource.js');
				this.__data.source = Array.isArray(value)
					? value.map(v => new StructureMapGroupRuleSource(v))
					: [new StructureMapGroupRuleSource(value)];
			},
		});

		Object.defineProperty(this, 'target', {
			enumerable: true,
			get: () => this.__data.target,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let StructureMapGroupRuleTarget = require('./structuremapgroupruletarget.js');
				this.__data.target = Array.isArray(value)
					? value.map(v => new StructureMapGroupRuleTarget(v))
					: [new StructureMapGroupRuleTarget(value)];
			},
		});

		Object.defineProperty(this, 'rule', {
			enumerable: true,
			get: () => this.__data.rule,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let StructureMapGroupRule = require('./structuremapgrouprule.js');
				this.__data.rule = Array.isArray(value)
					? value.map(v => new StructureMapGroupRule(v))
					: [new StructureMapGroupRule(value)];
			},
		});

		Object.defineProperty(this, 'dependent', {
			enumerable: true,
			get: () => this.__data.dependent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let StructureMapGroupRuleDependent = require('./structuremapgroupruledependent.js');
				this.__data.dependent = Array.isArray(value)
					? value.map(v => new StructureMapGroupRuleDependent(v))
					: [new StructureMapGroupRuleDependent(value)];
			},
		});

		Object.defineProperty(this, '_documentation', {
			enumerable: true,
			get: () => this.__data._documentation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._documentation = new Element(value);
			},
		});

		Object.defineProperty(this, 'documentation', {
			enumerable: true,
			get: () => this.__data.documentation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.documentation = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'StructureMapGroupRule',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'StructureMapGroupRule';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_name: this._name && this._name.toJSON(),
			name: this.name,
			source: this.source && this.source.map(v => v.toJSON()),
			target: this.target && this.target.map(v => v.toJSON()),
			rule: this.rule && this.rule.map(v => v.toJSON()),
			dependent: this.dependent && this.dependent.map(v => v.toJSON()),
			_documentation: this._documentation && this._documentation.toJSON(),
			documentation: this.documentation,
		};
	}
};
