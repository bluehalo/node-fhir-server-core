const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class MessageHeaderDestination extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MessageHeaderDestination';
		Object.assign(this, opt);
	}

	// This is a MessageHeaderDestination resource
	static get __resourceType() {
		return 'MessageHeaderDestination';
	}

	// Human-readable name for the target system.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// Identifies the target end system in situations where the initial message transmission is to an intermediary system.
	get target() {
		return this.__target;
	}

	set target(new_value) {
		const Reference = require('./Reference');
		this.__target = new Reference(new_value);
	}

	// Indicates where the message should be routed to.
	get endpoint() {
		return this.__endpoint;
	}

	set endpoint(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field endpoint`);
		}
		this.__endpoint = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			name: this.__name,
			target: this.__target && this.__target.toJSON(),
			endpoint: this.__endpoint,
		});
	}
}

module.exports = MessageHeaderDestination;
