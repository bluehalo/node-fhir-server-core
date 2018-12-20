const BackboneElement = require('./BackboneElement');

class MeasureReportGroupStratifier extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MeasureReportGroupStratifier';
		Object.assign(this, opt);
	}

	// This is a MeasureReportGroupStratifier resource
	static get __resourceType() {
		return 'MeasureReportGroupStratifier';
	}

	// The identifier of this stratifier, as defined in the measure definition.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
	get stratum() {
		return this.__stratum;
	}

	set stratum(new_value) {
		const MeasureReportGroupStratifierStratum = require('./MeasureReportGroupStratifierStratum');
		this.__stratum = Array.isArray(new_value)
			? new_value.map(val => new MeasureReportGroupStratifierStratum(val))
			: [new MeasureReportGroupStratifierStratum(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			identifier: this.__identifier && this.__identifier.toJSON(),
			stratum: this.__stratum && this.__stratum.map(v => v.toJSON()),
		});
	}
}

module.exports = MeasureReportGroupStratifier;
