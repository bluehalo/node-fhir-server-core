import * as mocha from 'mocha'
import * as chai from 'chai'
import chaiHttp = require('chai-http')

import server from '../src/server'

chai.use(chaiHttp)
const expect = chai.expect

const TEST_ENDPOINT_ALL = '/api/v1/patients'
const TEST_ENDPOINT_ONE = '/api/v1/patients/1'

const EXPECTED_PATIENT_ALL = 'Wolverine'
const EXPECTED_PATIENT_ONE = 'Luke Cage'

describe(`GET ${TEST_ENDPOINT_ALL}`, () => {

	it('responds with JSON array', async () => {
		const res = await chai.request(server).get(TEST_ENDPOINT_ALL)
		expect(res.status).to.equal(200)
		expect(res).to.be.json
		expect(res.body).to.be.an('array')
		expect(res.body).to.have.length(5)
	})

	it(`should include expected patient=${EXPECTED_PATIENT_ALL}`, async () => {
		const res = await chai.request(server).get(TEST_ENDPOINT_ALL)
		let Patient = res.body.find((patient: any) => patient.name === EXPECTED_PATIENT_ALL)
		expect(Patient).to.exist
		expect(Patient).to.have.all.keys([
			'id',
			'name',
			'aliases',
			'occupation',
			'gender',
			'height',
			'hair',
			'eyes',
			'powers'
		])
	})
})

describe(`GET ${TEST_ENDPOINT_ONE}`, () => {

	it('responds with a single JSON object', async () => {
		const res = await chai.request(server).get(TEST_ENDPOINT_ONE)
		expect(res.status).to.equal(200)
		expect(res).to.be.json
		expect(res.body).to.be.an('object')
	})

	it(`should return expected patient=${EXPECTED_PATIENT_ONE}`, async () => {
		const res = await chai.request(server).get(TEST_ENDPOINT_ONE)
		expect(res.body.patient.name).to.equal(EXPECTED_PATIENT_ONE)
	})
})
