const BackboneElement = require('./BackboneElement');
const Identifier = require('./Identifier');
const Coding = require('./Coding');

class AuditEvent_Source extends BackboneElement {

	constructor ( opts ) {
		super();
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
		this._site = new_value;
	}

	// Identifier of the source where the event was detected.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// Code specifying the type of source where event originated.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			site: this._site,
			identifier: this._identifier,
			type: this._type
		});
	}

}

module.exports = AuditEvent_Source;
