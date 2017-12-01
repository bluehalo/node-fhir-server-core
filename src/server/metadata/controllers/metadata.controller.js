const path = require('path');
const service = require(path.resolve('./src/server/metadata/services/metadata.service'));

/**
 * @name exports
 * @summary Metadata controller
 */
module.exports.getCapabilityStatement = (req, res) => {
  
  res.send('Here is your metadata');
  
};