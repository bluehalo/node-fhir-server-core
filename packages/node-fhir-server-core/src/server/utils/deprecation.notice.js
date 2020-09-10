/**
 * @function wrapper
 * @description wrapper function used by notice to wrap properties with a log
 * @param {Function} func - function to wrap
 * @param {String} message - message to log
 * @return {Function}
 */
function wrapper(func, message) {
	return function() {
		let results = func(...arguments);
		console.log(message);
		return results;
	};
}

/**
 * @function isBasePrototype
 * @description Is the provided proto one of the base prototypes
 * @param {Object} proto - prototype to evaluate
 * @return {Boolean}
 */
function isBasePrototype(proto) {
	return [Array.prototype, Object.prototype, Function.prototype].some(val => {
		return val === proto;
	});
}

/**
 * @function notice
 * @description Utility to wrap objects or functions and log when any function
 * associated with this is used. Only wraps properties on the top level.
 * @param {Function|Object} item - Item we intend to wrap with log messages
 * @param {String} message - Message for logging
 * @return {Function|Object} wrapped version of the given object
 */
function notice(item, message) {
	if (typeof item === 'function') {
		return wrapper(item, message);
	}

	let proto = Object.getPrototypeOf(item);
	let keys = Object.getOwnPropertyNames(item);

	if (proto && !isBasePrototype(proto)) {
		keys = keys.concat(Object.getOwnPropertyNames(proto));
	}

	return keys.reduce((all, key) => {
		let property = item[key];

		if (typeof property === 'function') {
			all[key] = wrapper(property, message);
		} else {
			all[key] = property;
		}

		return all;
	}, Object.create(Object.getPrototypeOf(item)));
}

module.exports = notice;
