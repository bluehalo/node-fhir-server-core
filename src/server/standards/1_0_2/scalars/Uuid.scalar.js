/**
 * @name Uuid
 * @description Base StructureDefinition for uuid type: A UUID, represented as a URI.
 */
class Uuid {
	// TODO: Make sure the regex is in the scalar
	static regex() {
		return new RegExp('.*', 'g');
	}
}

module.exports = Uuid;
