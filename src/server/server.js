const path = require('path');
const config = require(path.resolve('./src/config/config'));
const express = require(path.resolve('./src/lib/express'));
const logger = require(path.resolve('./src/lib/winston'));

logger.info('Starting the application');

express.initialize().then(app => {
  logger.info(`App listening on port: ${config.port}`);
  app.listen(config.port);
})
.catch(err => {
  logger.error('Fatal error starting the application.', err);
  process.exit(err);
});