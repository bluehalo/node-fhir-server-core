const path = require('path');

/**
 * @name exports
 * @summary Production specific application configurations
 */
module.exports = {
    
  // Server port
  port: 3000,

  // Logging info
  logging: {
      
    level: 'info'

  },
  
  // Security configurations
  security: {
    key: path.resolve('./src/key.pem'),
    cert: path.resolve('./src/cert.pem') 
  },

  // AUTH client ID and secret 
  clientId: 'my cliend id',
  secret: 'secret'
   
};