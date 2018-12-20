/**
 * @name Uri
 * @description Base StructureDefinition for uri Type: String of characters used to identify a name or a resource.
 */
class Uri {
	// TODO: Make sure the regex is in the scalar
	static regex() {
		return new RegExp('.*', 'g');
	}
}

module.exports = Uri;
