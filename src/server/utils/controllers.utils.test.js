const controllerUtils = require('./controllers.utils');

describe('Controller Utils test', () => {
	test('should get the proper R4 controller by resource name', () => {
		const controller = controllerUtils.getController('4_0_0', 'patient');
		expect(controller).toBeTruthy();
	});
	test('should get the proper STU3 controller by resource name', () => {
		const controller = controllerUtils.getController('3_0_1', 'patient');
		expect(controller).toBeTruthy();
	});
	test('should get the proper V1 controller by resource name', () => {
		const controller = controllerUtils.getController('1_0_2', 'patient');
		expect(controller).toBeTruthy();
	});
});
