const IdScalar = require('./scalars/Id.scalar');
const UriScalar = require('./scalars/Uri.scalar');
const CodeScalar = require('./scalars/Code.scalar');

class Resource {
	constructor(opt) {
		this.__resourceType = 'Resource';
		Object.assign(this, opt);
	}

	// This is a Resource resource
	static get __resourceType() {
		return 'Resource';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Resource = new_value;
	}

	// The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
	get id() {
		return this.__id;
	}

	set id(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field id`);
		}
		this.__id = new_value;
	}

	// The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.
	get meta() {
		return this.__meta;
	}

	set meta(new_value) {
		const Meta = require('./Meta');
		this.__meta = new Meta(new_value);
	}

	// A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.
	get implicitRules() {
		return this.__implicitRules;
	}

	set implicitRules(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field implicitRules`);
		}
		this.__implicitRules = new_value;
	}

	// The base language in which the resource is written.
	get language() {
		return this.__language;
	}

	set language(new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field language`);
		}
		this.__language = new_value;
	}

	toJSON() {
		return {
			resourceType: this.__resourceType,
			id: this.__id,
			meta: this.__meta && this.__meta.toJSON(),
			implicitRules: this.__implicitRules,
			language: this.__language,
		};
	}
}

module.exports = Resource;
