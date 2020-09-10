/**
 * @function invariant
 * @param {Boolean} condition - Some condition we are checking
 * @param {String} message - Message to throw if condition is falsy
 * @description Used to make assertions on some condition
 */
module.exports = function invariant(condition, message) {
	if (!condition && process.env.NODE_ENV !== 'production') {
		throw new Error(message);
	}
};
