const path = require('path');
const Validator = require('jsonschema').Validator;
const observationSchema = require(path.resolve('./src/server/schemas/observation.schema'));
const Observation = require(path.resolve('./src/server/resources/Observation'));
const Metadata = require(path.resolve('./src/server/resources/types/Metadata'));
const CodeableConcept = require(path.resolve('./src/server/resources/types/CodeableConcept'));
const Reference = require(path.resolve('./src/server/resources/types/Reference'));
const Quantity = require(path.resolve('./src/server/resources/types/Quantity'));
const Component = require(path.resolve('./src/server/resources/types/Component'));
const Coding = require(path.resolve('./src/server/resources/types/Coding'));

describe('Observation Resource Tests', () => {
	test('should create an Observation Object default type', () => {
		let obs = new Observation();

		const expected = {
			resourceType: 'Observation'
		};

		expect(obs).toBeInstanceOf(Observation);
		expect(obs.resourceType).toEqual('Observation');
		expect(JSON.stringify(obs)).toEqual(JSON.stringify(expected));
	});

	test('should validate observation test object', () => {

		const observation = new Observation();
		observation.id = '2326';
		observation.meta = new Metadata({versionId: '2', lastUpdated: '2017-10-07T23:16:21.620-04:00'});
		observation.status = 'final';
		observation.code = new CodeableConcept({
			coding: [new Coding({
				system: 'http://loinc.org',
				code: '55284-4',
				display: 'Blood Pressure'
			})]
		});
		observation.subject = new Reference({reference: 'Patient/2228'});
		observation.encounter = new Reference({reference: 'Encounter/2322'});
		observation.effectiveDateTime = '2016-09-09T13:11:02-04:00';
		observation.valueQuantity = new Quantity({
			value: 55283.0
		});

		const code1 = new Component({
			'code': {
				'coding': [new Coding({
					'system': 'http://loinc.org',
					'code': '8480-6',
					'display': 'Systolic Blood Pressure'
				})]
			},
			'valueQuantity': new Quantity({
				'value': 184,
				'unit': 'mmHg',
				'system': 'http://unitsofmeasure.org/',
				'code': 'mmHg'
			})
		});

		const code2 = new Component({
			'code': {
				'coding': [new Coding({
					'system': 'http://loinc.org',
					'code': '8462-4',
					'display': 'Diastolic Blood Pressure'
				})]
			},
			'valueQuantity': new Quantity({
				'value': 98,
				'unit': 'mmHg',
				'system': 'http://unitsofmeasure.org/',
				'code': 'mmHg'
			})
		});

		observation.component = [code1, code2];

		const expected = {
			'resourceType': 'Observation',
			'id': '2326',
			'meta': {
				'versionId': '2',
				'lastUpdated': '2017-10-07T23:16:21.620-04:00'
			},
			'status': 'final',
			'code': {
				'coding': [{
					'system': 'http://loinc.org',
					'code': '55284-4',
					'display': 'Blood Pressure'
				}]
			},
			'subject': {
				'reference': 'Patient/2228'
			},
			'encounter': {
				'reference': 'Encounter/2322'
			},
			'effectiveDateTime': '2016-09-09T13:11:02-04:00',
			'valueQuantity': {
				'value': 55283.0
			},
			'component': [{
					'code': {
						'coding': [{
							'system': 'http://loinc.org',
							'code': '8480-6',
							'display': 'Systolic Blood Pressure'
						}]
					},
					'valueQuantity': {
						'value': 184,
						'unit': 'mmHg',
						'system': 'http://unitsofmeasure.org/',
						'code': 'mmHg'
					}
				},
				{
					'code': {
						'coding': [{
							'system': 'http://loinc.org',
							'code': '8462-4',
							'display': 'Diastolic Blood Pressure'
						}]
					},
					'valueQuantity': {
						'value': 98,
						'unit': 'mmHg',
						'system': 'http://unitsofmeasure.org/',
						'code': 'mmHg'
					}
				}
			]
		};

		const v = new Validator();
		expect(JSON.stringify(observation)).toEqual(JSON.stringify(expected));

		// validate serialized object
		expect(v.validate(JSON.parse(JSON.stringify(observation)), observationSchema).valid).toEqual(true);
	});

	test('should create an Observation Object from database type', () => {

		const databaseResult = {
			_id: '5a29526726530607b10cdff7',
			resourceType: 'Observation',
			id: '2',
			meta: {
				versionId: '2.0'
			},
			identifier: [{
				system: 'https://sitenv.org',
				value: '7799'
			}],
			status: 'final',
			category: {
				coding: [{
					system: 'http://hl7.org/fhir/observation-category',
					code: 'laboratory',
					display: 'Laboratory'
				}]
			},
			code: {
				coding: [{
					system: 'http://loinc.org',
					code: '2951-2',
					display: 'Sodium'
				}],
				text: 'Sodium'
			},
			subject: {
				reference: 'Patient/1'
			},
			effectiveDateTime: '2005-07-04T00:00:00+00:00',
			valueQuantity: {
				value: 138,
				unit: 'mmol/L',
				system: 'http://unitsofmeasure.org'
			}
		};

		const observation = new Observation(databaseResult);

		const expected = {
			resourceType: 'Observation',
			id: '2',
			meta: {
				versionId: '2.0'
			},
			identifier: [{
				system: 'https://sitenv.org',
				value: '7799'
			}],
			status: 'final',
			category: {
				coding: [{
					system: 'http://hl7.org/fhir/observation-category',
					code: 'laboratory',
					display: 'Laboratory'
				}]
			},
			code: {
				coding: [{
					system: 'http://loinc.org',
					code: '2951-2',
					display: 'Sodium'
				}],
				text: 'Sodium'
			},
			subject: {
				reference: 'Patient/1'
			},
			effectiveDateTime: '2005-07-04T00:00:00+00:00',
			valueQuantity: {
				value: 138,
				unit: 'mmol/L',
				system: 'http://unitsofmeasure.org'
			}
		};



		expect(observation).toBeInstanceOf(Observation);
		expect(observation.resourceType).toEqual('Observation');
		expect(JSON.stringify(observation)).toEqual(JSON.stringify(expected));
	});

});

