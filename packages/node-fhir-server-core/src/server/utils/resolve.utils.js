const path = require('path');

const base = path.join(__dirname, '../..');

const resolveFromVersion = (version = '4_0_1', relative_path = '') => {
  return path.join(base, '/server/resources/', version, relative_path);
};

const resolveSchema = (version = '4_0_1', schema = '') => {
  let lowercaseKey = schema.toLowerCase();
  return path.join(base, '/server/resources/', version, 'schemas', lowercaseKey);
};

const resolve = (relative_path = '') => {
  return path.join(base, relative_path);
};

module.exports = {
  resolveFromVersion,
  resolveSchema,
  resolve,
};
