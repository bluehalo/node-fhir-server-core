// 'use strict'
//
// import * as mocha from 'mocha'
// import * as chai from 'chai'
// import chaiHttp = require('chai-http')
//
// import server from '../src/server'
//
// chai.use(chaiHttp)
// const expect = chai.expect
// 
// const TEST_ENDPOINT = '/'
//
// const EXPECTED_TYPE = 'application/json'
// const EXPECTED_MESSAGE = 'Hello World!'
//
// describe('GET /', () => {
//
// 	it(`should be type=${EXPECTED_TYPE}`, async () => {
// 		const res = await chai.request(server).get(TEST_ENDPOINT)
// 		expect(res.type).to.eql(EXPECTED_TYPE)
// 	})
//
// 	it(`should have a message prop=${EXPECTED_MESSAGE}`, async () => {
// 		const res = await chai.request(server).get(TEST_ENDPOINT)
// 		expect(res.body.message).to.eql(EXPECTED_MESSAGE)
// 	})
// })
