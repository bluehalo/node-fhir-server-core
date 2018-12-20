const nodemon = require('nodemon');
const logger = require('../server/winston')({ level: 'debug' });

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
