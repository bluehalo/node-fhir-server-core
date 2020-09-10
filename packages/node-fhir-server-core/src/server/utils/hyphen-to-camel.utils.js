module.exports = hyphenString => {
	return hyphenString.replace(/-([a-z])/g, function(g) {
		return g[1].toUpperCase();
	});
};
