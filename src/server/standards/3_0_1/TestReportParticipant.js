const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class TestReportParticipant extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestReportParticipant';
		Object.assign(this, opt);
	}

	// This is a TestReportParticipant resource
	static get __resourceType() {
		return 'TestReportParticipant';
	}

	// The type of participant.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// The uri of the participant. An absolute URL is preferred.
	get uri() {
		return this.__uri;
	}

	set uri(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field uri`);
		}
		this.__uri = new_value;
	}

	// The display name of the participant.
	get display() {
		return this.__display;
	}

	set display(new_value) {
		this.__display = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type,
			uri: this.__uri,
			display: this.__display,
		});
	}
}

module.exports = TestReportParticipant;
