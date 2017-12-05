/**
 * @class ServerError
 * @summary Extends error to add additional code property
 */
class ServerError extends Error {
  constructor (code, message) {
    super(message);
    
    if (Error.captureStackStrace) {
      Error.captureStackStrace(this, ServerError);
    }

    this.code = code;
  }
}

/**
 * @name exports
 * @static
 * @summary Error Configurations
 */
module.exports = {
  invalidParameter: () => new ServerError(400, 'Invalid parameter'),
  unauthorized: () => new ServerError(401, 'Unauthorized request'),
  insufficientScope: () => new ServerError(403, 'Insufficient scope'),
  notFound: () => new ServerError(404, 'Not found'),
  deleted: () => new ServerError(410, 'Resource deleted'),
  custom: (code, message) => new ServerError(code, message),
  isServerError: (err) => err instanceof ServerError
};
