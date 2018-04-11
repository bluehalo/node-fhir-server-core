const controller = require('./observation.controller');
const { CONFIG_KEYS } = require('../../../constants');

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
		path: '/:version/observation',
		corsOptions: {
			methods: ['GET']
		},
    args: [{
			name: 'version',
			type: 'string'
		}, {
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
		path: '/:version/observation/_search',
		corsOptions: {
			methods: ['POST']
		},
    args: [{
			name: 'version',
			type: 'string'
		}, {
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
		path: '/:version/observation/:id',
		corsOptions: {
			methods: ['GET']
		},
    args: [{
			name: 'version',
			type: 'string'
		}, {
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
		profileKey: CONFIG_KEYS.OBSERVATION
	}
};
