const BackboneElement = require('./BackboneElement');

class BundleEntrySearch extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'BundleEntrySearch';
		Object.assign(this, opt);
	}

	// This is a BundleEntrySearch resource
	static get __resourceType() {
		return 'BundleEntrySearch';
	}

	// Why this entry is in the result set - whether it\'s included as a match or because of an _include requirement.
	get mode() {
		return this.__mode;
	}

	set mode(new_value) {
		this.__mode = new_value;
	}

	// When searching, the server\'s search ranking score for the entry.
	get score() {
		return this.__score;
	}

	set score(new_value) {
		this.__score = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			mode: this.__mode,
			score: this.__score,
		});
	}
}

module.exports = BundleEntrySearch;
