/**
 * @name exports
 * @summary CoverageGrouping Class
 */
module.exports = class CoverageGrouping {
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

		Object.defineProperty(this, '_group', {
			enumerable: true,
			get: () => this.__data._group,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._group = new Element(value);
			},
		});

		Object.defineProperty(this, 'group', {
			enumerable: true,
			get: () => this.__data.group,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.group = value;
			},
		});

		Object.defineProperty(this, '_groupDisplay', {
			enumerable: true,
			get: () => this.__data._groupDisplay,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._groupDisplay = new Element(value);
			},
		});

		Object.defineProperty(this, 'groupDisplay', {
			enumerable: true,
			get: () => this.__data.groupDisplay,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.groupDisplay = value;
			},
		});

		Object.defineProperty(this, '_subGroup', {
			enumerable: true,
			get: () => this.__data._subGroup,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._subGroup = new Element(value);
			},
		});

		Object.defineProperty(this, 'subGroup', {
			enumerable: true,
			get: () => this.__data.subGroup,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.subGroup = value;
			},
		});

		Object.defineProperty(this, '_subGroupDisplay', {
			enumerable: true,
			get: () => this.__data._subGroupDisplay,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._subGroupDisplay = new Element(value);
			},
		});

		Object.defineProperty(this, 'subGroupDisplay', {
			enumerable: true,
			get: () => this.__data.subGroupDisplay,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.subGroupDisplay = value;
			},
		});

		Object.defineProperty(this, '_plan', {
			enumerable: true,
			get: () => this.__data._plan,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._plan = new Element(value);
			},
		});

		Object.defineProperty(this, 'plan', {
			enumerable: true,
			get: () => this.__data.plan,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.plan = value;
			},
		});

		Object.defineProperty(this, '_planDisplay', {
			enumerable: true,
			get: () => this.__data._planDisplay,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._planDisplay = new Element(value);
			},
		});

		Object.defineProperty(this, 'planDisplay', {
			enumerable: true,
			get: () => this.__data.planDisplay,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.planDisplay = value;
			},
		});

		Object.defineProperty(this, '_subPlan', {
			enumerable: true,
			get: () => this.__data._subPlan,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._subPlan = new Element(value);
			},
		});

		Object.defineProperty(this, 'subPlan', {
			enumerable: true,
			get: () => this.__data.subPlan,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.subPlan = value;
			},
		});

		Object.defineProperty(this, '_subPlanDisplay', {
			enumerable: true,
			get: () => this.__data._subPlanDisplay,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._subPlanDisplay = new Element(value);
			},
		});

		Object.defineProperty(this, 'subPlanDisplay', {
			enumerable: true,
			get: () => this.__data.subPlanDisplay,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.subPlanDisplay = value;
			},
		});

		Object.defineProperty(this, '_class', {
			enumerable: true,
			get: () => this.__data._class,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._class = new Element(value);
			},
		});

		Object.defineProperty(this, 'class', {
			enumerable: true,
			get: () => this.__data.class,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.class = value;
			},
		});

		Object.defineProperty(this, '_classDisplay', {
			enumerable: true,
			get: () => this.__data._classDisplay,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._classDisplay = new Element(value);
			},
		});

		Object.defineProperty(this, 'classDisplay', {
			enumerable: true,
			get: () => this.__data.classDisplay,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.classDisplay = value;
			},
		});

		Object.defineProperty(this, '_subClass', {
			enumerable: true,
			get: () => this.__data._subClass,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._subClass = new Element(value);
			},
		});

		Object.defineProperty(this, 'subClass', {
			enumerable: true,
			get: () => this.__data.subClass,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.subClass = value;
			},
		});

		Object.defineProperty(this, '_subClassDisplay', {
			enumerable: true,
			get: () => this.__data._subClassDisplay,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._subClassDisplay = new Element(value);
			},
		});

		Object.defineProperty(this, 'subClassDisplay', {
			enumerable: true,
			get: () => this.__data.subClassDisplay,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.subClassDisplay = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'CoverageGrouping',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'CoverageGrouping';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_group: this._group && this._group.toJSON(),
			group: this.group,
			_groupDisplay: this._groupDisplay && this._groupDisplay.toJSON(),
			groupDisplay: this.groupDisplay,
			_subGroup: this._subGroup && this._subGroup.toJSON(),
			subGroup: this.subGroup,
			_subGroupDisplay: this._subGroupDisplay && this._subGroupDisplay.toJSON(),
			subGroupDisplay: this.subGroupDisplay,
			_plan: this._plan && this._plan.toJSON(),
			plan: this.plan,
			_planDisplay: this._planDisplay && this._planDisplay.toJSON(),
			planDisplay: this.planDisplay,
			_subPlan: this._subPlan && this._subPlan.toJSON(),
			subPlan: this.subPlan,
			_subPlanDisplay: this._subPlanDisplay && this._subPlanDisplay.toJSON(),
			subPlanDisplay: this.subPlanDisplay,
			_class: this._class && this._class.toJSON(),
			class: this.class,
			_classDisplay: this._classDisplay && this._classDisplay.toJSON(),
			classDisplay: this.classDisplay,
			_subClass: this._subClass && this._subClass.toJSON(),
			subClass: this.subClass,
			_subClassDisplay: this._subClassDisplay && this._subClassDisplay.toJSON(),
			subClassDisplay: this.subClassDisplay,
		};
	}
};
