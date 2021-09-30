const controllerUtils = require('./controllers.utils');
const testConfig = require('../../test.config');

const SUPPORTED_VERSIONS = testConfig.profiles.Patient.versions;

describe('Controller Utils test', () => {
  SUPPORTED_VERSIONS.forEach((version) => {
    test(`should get proper controller for version ${version}`, () => {
      const controller = controllerUtils.getController(version, 'patient');
      expect(controller).toBeTruthy();
    });
  });
});
