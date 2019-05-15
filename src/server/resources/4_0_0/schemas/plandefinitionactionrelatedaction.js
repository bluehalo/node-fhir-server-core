/**
 * @name exports
 * @summary PlanDefinitionActionRelatedAction Class
 */
module.exports = class PlanDefinitionActionRelatedAction {
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

		Object.defineProperty(this, '_actionId', {
			enumerable: true,
			get: () => this.__data._actionId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._actionId = new Element(value);
			},
		});

		Object.defineProperty(this, 'actionId', {
			enumerable: true,
			get: () => this.__data.actionId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.actionId = value;
			},
		});

		Object.defineProperty(this, '_relationship', {
			enumerable: true,
			get: () => this.__data._relationship,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._relationship = new Element(value);
			},
		});

		Object.defineProperty(this, 'relationship', {
			enumerable: true,
			get: () => this.__data.relationship,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.relationship = value;
			},
		});

		Object.defineProperty(this, 'offsetDuration', {
			enumerable: true,
			get: () => this.__data.offsetDuration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.offsetDuration = new Duration(value);
			},
		});

		Object.defineProperty(this, 'offsetRange', {
			enumerable: true,
			get: () => this.__data.offsetRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.offsetRange = new Range(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'PlanDefinitionActionRelatedAction',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'PlanDefinitionActionRelatedAction';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_actionId: this._actionId && this._actionId.toJSON(),
			actionId: this.actionId,
			_relationship: this._relationship && this._relationship.toJSON(),
			relationship: this.relationship,
			offsetDuration: this.offsetDuration && this.offsetDuration.toJSON(),
			offsetRange: this.offsetRange && this.offsetRange.toJSON(),
		};
	}
};
