/* eslint-disable */

const path = require('path');
const glob = require('glob');
const { route_dependencies } = require('./profiles/common.dependencies');

const ALLOWED_ARG_TYPES = [
	'string',
	'boolean',
	'number',
	'date',
	'token',
	'uri',
	'quantity',
	'reference',
	'json_string',
	'composite'
];

const ALLOWED_METHODS = [
	'get',
	'post',
	'put',
	'delete'
];

let routeConfigs;

describe('Route Config Tests', () => {

  beforeAll(() => {
    routeConfigs = glob
      .sync('src/server/profiles/*/*.config.js')
      .map(filepath => require(path.resolve(filepath)));
  });

  test('should expose a routes object', () => {
    expect(routeConfigs.every(conf => conf.routes)).toBeTruthy();
  });

  test('should contain all the required fields', () => {
    routeConfigs.forEach((config) => {
      // Routes must be an array
      let { routes } = config;
      expect(Array.isArray(routes)).toBeTruthy();

      // each route must have the following: type, path, args, controller, and scope
      // right now scope is not implemented, so this will update in the near future
      routes.forEach(route => {
        // Type is the method type
        expect(typeof route.type).toEqual('string');
        expect(ALLOWED_METHODS).toContain(route.type);
        // Path is required, it is the route path
        expect(typeof route.path).toEqual('string');
        // Controller must be a function
        expect(typeof route.controller).toEqual('function');
        // Scopes is currently an array, may change
        expect(Array.isArray(route.scopes)).toBeTruthy();
        // Args have their own nested structure and need to at minimum a few properties
        route.args.forEach(arg => {
          expect(typeof arg.name).toEqual('string');
          expect(ALLOWED_ARG_TYPES).toContain(arg.type);
          if (arg.required !== undefined) {
            expect(typeof arg.required).toEqual('boolean');
          }
        });
      });

    });
  });

	test('should have a function name for all route.controllers except for metadata', () => {
		routeConfigs.forEach((config) => {
			// Routes must be an array
			let { routes, routeOptions } = config;
			// We use these to make sure each provided service module has the necessary service
			// to enable a route, the service must have a method that matches the controller's name
			// if the controller does not have a name, we have no way to make that determination
			routes.forEach(route => {
				// Ignore metadata
				if (routeOptions && routeOptions.isMetadata) {
					return;
				}

				if (!route.dependencies || route.dependencies.length === 0) {
					return;
				}

				if (route.dependencies.includes(route_dependencies.SERVICE)) {
					expect(route.controller.name).not.toEqual('');
				}
			});
		});
	});

});
