const BackboneElement = require('./BackboneElement');
const ConceptMap_Element = require('./ConceptMap_Element');
const ConceptMap_Unmapped = require('./ConceptMap_Unmapped');

class ConceptMap_Group extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ConceptMap_Group';
	}

	// An absolute URI that identifies the Code System (if the source is a value set that crosses more than one code system).
	get source () {
		return this._source;
	}

	set source ( new_value ) {
		this._source = new_value;
	}

	// The specific version of the code system, as determined by the code system authority.
	get sourceVersion () {
		return this._sourceVersion;
	}

	set sourceVersion ( new_value ) {
		this._sourceVersion = new_value;
	}

	// An absolute URI that identifies the code system of the target code (if the target is a value set that cross code systems).
	get target () {
		return this._target;
	}

	set target ( new_value ) {
		this._target = new_value;
	}

	// The specific version of the code system, as determined by the code system authority.
	get targetVersion () {
		return this._targetVersion;
	}

	set targetVersion ( new_value ) {
		this._targetVersion = new_value;
	}

	// Mappings for an individual concept in the source to one or more concepts in the target.
	get element () {
		return this._element;
	}

	set element ( new_value ) {
		this._element = Array.isArray(new_value) ? new_value.map(val => new ConceptMap_Element(val)) : [new ConceptMap_Element(new_value)];
	}

	// What to do when there is no match in the mappings in the group.
	get unmapped () {
		return this._unmapped;
	}

	set unmapped ( new_value ) {
		this._unmapped = new ConceptMap_Unmapped(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			source: this._source,
			sourceVersion: this._sourceVersion,
			target: this._target,
			targetVersion: this._targetVersion,
			element: this._element,
			unmapped: this._unmapped
		});
	}

}

module.exports = ConceptMap_Group;
