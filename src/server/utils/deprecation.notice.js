// Simple wrapper to use for functions
function deprecationWrapper(func, msg) {
	return function() {
		console.log(msg);
		return func(...arguments);
	};
}

/**
 * @description Simple wrapper function that logs a deprecation notice when a
 * provided function is used. We can use this to help us encourage users to
 * migrate to newer options.
 * @param {Function|Object} funcOrObject - Function we want to mark as deprecated or
 * an object whose function properties we want to mark as deprecated
 * @param {String} message - Deprecation Notice
 * @return {function} Wrapper around provided function
 */
module.exports = function deprecationNotice(funcOrObject, message) {
	// If we have a function simply wrap it
	if (typeof funcOrObject === 'function') {
		return deprecationWrapper(funcOrObject, message);
	}

	// If we have an object, enumerate its properties and wrap all functions
	return Object.getOwnPropertyNames(funcOrObject).reduce((newObj, name) => {
		let maybeFunc = funcOrObject[name];
		if (typeof maybeFunc === 'function') {
			newObj[name] = deprecationWrapper(maybeFunc, message);
		} else {
			newObj[name] = maybeFunc;
		}
		return newObj;
	}, {});
};
