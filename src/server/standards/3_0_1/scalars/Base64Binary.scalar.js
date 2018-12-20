/**
 * @name Base64Binary
 * @description Base StructureDefinition for base64Binary Type: A stream of bytes.
 */
class Base64Binary {
	// TODO: Make sure the regex is in the scalar
	static regex() {
		return new RegExp('.*', 'g');
	}
}

module.exports = Base64Binary;
