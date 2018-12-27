/**
 * @name Id
 * @description Base StructureDefinition for id type: Any combination of letters, numerals, \'-\' and \'.\', with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive.
 */
class Id {
	// TODO: Make sure the regex is in the scalar
	static regex() {
		return new RegExp('.*', 'g');
	}
}

module.exports = Id;
