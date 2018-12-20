const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class BundleLink extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'BundleLink';
		Object.assign(this, opt);
	}

	// This is a BundleLink resource
	static get __resourceType() {
		return 'BundleLink';
	}

	// A name which details the functional use for this link - see [http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1).
	get relation() {
		return this.__relation;
	}

	set relation(new_value) {
		this.__relation = new_value;
	}

	// The reference details for the link.
	get url() {
		return this.__url;
	}

	set url(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field url`);
		}
		this.__url = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			relation: this.__relation,
			url: this.__url,
		});
	}
}

module.exports = BundleLink;
