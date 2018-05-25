const BackboneElement = require('./BackboneElement');
const Identifier = require('./Identifier');
const Coding = require('./Coding');

class AuditEvent_Source extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'AuditEvent_Source';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'AuditEvent_Source';
	}

	// Logical source location within the healthcare enterprise network.  For example, a hospital or other provider location within a multi-entity provider group.
	get site () {
		return this._site;
	}

	set site ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._site = new_value;
	}

	// Identifier of the source where the event was detected.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._identifier = new Identifier(new_value);
	}

	// Code specifying the type of source where event originated.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._type = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			site: this.site,
			identifier: this.identifier && this.identifier.toJSON(),
			type: this.type && this.type.toJSON()
		});
	}

}

module.exports = AuditEvent_Source;
