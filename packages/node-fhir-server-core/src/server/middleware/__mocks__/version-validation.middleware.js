/**
 * Mock Module that return middleware which is also a mock
 */
module.exports = jest.fn(options => {
	return options;
});
