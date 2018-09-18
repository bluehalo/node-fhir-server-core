/* eslint-disable */

const test_config = require('../../test.config');
const { VERSIONS } = require('../../constants');
const request = require('supertest');
const Server = require('../server');
const resolve_utils = require('../utils/resolve.utils');
let server;

// Helper function to replace express params with mock values
let fillRoute = (route, key) => route.replace(':base_version', VERSIONS['3_0_1']).replace(':id', 1).replace(':resource', key);

//A function to make a custom confirmance statement
let customMakeResource = (base_version, key) => {
    let Resource = require(resolve_utils.resolveFromVersion(base_version, key));
  
    // Return our conformance statement
    return {
      type: Resource.__resourceType,
      profile: {
        reference: `http://example.org/fhir/${key}.html`
      },
      conditionalDelete: 'not-supported',
      searchParam:  [
        {
          "name": "_id",
          "type": "token",
          "documentation": "The ID of the resource"
        }]
    };
}	

describe('Conformance Tests', () => {

	test('Test that every profile gets a default resource entry ', async () => {

		// Standup a basic server
		let config = Object.assign({}, test_config, { logging: { level: 'emerg' }});
		server = new Server(config)
			.setProfileRoutes()
			.setErrorRoutes();

        let keys = Object.keys(server.config.profiles);
		let { routes } = require('../route.config');


        let response = await request(server.app)['get']('/3_0_1/metadata');
        expect(response.body.resourceType).toBe("CapabilityStatement");
        //Check that the reference for each resource is the default
		for (let key of keys) {
            let account_resource = response.body.rest[0].resource.find( rsc => rsc.type === key);
            expect(account_resource.profile.reference).toBe(`http://hl7.org/fhir/${key}.html`);
		}
	}, 60000);

	test('Test that every profile gets a custom resource entry ', async () => {

        //Add a custom make resource to the test services
        let mock_service = require('../profiles/service.mock.js');  
        mock_service.makeResource = customMakeResource;
        // Standup a basic server
		let config = Object.assign({}, test_config, { logging: { level: 'emerg' }});
		server = new Server(config)
			.setProfileRoutes()
			.setErrorRoutes();

        let keys = Object.keys(server.config.profiles);
		let { routes } = require('../route.config');

        //Patch the test config to include our custom makeResource
		for (let key of keys) {
            server.config.profiles[key].service = mock_service;
        }
        let response = await request(server.app)['get']('/3_0_1/metadata');
        expect(response.body.resourceType).toBe("CapabilityStatement");
        //Check the reference for each resource is the customised one
		for (let key of keys) {
            let account_resource = response.body.rest[0].resource.find( rsc => rsc.type === key);
            expect(account_resource.profile.reference).toBe(`http://example.org/fhir/${key}.html`);
		}
	}, 60000);

});
