/**
 * @name Code
 * @description Base StructureDefinition for code type: A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents.
 */
class Code {
	// TODO: Make sure the regex is in the scalar
	static regex() {
		return new RegExp('.*', 'g');
	}
}

module.exports = Code;
