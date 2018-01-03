const controller = require('./controllers/patient.controller');

let routes = [
	{
		type: 'get',
		path: '/dstu2/patient',
		corsOptions: {
			methods: ['GET']
		},
		args: [{
			name: 'name',
			type: 'string'
		}, {
			name: 'birthdate',
			type: 'string'
		}, {
			name: 'gender',
			type: 'string'
		}, {
			name: 'given',
			type: 'string'
		}],
		scopes: [],
		controller: controller.getPatient
	},
	{
		type: 'get',
		path: '/dstu2/patient/:id',
		corsOptions: {
			methods: ['GET']
		},
		args: [{
			name: 'id',
			type: 'string',
			required: true
		}],
		scopes: [],
		controller: controller.getPatientById
	}
];

let codes = {
	gender: ['male', 'female', 'other', 'unknown']
};

/**
 * @name exports
 * @summary Patient config
 */
module.exports = {
	routes,
	codes
};
