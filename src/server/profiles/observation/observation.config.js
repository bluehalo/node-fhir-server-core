const controller = require('./observation.controller');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');

const scopes = [
  'user/*.*',
  'user/Observation.*',
  'user/Observation.read',
  'user/*.read',
  'patient/*.*',
  'patient/Observation.*',
  'patient/Observation.read',
  'patient/*.read'
];


let routes = [
  {
    type: 'get',
		base: VERSIONS.DSTU2,
		path: '/observation',
		corsOptions: {
			methods: ['GET']
		},
    args: [{
      name: 'patient',
			type: 'string',
			required: true
    }, {
      name: 'category',
      type: 'string'
    }, {
      name: 'code',
      type: 'string'
    }, {
      name: 'date',
      type: 'string'
    }, {
			name: '_format',
			type: 'string'
		}],
    scopes: scopes,
    controller: controller.getObservations
	},
	{
    type: 'post',
		base: VERSIONS.DSTU2,
		path: '/observation/_search',
		corsOptions: {
			methods: ['POST']
		},
    args: [{
      name: 'patient',
			type: 'string',
			required: true
    }, {
      name: 'category',
      type: 'string'
    }, {
      name: 'code',
      type: 'string'
    }, {
      name: 'date',
      type: 'string'
    }, {
			name: '_format',
			type: 'string'
		}],
    scopes: scopes,
    controller: controller.getObservations
  },
  {
    type: 'get',
		base: VERSIONS.DSTU2,
		path: '/observation/:id',
		corsOptions: {
			methods: ['GET']
		},
    args: [{
      name: 'id',
      type: 'number',
      required: true
    }],
    scopes: scopes,
    controller: controller.getObservationById
  }
];



/**
 * @name exports
 * @summary Observations config
 */
module.exports = {
	routes,
	routeOptions: {
		profileKey: CONFIG_KEYS.OBSERVATION,
		version: VERSIONS.DSTU2
	}
};
