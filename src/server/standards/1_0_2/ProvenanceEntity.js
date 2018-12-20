const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class ProvenanceEntity extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ProvenanceEntity';
		Object.assign(this, opt);
	}

	// This is a ProvenanceEntity resource
	static get __resourceType() {
		return 'ProvenanceEntity';
	}

	// How the entity was used during the activity.
	get role() {
		return this.__role;
	}

	set role(new_value) {
		this.__role = new_value;
	}

	// The type of the entity. If the entity is a resource, then this is a resource type.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const Coding = require('./Coding');
		this.__type = new Coding(new_value);
	}

	// Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.
	get reference() {
		return this.__reference;
	}

	set reference(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field reference`);
		}
		this.__reference = new_value;
	}

	// Human-readable description of the entity.
	get display() {
		return this.__display;
	}

	set display(new_value) {
		this.__display = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			role: this.__role,
			type: this.__type && this.__type.toJSON(),
			reference: this.__reference,
			display: this.__display,
		});
	}
}

module.exports = ProvenanceEntity;
