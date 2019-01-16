/**
 * @name exports
 * @summary Noop Middleware function
 * @example
 * route.use(server.env.AUTHENTICATION ? authMiddleware : noopMiddleware)
 */
module.exports = function noopMiddleware(req, res, next) {
	return next();
};
