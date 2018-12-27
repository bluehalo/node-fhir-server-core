/**
 * @description Define the common read scopes in a single place
 * @param {string} profile - Profile name, e.g. Patient or AllergyIntolerance
 * @return {Array<string>} An array of scopes
 */
module.exports.read_scopes = profile => {
	let profile_lower = profile.toLowerCase();

	return [
		'user/*.*',
		`user/${profile_lower}.*`,
		`user/${profile_lower}.read`,
		'user/*.read',
		`${profile_lower}/*.*`,
		`${profile_lower}/${profile}.*`,
		`${profile_lower}/${profile}.read`,
		`${profile_lower}/*.read`,
	];
};

/**
 * @description Define the common write scopes in a single place
 * @param {string} profile - Profile name, e.g. Patient or AllergyIntolerance
 * @return {Array<string>} An array of scopes
 */
module.exports.write_scopes = profile => {
	let profile_lower = profile.toLowerCase();

	return [
		'user/*.*',
		`user/${profile_lower}.*`,
		`user/${profile_lower}.write`,
		'user/*.write',
		`${profile_lower}/*.*`,
		`${profile_lower}/${profile}.*`,
		`${profile_lower}/${profile}.write`,
		`${profile_lower}/*.write`,
	];
};
