const controllerUtils = require('./controllers.utils');

const SUPPORTED_VERSIONS = ['1_0_2', '3_0_1', '4_0_0', '4_0_1'];

describe('Controller Utils test', () => {
  test('should get proper controller for all resource versions', () => {
    SUPPORTED_VERSIONS.forEach((version) => {
      const controller = controllerUtils.getController(version, 'patient');
      expect(controller).toBeTruthy();
    });
  });
});
