const BackboneElement = require('./BackboneElement');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class ConformanceSoftware extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConformanceSoftware';
		Object.assign(this, opt);
	}

	// This is a ConformanceSoftware resource
	static get __resourceType() {
		return 'ConformanceSoftware';
	}

	// Name software is known by.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// The version identifier for the software covered by this statement.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// Date this version of the software released.
	get releaseDate() {
		return this.__releaseDate;
	}

	set releaseDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field releaseDate`);
		}
		this.__releaseDate = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			name: this.__name,
			version: this.__version,
			releaseDate: this.__releaseDate,
		});
	}
}

module.exports = ConformanceSoftware;
