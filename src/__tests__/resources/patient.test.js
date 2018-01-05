const path = require('path');
const { Patient, PatientContact } = require(path.resolve('./src/server/resources/Patient'));
const Metadata = require(path.resolve('./src/server/resources/types/Metadata'));
const Narrative = require(path.resolve('./src/server/resources/types/Narrative'));
const Identifier = require(path.resolve('./src/server/resources/types/Identifier'));
const Period = require(path.resolve('./src/server/resources/types/Period'));
const Reference = require(path.resolve('./src/server/resources/types/Reference'));
const HumanName = require(path.resolve('./src/server/resources/types/HumanName'));
const ContactPoint = require(path.resolve('./src/server/resources/types/ContactPoint'));
const Address = require(path.resolve('./src/server/resources/types/Address'));
const CodeableConcept = require(path.resolve('./src/server/resources/types/CodeableConcept'));
const Coding = require(path.resolve('./src/server/resources/types/Coding'));

describe('Patient Resource Tests', () => {
	test('should create an Patient Object default type', () => {
		let patient = new Patient();

		const expected = {
			resourceType: 'Patient'
		};

		expect(patient).toBeInstanceOf(Patient);
		expect(patient.resourceType).toEqual('Patient');
		expect(JSON.stringify(patient)).toEqual(JSON.stringify(expected));
	});

	test('should validate Patient test object', () => {

		const patient = new Patient();
		patient.id = '13664';
		patient.meta = new Metadata({
			'versionId': '2',
			'lastUpdated': '2017-07-08T15:57:49.482-04:00'
		});
		patient.text = new Narrative({
			'status': 'generated',
			'div': '<div xmlns=\'http://www.w3.org/1999/xhtml\'> <table> <tbody> <tr> <td>Name</td> <td>Peter James <b>Chalmers</b> (&quot;Jim&quot;) </td> </tr> <tr> <td>Address</td> <td>534 Erewhon, Pleasantville, Vic, 3999</td> </tr> <tr> <td>Contacts</td> <td>Home: unknown. Work: (03) 5555 6473</td> </tr> <tr> <td>Id</td> <td>MRN: 12345 (Acme Healthcare)</td> </tr> </tbody> </table> </div>'
		});

		patient.identifier = new Identifier({
			'use': 'usual',
			'type': {
				'coding': [{
					'system': 'http://hl7.org/fhir/v2/0203',
					'code': 'MR'
				}]
			},
			'system': 'urn:oid:1.2.36.146.595.217.0.1',
			'value': '12345',
			'period': new Period({
				'start': '2001-05-06'
			}),
			'assigner': new Reference({
				'display': 'Acme Healthcare'
			})
		});
		patient.name = [new HumanName({
			'use': 'official',
			'family': [
				'Chalmers'
			],
			'given': [
				'Peter',
				'James'
			]
		}),
		new HumanName({
			'use': 'usual',
			'given': [
				'Jim'
			]
		})];

		patient.telecom = [
			new ContactPoint(
				{'use': 'home'}
			),
			new ContactPoint({
				'system': 'phone',
				'value': '(03) 5555 6473',
				'use': 'work'
			})
		];

		patient.gender = 'male';
		patient.birthDate = '1974-12-25';
		patient.deceasedBoolean = false;
		const address1 = new Address({
			'use': 'home',
			'type': 'both',
			'line': [
				'534 Erewhon St'
			],
			'city': 'PleasantVille',
			'district': 'Rainbow',
			'state': 'Vic',
			'postalCode': '3999',
			'period': new Period({
				'start': '1974-12-25'
			})
		});

		patient.address = address1;

		const contact1 = new PatientContact({
			'relationship': [new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://hl7.org/fhir/patient-contact-relationship',
					'code': 'partner'
				})]
			})],
			'name': new HumanName({
				'family': [
					'du',
					'Marché'
				],
				'given': [
					'Bénédicte'
				]
			}),
			'telecom': [new ContactPoint({
				'system': 'phone',
				'value': '+33 (237) 998327'
			})],
			'gender': 'female',
			'period': new Period({
				'start': '2012'
			})
		});

		patient.contact = [contact1];
		patient.managingOrganization = new Reference({
			'reference': 'Organization/3740'
		});

		const expected = {
			'resourceType': 'Patient',
			'id': '13664',
			'meta': {
				'versionId': '2',
				'lastUpdated': '2017-07-08T15:57:49.482-04:00'
			},
			'text': {
				'status': 'generated',
				'div': '<div xmlns=\'http://www.w3.org/1999/xhtml\'> <table> <tbody> <tr> <td>Name</td> <td>Peter James <b>Chalmers</b> (&quot;Jim&quot;) </td> </tr> <tr> <td>Address</td> <td>534 Erewhon, Pleasantville, Vic, 3999</td> </tr> <tr> <td>Contacts</td> <td>Home: unknown. Work: (03) 5555 6473</td> </tr> <tr> <td>Id</td> <td>MRN: 12345 (Acme Healthcare)</td> </tr> </tbody> </table> </div>'
			},
			'identifier': [{
				'use': 'usual',
				'type': {
					'coding': [{
						'system': 'http://hl7.org/fhir/v2/0203',
						'code': 'MR'
					}]
				},
				'system': 'urn:oid:1.2.36.146.595.217.0.1',
				'value': '12345',
				'period': {
					'start': '2001-05-06'
				},
				'assigner': {
					'display': 'Acme Healthcare'
				}
			}],
			'name': [{
					'use': 'official',
					'family': [
						'Chalmers'
					],
					'given': [
						'Peter',
						'James'
					]
				},
				{
					'use': 'usual',
					'given': [
						'Jim'
					]
				}
			],
			'telecom': [{
					'use': 'home'
				},
				{
					'system': 'phone',
					'value': '(03) 5555 6473',
					'use': 'work'
				}
			],
			'gender': 'male',
			'birthDate': '1974-12-25',
			'deceasedBoolean': false,
			'address': [{
				'use': 'home',
				'type': 'both',
				'line': [
					'534 Erewhon St'
				],
				'city': 'PleasantVille',
				'district': 'Rainbow',
				'state': 'Vic',
				'postalCode': '3999',
				'period': {
					'start': '1974-12-25'
				}
			}],
			'contact': [{
				'relationship': [{
					'coding': [{
						'system': 'http://hl7.org/fhir/patient-contact-relationship',
						'code': 'partner'
					}]
				}],
				'name': {
					'family': [
						'du',
						'Marché'
					],
					'given': [
						'Bénédicte'
					]
				},
				'telecom': [{
					'system': 'phone',
					'value': '+33 (237) 998327'
				}],
				'gender': 'female',
				'period': {
					'start': '2012',
				}
			}],
			'managingOrganization': {
				'reference': 'Organization/3740'
			}
		};

		expect(JSON.stringify(patient)).toEqual(JSON.stringify(expected));
	});
});
