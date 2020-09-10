/**
 * @name exports
 * @summary ChargeItemDefinitionPropertyGroup Class
 */
module.exports = class ChargeItemDefinitionPropertyGroup {
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

		Object.defineProperty(this, 'applicability', {
			enumerable: true,
			get: () => this.__data.applicability,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ChargeItemDefinitionApplicability = require('./chargeitemdefinitionapplicability.js');
				this.__data.applicability = Array.isArray(value)
					? value.map(v => new ChargeItemDefinitionApplicability(v))
					: [new ChargeItemDefinitionApplicability(value)];
			},
		});

		Object.defineProperty(this, 'priceComponent', {
			enumerable: true,
			get: () => this.__data.priceComponent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ChargeItemDefinitionPropertyGroupPriceComponent = require('./chargeitemdefinitionpropertygrouppricecomponent.js');
				this.__data.priceComponent = Array.isArray(value)
					? value.map(v => new ChargeItemDefinitionPropertyGroupPriceComponent(v))
					: [new ChargeItemDefinitionPropertyGroupPriceComponent(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ChargeItemDefinitionPropertyGroup',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ChargeItemDefinitionPropertyGroup';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			applicability: this.applicability && this.applicability.map(v => v.toJSON()),
			priceComponent: this.priceComponent && this.priceComponent.map(v => v.toJSON()),
		};
	}
};
