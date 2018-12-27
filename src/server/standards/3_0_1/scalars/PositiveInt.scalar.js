/**
 * @name PositiveInt
 * @description Base StructureDefinition for positiveInt type: An integer with a value that is positive (e.g. >0).
 */
class PositiveInt {
	// TODO: Make sure the regex is in the scalar
	static regex() {
		return new RegExp('.*', 'g');
	}
}

module.exports = PositiveInt;
