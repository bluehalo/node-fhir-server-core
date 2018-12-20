/**
 * @name Time
 * @description Base StructureDefinition for time Type: A time during the day, with no date specified.
 */
class Time {
	// TODO: Make sure the regex is in the scalar
	static regex() {
		return new RegExp('.*', 'g');
	}
}

module.exports = Time;
