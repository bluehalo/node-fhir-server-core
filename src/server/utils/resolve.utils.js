const path = require('path');

let base = path.join(__dirname, '../..');

let resolveFromVersion = (version = '4_0_0', relative_path = '') => {
	let lowercaseKey = relative_path.toLowerCase();
	return path.join(base, '/server/resources/', version, 'schemas', lowercaseKey);
};

let resolve = (relative_path = '') => {
	return path.join(base, relative_path);
};

module.exports = {
	resolveFromVersion,
	resolve,
};
