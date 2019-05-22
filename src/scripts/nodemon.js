const winston = require('../server/winston.js');
const nodemon = require('nodemon');

let logger = winston.get('default');

nodemon({
	ignore: ['node_modules'],
	script: 'src/runner',
	ext: 'js json',
	verbose: true,
	watch: ['src/**/*.js'],
	env: process.env,
});

nodemon
	.on('restart', files => {
		logger.verbose(`Nodemon restarting because ${files.join(',')} changed.`);
	})
	.on('crash', () => {
		logger.error('Nodemon crashed. Waiting for changes to restart.');
	});
