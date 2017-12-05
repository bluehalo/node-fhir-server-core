const assets = require('./assets');
const glob = require('glob');
const path = require('path');

let getFilePaths = () => ({
  files: {
    routes: glob.sync(assets.routes)
  }
});

let make = function () {
  // If there is no NODE_ENV set, throw an error. One must be specified to continue.
  if (process.env.NODE_ENV === null || process.env.NODE_ENV === undefined) {
    throw new Error(
			'You do not have an environment file matching your NODE_ENV.'
			+ ' You either need to set NODE_ENV to development or production'
			+ ` or create a environment file called ${process.env.NODE_ENV}.js in 'src/env'.`
		);
  }

  // Grab our config's
  let envConfig = require(path.resolve(`./src/env/${process.env.NODE_ENV}`));
  let defaultConfig = require(path.resolve('./src/env/default'));

  return Object.assign({}, defaultConfig, envConfig, getFilePaths());
};

module.exports = make();
