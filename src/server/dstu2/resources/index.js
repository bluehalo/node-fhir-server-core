const Observation = require('../../resources/Observation');
const {
	Patient,
	Communication,
	PatientContact
} = require('../../resources/Patient');

/**
 * @name exports
 * @description Export all the DSTU2 resource types
 */
module.exports = {
	Observation,
	Patient,
	Communication,
	PatientContact
};
