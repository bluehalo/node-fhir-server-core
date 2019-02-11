const { INTERACTIONS } = require('../constants');

let routes = [
	{
		type: 'patch',
		path: '/:base_version/:resource/:id',
		interaction: INTERACTIONS.PATCH,
	},
	{
		type: 'get',
		path: '/:base_version/:resource',
		interaction: INTERACTIONS.SEARCH,
	},
	{
		type: 'post',
		path: '/:base_version/:resource/_search',
		interaction: INTERACTIONS.SEARCH,
	},
	{
		type: 'get',
		path: '/:base_version/:resource/:id/_history/:version_id',
		interaction: INTERACTIONS.SEARCH_BY_VID,
	},
	{
		type: 'get',
		path: '/:base_version/:resource/_history',
		interaction: INTERACTIONS.HISTORY,
	},
	{
		type: 'get',
		path: '/:base_version/:resource/:id/_history',
		interaction: INTERACTIONS.HISTORY_BY_ID,
	},
	{
		type: 'get',
		path: '/:base_version/:resource/:id',
		interaction: INTERACTIONS.SEARCH_BY_ID,
	},
	{
		type: 'post',
		path: '/:base_version/:resource',
		interaction: INTERACTIONS.CREATE,
	},
	{
		type: 'put',
		path: '/:base_version/:resource/:id',
		interaction: INTERACTIONS.UPDATE,
	},
	{
		type: 'delete',
		path: '/:base_version/:resource/:id',
		interaction: INTERACTIONS.DELETE,
	},
	/* eslint-disable no-useless-escape */
	{
		type: 'get',
		path: '/:base_version/:resource/:id/([$])expand',
		interaction: INTERACTIONS.EXPAND_BY_ID,
	},
	/* eslint-disable no-useless-escape */
	{
		type: 'post',
		path: '/:base_version/:resource',
		interaction: INTERACTIONS.OPERATIONS_POST,
	},
	{
		type: 'get',
		path: '/:base_version/:resource',
		interaction: INTERACTIONS.OPERATIONS_GET,
	},
];

/**
 * @name exports
 * @summary Route config
 */
module.exports = {
	routes,
};
