const path = require('path');
const controller = require(path.resolve('./src/server/patient/controllers/patient.controller'));
const errors = require(path.resolve('./src/server/utils/error.utils'));

let validator = (req, res, next) => {
  let sanitized = {};
  
  // Sanitize url params
  sanitized.id = parseInt(req.params.id, 10);
  
  // Check for any errors
  if (!sanitized.id) {
    return next(errors.invalidParameter());
  }
  
  // Reassign params and move on the next middleware
  req.params = sanitized;

  next();
};


/**
 * @name exports
 * @summary Patient routes
 */
module.exports = app => {
  
  app.get('/patient/:id', validator, controller.getPatient);
  
};