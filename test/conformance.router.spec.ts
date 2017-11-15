import * as mocha from 'mocha'
import * as chai from 'chai'
import chaiHttp = require('chai-http')

import server from '../src/server'

chai.use(chaiHttp)
const expect = chai.expect

const METADATA_ENDPOINT = '/metadata'

const EXPECTED_RESOURCE_TYPE = 'Conformance'

describe(`GET ${METADATA_ENDPOINT}`, () => {

	it('responds with a well-formed FHIR conformance statement', async () => {
		const res = await chai.request(server).get(METADATA_ENDPOINT)
		expect(res.status).to.equal(200)
		expect(res).to.be.json
		expect(res.body).to.have.all.keys([
			/* TODO: more keys needed here */
			'resourceType'
		])
	})

	it(`has resourceType=${EXPECTED_RESOURCE_TYPE}`, async () => {
		const res = await chai.request(server).get(METADATA_ENDPOINT)
		expect(res.body.resourceType).to.eql(EXPECTED_RESOURCE_TYPE)
	})
})
