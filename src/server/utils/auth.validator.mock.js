/**
 * @name getClient
 * @description Gets the client object used to help validate the signature
 * and token.  This depends on how your oauth is set up.  This could be an
 * introspection endpoint, shares DB access with oauth server, a private
 * endpoint, etc.
 *
 * @param {req} req - FHIR Core server config object
 * @param {Winston} logger - Winston logger
 * @return {Promise}
 */
module.exports.getClient = (_req, _logger) => new Promise((resolve, _reject) => {
	resolve({
		id: 1,
		clientId: 'xyz123',
		secret: 'ssh-password',
		scope: 'launch patient/*.read'
	});
});
