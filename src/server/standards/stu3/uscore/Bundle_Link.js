const BackboneElement = require('./BackboneElement');

class Bundle_Link extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Bundle_Link';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Bundle_Link';
	}

	// A name which details the functional use for this link - see [http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1).
	get relation () {
		return this._relation;
	}

	set relation ( new_value ) {
		this._relation = new_value;
	}

	// The reference details for the link.
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			relation: this.relation,
			url: this.url
		});
	}

}

module.exports = Bundle_Link;
