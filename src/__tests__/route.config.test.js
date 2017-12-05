/* eslint-disable */

const path = require('path');
const glob = require('glob');

const ALLOWED_ARG_TYPES = ['string', 'boolean', 'number', 'date'];
const ALLOWED_METHODS = ['get', 'post', 'put', 'delete'];

let routeConfigs;

describe('Route Config Tests', () => {
  
  beforeAll(() => {
    routeConfigs = glob
      .sync('src/server/*/*.config.js')
      .map(filepath => require(path.resolve(filepath)));
  });
  
  it('should expose a routes object', () => {
    expect(routeConfigs.every(conf => conf.routes)).toBeTruthy();
  });
  
  it('should contain all the required fields', () => {
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
  
});