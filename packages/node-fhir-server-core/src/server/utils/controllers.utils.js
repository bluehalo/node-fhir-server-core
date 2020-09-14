const controllersR4 = require('../resources/4_0_0/controllers');
const controllers3 = require('../resources/3_0_1/controllers');
const controllers1 = require('../resources/1_0_2/controllers');

/**
 *
 * @param {String} version
 * @param {String} resourceName
 */
const getController = (version, resourceName) => {
  switch (version) {
    case '4_0_0':
      return controllersR4[resourceName];
    case '3_0_1':
      return controllers3[resourceName];
    case '1_0_2':
      return controllers1[resourceName];
  }
};

module.exports = {
  getController,
};
