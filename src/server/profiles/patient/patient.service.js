/* eslint-disable no-unused-vars */
module.exports.count = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'count\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.search = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'search\' in Patient service.';
	logger.info(message);
	reject(new Error(message));
});

module.exports.searchById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'searchById\' in Patient service.';
	logger.info(message);
	reject(new Error(message));
	// resolve({
	// 	'resourceType': 'Patient',
	// 	'id': '1',
	// 	'meta': {
	//    'lastUpdated' : "2015-09-30T14:31:27.885+00:00",
	// 		'versionId': '1001'
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

module.exports.create = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'create\' in Patient service.';
	logger.info(message);
	reject(new Error(message));
});

module.exports.update = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'update\' in Patient service.';
	logger.info(message);
	reject(new Error(message));
});

module.exports.remove = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'remove\' in Patient service.';
	logger.info(message);
	reject(new Error(message));
});

module.exports.searchByHistoryVersionId = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'searchByHistoryVersionId\' in Patient service.';
	logger.info(message);
	reject(new Error(message));
});
