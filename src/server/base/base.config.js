const controller = require('./base.controller.js');

let route = {
    type: 'put',
    path: '/:base_version/',
    corsOptions: {
        methods: ['PUT'],
    },
    args: [],
    controller: controller.batch
};

/**
 * @name exports
 * @summary Base config
 */
module.exports = {
    route
};