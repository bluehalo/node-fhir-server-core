const BackboneElement = require('./BackboneElement');

class AuditEventSource extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'AuditEventSource';
		Object.assign(this, opt);
	}

	// This is a AuditEventSource resource
	static get __resourceType() {
		return 'AuditEventSource';
	}

	// Logical source location within the healthcare enterprise network.  For example, a hospital or other provider location within a multi-entity provider group.
	get site() {
		return this.__site;
	}

	set site(new_value) {
		this.__site = new_value;
	}

	// Identifier of the source where the event was detected.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// Code specifying the type of source where event originated.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const Coding = require('./Coding');
		this.__type = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			site: this.__site,
			identifier: this.__identifier && this.__identifier.toJSON(),
			type: this.__type && this.__type.map(v => v.toJSON()),
		});
	}
}

module.exports = AuditEventSource;
