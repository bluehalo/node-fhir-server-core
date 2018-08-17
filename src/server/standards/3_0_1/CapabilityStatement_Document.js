const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class CapabilityStatement_Document extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CapabilityStatement_Document';
	}

	// Mode of this document declaration - whether an application is a producer or consumer.
	get mode () {
		return this._mode;
	}

	set mode ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['producer', 'consumer'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field mode`);
		}
		this._mode = new_value;
	}

	// A description of how the application supports or uses the specified document profile.  For example, when documents are created, what action is taken with consumed documents, etc.
	get documentation () {
		return this._documentation;
	}

	set documentation ( new_value ) {
		this._documentation = new_value;
	}

	// A constraint on a resource used in the document.
	get profile () {
		return this._profile;
	}

	set profile ( new_value ) {
		this._profile = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			mode: this._mode,
			documentation: this._documentation,
			profile: this._profile && this._profile.toJSON()
		});
	}

}

module.exports = CapabilityStatement_Document;
