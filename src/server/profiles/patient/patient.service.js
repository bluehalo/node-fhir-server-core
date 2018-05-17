/* eslint-disable no-unused-vars */
module.exports.getCount = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getPatient = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getPatient\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getPatientById = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getPatientById\'';
	logger.info(message);
	reject(new Error(message));
	// resolve({
	// 	'resourceType': 'Patient',
	// 	'id': '1',
	// 	'meta': {
	// 		'versionId': '2.0'
	// 	},
	// 	'text': {
	// 		'status': 'generated',
	// 		'div': 'Doe JOHN\nIdentifier 211 - 778 - 2345\nAddress 425 West Side dr\nApt #101\nGaithersburg MD US\nDate of birth\n01 January 1980'
	// 	},
	// 	'extension': [{
	// 		'url': 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName',
	// 		'valueString': 'Jane'
	// 	},
	// 		{
	// 			'url': 'http://hl7.org/fhir/StructureDefinition/birthPlace',
	// 			'valueAddress': {
	// 				'use': 'home',
	// 				'line': [
	// 					'2110 Silverspring Rd',
	// 					'Block # 2 '
	// 				],
	// 				'city': 'New York',
	// 				'state': 'NY',
	// 				'postalCode': '07882',
	// 				'country': 'US'
	// 			}
	// 		}, {
	// 			'url': 'http://hl7.org/fhir/StructureDefinition/us-core-ethnicity',
	// 			'valueCodeableConcept': {
	// 				'coding': [{
	// 					'system': 'http://hl7.org/fhir/v3/Ethnicity',
	// 					'code': '2135-2',
	// 					'display': 'Hispanic or Latino'
	// 				}]
	// 			}
	// 		}]
	// });
});

module.exports.createPatient = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'createPatient\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.updatePatient = (args, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'updatePatient\'';
	logger.info(message);
	reject(new Error(message));
});
