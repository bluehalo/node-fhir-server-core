const assets = require('./assets');
const glob = require('glob');
const path = require('path');

let getFilePaths = () => ({
  files: {
    routes: glob.sync(assets.routes)
  }
});

let make = function () {
  // If there is no NODE_ENV set, set one to development, we may change this to exit
  // and force the developer to sepcify one
  if (process.env.NODE_ENV === null || process.env.NODE_ENV === undefined) {
    process.env.NODE_ENV = 'development';
  }
  
  // Grab our config's
  let envConfig = require(path.resolve(`./src/env/${process.env.NODE_ENV}`));
  let defaultConfig = require(path.resolve('./src/env/default'));
  
  return Object.assign({}, defaultConfig, envConfig, getFilePaths());
};

module.exports = make();