/**
 * @name UnsignedInt
 * @description Base StructureDefinition for unsignedInt type: An integer with a value that is not negative (e.g. >= 0).
 */
class UnsignedInt {
	// TODO: Make sure the regex is in the scalar
	static regex() {
		return new RegExp('.*', 'g');
	}
}

module.exports = UnsignedInt;
