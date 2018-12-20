/**
 * @name Oid
 * @description Base StructureDefinition for oid type: An oid represented as a URI.
 */
class Oid {
	// TODO: Make sure the regex is in the scalar
	static regex() {
		return new RegExp('.*', 'g');
	}
}

module.exports = Oid;
