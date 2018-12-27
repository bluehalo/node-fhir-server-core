const path = require('path');
const fs = require('fs');

let base = path.join(__dirname, '../..');

let resolveFromVersion = (version, relative_path) => {
	let fileIndex;
	let files;
	if (relative_path && typeof relative_path === 'string') {
		files = fs.readdirSync(path.join(__dirname + `/../standards/${version}`)).map(filename => {
			return filename;
		});

		const filesLowerCase = files.map(elm => elm.split('.')[0].toLowerCase());
		fileIndex = filesLowerCase.indexOf(relative_path.toLowerCase());
	}
	return path.join(base, '/server/standards/', version, files[fileIndex] ? files[fileIndex] : relative_path);
};

let resolve = relative_path => {
	return path.join(base, relative_path);
};

module.exports = {
	resolveFromVersion,
	resolve,
};
