const { route_args, common_args } = require('../common.arguments');
const observation_args = require('./observation.arguments');
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
    args: [
			route_args.VERSION,
			Object.assign({ required: true }, observation_args.PATIENT),
			observation_args.CATEGORY,
			observation_args.CODE,
			observation_args.DATE,
			common_args._FORMAT
		],
    scopes: scopes,
    controller: controller.getObservations
	},
	{
    type: 'post',
		path: '/:version/observation/_search',
		corsOptions: {
			methods: ['POST']
		},
    args: [
			route_args.VERSION,
			Object.assign({ required: true }, observation_args.PATIENT),
			observation_args.CATEGORY,
			observation_args.CODE,
			observation_args.DATE,
			common_args._FORMAT
		],
    scopes: scopes,
    controller: controller.getObservations
  },
  {
    type: 'get',
		path: '/:version/observation/:id',
		corsOptions: {
			methods: ['GET']
		},
    args: [
			route_args.VERSION,
			route_args.ID
		],
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
