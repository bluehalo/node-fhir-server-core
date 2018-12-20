/**
 * @name xhtml
 * @description Base StructureDefinition for xhtml Type: A stream of bytes.
 */
class xhtml {
	// TODO: Make sure the regex is in the scalar
	static regex() {
		return new RegExp('.*', 'g');
	}
}

module.exports = xhtml;
