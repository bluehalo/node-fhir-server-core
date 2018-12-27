/**
 * @name Instant
 * @description Base StructureDefinition for instant Type: An instant in time - known at least to the second.
 */
class Instant {
	// TODO: Make sure the regex is in the scalar
	static regex() {
		return new RegExp('.*', 'g');
	}
}

module.exports = Instant;
