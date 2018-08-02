const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class TestScript_Fixture extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestScript_Fixture';
	}

	// Whether or not to implicitly create the fixture during setup. If true, the fixture is automatically created on each server being tested during setup, therefore no create operation is required for this fixture in the TestScript.setup section.
	get autocreate () {
		return this._autocreate;
	}

	set autocreate ( new_value ) {
		this._autocreate = new_value;
	}

	// Whether or not to implicitly delete the fixture during teardown. If true, the fixture is automatically deleted on each server being tested during teardown, therefore no delete operation is required for this fixture in the TestScript.teardown section.
	get autodelete () {
		return this._autodelete;
	}

	set autodelete ( new_value ) {
		this._autodelete = new_value;
	}

	// Reference to the resource (containing the contents of the resource needed for operations).
	get resource () {
		return this._resource;
	}

	set resource ( new_value ) {
		this._resource = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			autocreate: this._autocreate,
			autodelete: this._autodelete,
			resource: this._resource && this._resource.toJSON()
		});
	}

}

module.exports = TestScript_Fixture;
