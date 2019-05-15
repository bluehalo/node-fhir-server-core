/**
 * @name exports
 * @summary ClaimResponseItemDetail Class
 */
module.exports = class ClaimResponseItemDetail {
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

		Object.defineProperty(this, '_sequenceLinkId', {
			enumerable: true,
			get: () => this.__data._sequenceLinkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sequenceLinkId = new Element(value);
			},
		});

		Object.defineProperty(this, 'sequenceLinkId', {
			enumerable: true,
			get: () => this.__data.sequenceLinkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sequenceLinkId = value;
			},
		});

		Object.defineProperty(this, '_noteNumber', {
			enumerable: true,
			get: () => this.__data._noteNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._noteNumber = new Element(value);
			},
		});

		Object.defineProperty(this, 'noteNumber', {
			enumerable: true,
			get: () => this.__data.noteNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.noteNumber = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'adjudication', {
			enumerable: true,
			get: () => this.__data.adjudication,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClaimResponseItemAdjudication = require('./claimresponseitemadjudication.js');
				this.__data.adjudication = Array.isArray(value)
					? value.map(v => new ClaimResponseItemAdjudication(v))
					: [new ClaimResponseItemAdjudication(value)];
			},
		});

		Object.defineProperty(this, 'subDetail', {
			enumerable: true,
			get: () => this.__data.subDetail,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClaimResponseItemDetailSubDetail = require('./claimresponseitemdetailsubdetail.js');
				this.__data.subDetail = Array.isArray(value)
					? value.map(v => new ClaimResponseItemDetailSubDetail(v))
					: [new ClaimResponseItemDetailSubDetail(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ClaimResponseItemDetail',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ClaimResponseItemDetail';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_sequenceLinkId: this._sequenceLinkId && this._sequenceLinkId.toJSON(),
			sequenceLinkId: this.sequenceLinkId,
			_noteNumber: this._noteNumber && this._noteNumber.toJSON(),
			noteNumber: this.noteNumber,
			adjudication: this.adjudication && this.adjudication.map(v => v.toJSON()),
			subDetail: this.subDetail && this.subDetail.map(v => v.toJSON()),
		};
	}
};
