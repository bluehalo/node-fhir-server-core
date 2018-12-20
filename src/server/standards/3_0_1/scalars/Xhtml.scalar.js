/**
 * @name Xhtml
 * @description Base StructureDefinition for xhtml Type.
 */
class Xhtml {
	// TODO: Make sure the regex is in the scalar
	static regex() {
		return new RegExp('.*', 'g');
	}
}

module.exports = Xhtml;
