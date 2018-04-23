const path = require('path');

let base = path.join(__dirname, '../..');

let resolveFromVersion = (version, relative_path) => {
	return path.join(base, '/server/standards/', version, relative_path);
};

let resolve = (relative_path) => {
	return path.join(base, relative_path);
};

module.exports = {
	resolveFromVersion,
	resolve
};
