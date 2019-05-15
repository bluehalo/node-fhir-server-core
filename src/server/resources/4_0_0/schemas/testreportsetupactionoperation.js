/**
 * @name exports
 * @summary TestReportSetupActionOperation Class
 */
module.exports = class TestReportSetupActionOperation {
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

		Object.defineProperty(this, '_result', {
			enumerable: true,
			get: () => this.__data._result,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._result = new Element(value);
			},
		});

		Object.defineProperty(this, 'result', {
			enumerable: true,
			get: () => this.__data.result,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.result = value;
			},
		});

		Object.defineProperty(this, '_message', {
			enumerable: true,
			get: () => this.__data._message,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._message = new Element(value);
			},
		});

		Object.defineProperty(this, 'message', {
			enumerable: true,
			get: () => this.__data.message,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.message = value;
			},
		});

		Object.defineProperty(this, '_detail', {
			enumerable: true,
			get: () => this.__data._detail,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._detail = new Element(value);
			},
		});

		Object.defineProperty(this, 'detail', {
			enumerable: true,
			get: () => this.__data.detail,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.detail = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'TestReportSetupActionOperation',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'TestReportSetupActionOperation';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_result: this._result && this._result.toJSON(),
			result: this.result,
			_message: this._message && this._message.toJSON(),
			message: this.message,
			_detail: this._detail && this._detail.toJSON(),
			detail: this.detail,
		};
	}
};
