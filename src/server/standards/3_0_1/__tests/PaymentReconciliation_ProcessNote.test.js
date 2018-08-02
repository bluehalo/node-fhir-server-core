const PaymentReconciliation_ProcessNote = require('../PaymentReconciliation_ProcessNote');

describe('PaymentReconciliation_ProcessNote Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new PaymentReconciliation_ProcessNote();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(PaymentReconciliation_ProcessNote.__resourceType).toBe('PaymentReconciliation_ProcessNote');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new PaymentReconciliation_ProcessNote();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
