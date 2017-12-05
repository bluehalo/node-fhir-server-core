const nodemon = require('nodemon');
const path = require('path');
const logger = require(path.resolve('./src/lib/winston'));

nodemon({
  ignore: ['node_modules'],
  script: 'src/server/server',
  ext: 'js json',
  verbose: true,
  watch: [
    'src/scripts/**/*.js',
    'src/server/**/*.js',
    'src/config/**/*.js',
    'src/env/**/*.js',
    'src/lib/**/*.js'
  ],
  env: process.env
});

nodemon.on('restart', files => {
  logger.verbose(`Nodemon restarting because ${files.join(',')} changed.`);
})
.on('crash', () => {
  logger.error('Nodemon crashed. Waiting for changes to restart.');
});
