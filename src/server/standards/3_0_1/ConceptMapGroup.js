const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class ConceptMapGroup extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConceptMapGroup';
		Object.assign(this, opt);
	}

	// This is a ConceptMapGroup resource
	static get __resourceType() {
		return 'ConceptMapGroup';
	}

	// An absolute URI that identifies the Code System (if the source is a value set that crosses more than one code system).
	get source() {
		return this.__source;
	}

	set source(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field source`);
		}
		this.__source = new_value;
	}

	// The specific version of the code system, as determined by the code system authority.
	get sourceVersion() {
		return this.__sourceVersion;
	}

	set sourceVersion(new_value) {
		this.__sourceVersion = new_value;
	}

	// An absolute URI that identifies the code system of the target code (if the target is a value set that cross code systems).
	get target() {
		return this.__target;
	}

	set target(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field target`);
		}
		this.__target = new_value;
	}

	// The specific version of the code system, as determined by the code system authority.
	get targetVersion() {
		return this.__targetVersion;
	}

	set targetVersion(new_value) {
		this.__targetVersion = new_value;
	}

	// Mappings for an individual concept in the source to one or more concepts in the target.
	get element() {
		return this.__element;
	}

	set element(new_value) {
		const ConceptMapGroupElement = require('./ConceptMapGroupElement');
		this.__element = Array.isArray(new_value)
			? new_value.map(val => new ConceptMapGroupElement(val))
			: [new ConceptMapGroupElement(new_value)];
	}

	// What to do when there is no match in the mappings in the group.
	get unmapped() {
		return this.__unmapped;
	}

	set unmapped(new_value) {
		const ConceptMapGroupUnmapped = require('./ConceptMapGroupUnmapped');
		this.__unmapped = new ConceptMapGroupUnmapped(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			source: this.__source,
			sourceVersion: this.__sourceVersion,
			target: this.__target,
			targetVersion: this.__targetVersion,
			element: this.__element && this.__element.map(v => v.toJSON()),
			unmapped: this.__unmapped && this.__unmapped.toJSON(),
		});
	}
}

module.exports = ConceptMapGroup;
