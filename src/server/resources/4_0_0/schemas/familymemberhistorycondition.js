/**
 * @name exports
 * @summary FamilyMemberHistoryCondition Class
 */
module.exports = class FamilyMemberHistoryCondition {
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

		Object.defineProperty(this, 'code', {
			enumerable: true,
			get: () => this.__data.code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.code = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'outcome', {
			enumerable: true,
			get: () => this.__data.outcome,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.outcome = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_contributedToDeath', {
			enumerable: true,
			get: () => this.__data._contributedToDeath,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._contributedToDeath = new Element(value);
			},
		});

		Object.defineProperty(this, 'contributedToDeath', {
			enumerable: true,
			get: () => this.__data.contributedToDeath,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contributedToDeath = value;
			},
		});

		Object.defineProperty(this, 'onsetAge', {
			enumerable: true,
			get: () => this.__data.onsetAge,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Age = require('./age.js');
				this.__data.onsetAge = new Age(value);
			},
		});

		Object.defineProperty(this, 'onsetRange', {
			enumerable: true,
			get: () => this.__data.onsetRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.onsetRange = new Range(value);
			},
		});

		Object.defineProperty(this, 'onsetPeriod', {
			enumerable: true,
			get: () => this.__data.onsetPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.onsetPeriod = new Period(value);
			},
		});

		Object.defineProperty(this, '_onsetString', {
			enumerable: true,
			get: () => this.__data._onsetString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._onsetString = new Element(value);
			},
		});

		Object.defineProperty(this, 'onsetString', {
			enumerable: true,
			get: () => this.__data.onsetString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.onsetString = value;
			},
		});

		Object.defineProperty(this, 'note', {
			enumerable: true,
			get: () => this.__data.note,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Annotation = require('./annotation.js');
				this.__data.note = Array.isArray(value) ? value.map(v => new Annotation(v)) : [new Annotation(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'FamilyMemberHistoryCondition',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'FamilyMemberHistoryCondition';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			code: this.code && this.code.toJSON(),
			outcome: this.outcome && this.outcome.toJSON(),
			_contributedToDeath: this._contributedToDeath && this._contributedToDeath.toJSON(),
			contributedToDeath: this.contributedToDeath,
			onsetAge: this.onsetAge && this.onsetAge.toJSON(),
			onsetRange: this.onsetRange && this.onsetRange.toJSON(),
			onsetPeriod: this.onsetPeriod && this.onsetPeriod.toJSON(),
			_onsetString: this._onsetString && this._onsetString.toJSON(),
			onsetString: this.onsetString,
			note: this.note && this.note.map(v => v.toJSON()),
		};
	}
};
