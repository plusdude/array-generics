/**
 * Implementation of the Array methods (ECMAScript 5th edition)
 * with shorthand notation (introduced in JavaScript 1.6)
 *
 * Copyright 2013 Alex K. @plusdude
 * http://opensource.org/licenses/MIT
 */
(function (infinity, undefined) {
	/*jshint bitwise:false, maxlen:95, plusplus:false, validthis:true*/
	"use strict";

	/**
	 * Converts argument to an integral numeric value.
	 * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.4
	 */
	function toInteger(value) {
		var number;

		// let number be the result of calling ToNumber on the input argument
		number = Number(value);
        return (
            // if number is NaN, return 0
            number !== number ? 0 :

            // if number is 0, Infinity, or -Infinity, return number
            0 === number || infinity === number || -infinity === number ? number :

            // return the result of computing sign(number) * floor(abs(number))
            (0 < number || -1) * Math.floor(Math.abs(number))
        );
	}

	/**
	 * Converts argument to a value of type Object.
	 * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.9
	 */
	function toObject(value) {
		var error;

        // value is undefined or null
        if (undefined === value || null === value) {

            // error message and call stack, if supported
            throw (error = new Error("can't convert " + value + " to object")).stack || error;
        }
        return new Object(value);
	}

	/**
	 * Returns a shallow copy of a portion of an array.
	 * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.10
	 */
	function slice(begin, end) {
		var elements, result, length, index, count;

		// convert elements to object
		elements = toObject(this);

		// convert length to unsigned 32 bit integer
		length = elements.length >>> 0;

		// begin index is set
		if (undefined !== begin) {

			// convert to integer
			begin = toInteger(begin);

			// handle -begin, begin > length
			index = 0 > begin ? Math.max(length + begin, 0) : Math.min(begin, length);
		} else {
			// default value
			index = 0;
		}
		// end index is set
		if (undefined !== end) {

			// convert to integer
			end = toInteger(end);

			// handle -end, end > length
			length = 0 > end ? Math.max(length + end, 0) : Math.min(end, length);
		}
		// create result array
		result = new Array(length - index);

		// iterate over elements
		for (count = 0; index < length; ++index, ++count) {

			// current index exists
			if (index in elements) {

				// copy current element to a result array
				result[count] = elements[index];
			}
		}
		return result;
	}

	/**
	 * Returns the first index at which a given element
	 * can be found in the array.
	 * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.14
	 */
	function indexOf(target, begin) {
		var elements, length, index;

		// convert elements to object
		elements = toObject(this);

		// convert length to unsigned 32 bit integer
		length = elements.length >>> 0;

		// calculate begin index, if is set
		if (undefined !== begin) {

			// convert to integer
			begin = toInteger(begin);

			// handle -begin, begin > length
			index = 0 > begin ? Math.max(length + begin, 0) : Math.min(begin, length);
		} else {
			// default value
			index = 0;
		}
		// iterate over elements
		for (; index < length; ++index) {

			// current index exists, target element == current element
			if (index in elements && target === elements[index]) {

				// break loop, target element found
				return index;
			}
		}
		// target element not found
		return -1;
	}

	/**
	 * Returns the last index at which a given element
	 * can be found in the array.
	 * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.15
	 */
	function lastIndexOf(target, begin) {
		var elements, length, index;

		// convert elements to object
		elements = toObject(this);

		// convert length to unsigned 32 bit integer
		length = elements.length >>> 0;

		// calculate begin index, if is set
		if (undefined !== begin) {

			// convert to integer
			begin = toInteger(begin);

			// handle -begin, begin > length - 1
			index = 0 > begin ? Math.max(length + begin, 0) : Math.min(begin, length - 1);
		} else {
			// default value
			index = length - 1;
		}
		// iterate over elements backwards
		for (; -1 < index; --index) {

			// current index exists, target element == current element
			if (index in elements && target === elements[index]) {

				// break loop, target element found
				return index;
			}
		}
		// target element not found
		return -1;
	}

	/**
	 * Executes a provided function once per array element.
	 * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.18
	 */
	function forEach(callback, scope) {
		var elements, error, length, index;

		// convert elements to object
		elements = toObject(this);

		// callback is not a function
		if ("function" !== typeof callback) {

			// error message and call stack, if supported
			throw (error = new Error(NO_CALLBACK)).stack || error;
		}
		// convert length to unsigned 32 bit integer
		length = elements.length >>> 0;

		// iterate over elements
		for (index = 0; index < length; ++index) {

			// current index exists
			if (index in elements) {

				// execute callback
				callback.call(scope, elements[index], index, elements);
			}
		}
	}

	/**
	 * Tests whether all elements in the array pass the test
	 * implemented by the provided function.
	 * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.16
	 */
	function every(callback, scope) {
		var elements, error, length, index;

		// convert elements to object
		elements = toObject(this);

		// callback is not a function
		if ("function" !== typeof callback) {

			// error message and call stack, if supported
			throw (error = new Error(NO_CALLBACK)).stack || error;
		}
		// convert length to unsigned 32 bit integer
		length = elements.length >>> 0;

		// iterate over elements
		for (index = 0; index < length; ++index) {

			// current index exists
			if (index in elements &&

			// callback returns false
			!callback.call(scope, elements[index], index, elements)) {

				// break loop, test failed
				return false;
			}
		}
		// test passed, controversy began..
		return true;
	}

	/**
	 * Tests whether some element in the array passes the test
	 * implemented by the provided function.
	 * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.17
	 */
	function some(callback, scope) {
		var elements, error, length, index;

		// convert elements to object
		elements = toObject(this);

		// callback is not a function
		if ("function" !== typeof callback) {

			// error message and call stack, if supported
			throw (error = new Error(NO_CALLBACK)).stack || error;
		}
		// convert length to unsigned 32 bit integer
		length = elements.length >>> 0;

		// iterate over elements
		for (index = 0; index < length; ++index) {

			// current index exists
			if (index in elements &&

			// callback returns true
			callback.call(scope, elements[index], index, elements)) {

				// break loop, test passed
				return true;
			}
		}
		// test failed
		return false;
	}

	/**
	 * Creates a new array with all elements that pass the test
	 * implemented by the provided function.
	 * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.20
	 */
	function filter(callback, scope) {
		var elements, result = [], error, length, index, count;

		// convert elements to object
		elements = toObject(this);

		// callback is not a function
		if ("function" !== typeof callback) {

			// error message and call stack, if supported
			throw (error = new Error(NO_CALLBACK)).stack || error;
		}
		// convert length to unsigned 32 bit integer
		length = elements.length >>> 0;

		// iterate over elements
		for (index = count = 0; index < length; ++index) {

			// current index exists
			if (index in elements &&

			// callback returns true
			callback.call(scope, elements[index], index, elements)) {

				// save current element in the result array
				result[count++] = elements[index];
			}
		}
		return result;
	}

	/**
	 * Creates a new array with the results of calling a provided function
	 * on every element in this array.
	 * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.19
	 */
	function map(callback, scope) {
		var elements, result = [], error, length, index;

		// convert elements to object
		elements = toObject(this);

		// callback is not a function
		if ("function" !== typeof callback) {

			// error message and call stack, if supported
			throw (error = new Error(NO_CALLBACK)).stack || error;
		}
		// convert length to unsigned 32 bit integer
		length = elements.length >>> 0;

		// iterate over elements
		for (index = 0; index < length; ++index) {

			// current index exists
			if (index in elements) {

				// save the return value of the callback in the result array
				result[index] = callback.call(scope, elements[index], index, elements);
			}
		}
		return result;
	}

	/**
	 * Apply a function against values of the array (from left-to-right)
	 * as to reduce it to a single value.
	 * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.21
	 */
	function reduce(callback, value) {
		var elements, error, isset, length, index;

		// convert elements to object
		elements = toObject(this);

		// callback is not a function
		if ("function" !== typeof callback) {

			// error message and call stack, if supported
			throw (error = new Error(NO_CALLBACK)).stack || error;
		}
		// status of the initial value
		isset = undefined !== value;

		// convert length to unsigned 32 bit integer
		length = elements.length >>> 0;

		// iterate over elements
		for (index = 0; index < length; ++index) {

			// current index exists
			if (index in elements) {

				// initial value is set
				if (isset) {

					// replace the initial value with the return value of the callback
					value = callback(value, elements[index], index, elements);
				} else {
					// current element becomes initial value
					value = elements[index];

					// status of the initial value
					isset = true;
				}
			}
		}
		// no initial value, even after iteration
		if (!isset) {
			throw (error = new Error(NO_VALUE)).stack || error;
		}
		return value;
	}

	/**
	 * Apply a function against values of the array (from right-to-left)
	 * as to reduce it to a single value.
	 * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.22
	 */
	function reduceRight(callback, value) {
		var elements, error, isset, index;

		// convert elements to object
		elements = toObject(this);

		// callback is not a function
		if ("function" !== typeof callback) {

			// error message and call stack, if supported
			throw (error = new Error(NO_CALLBACK)).stack || error;
		}
		// status of the initial value
		isset = undefined !== value;

		// index of the last element
		index = (elements.length >>> 0) - 1;

		// iterate over elements backwards
		for (; -1 < index; --index) {

			// current index exists
			if (index in elements) {

				// initial value is set
				if (isset) {

					// replace the initial value with the return value of the callback
					value = callback(value, elements[index], index, elements);
				} else {
					// current element becomes initial value
					value = elements[index];

					// status of the initial value
					isset = true;
				}
			}
		}
		// no initial value, even after iteration
		if (!isset) {
			throw (error = new Error(NO_VALUE)).stack || error;
		}
		return value;
	}

	/**
	 * Returns true if an object is an array, false if it is not.
	 * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.3.2
	 */
	function isArray(value) {
		return "[object Array]" === Object.prototype.toString.call(value);
	}

	/**
	 * Assigns method to the Array prototype.
	 * @param {String} key The name of the method to assign.
	 */
	function extendProto(key) {
		Array.prototype[key] = Array.prototype[key] || ES5[key];
	}

	/**
	 * Assigns method to the Array constructor.
	 * @param {String} key The name of the method to assign.
	 */
	function extendArray(key) {
		Array[key] = Array[key] || makeStatic(key);
	}

	/**
	 * Creates static method from an instance method.
	 * @param {String} key The name of the method to create.
	 */
	function makeStatic(key) {
		return function () {
			var parameters = Array.prototype.slice.call(arguments, 1);
			return Array.prototype[key].apply(arguments[0], parameters);
		};
	}

	/**
	 * An error messages.
	 */
	var NO_CALLBACK = "callback is not a function";
	var NO_VALUE = "reduce of empty array with no initial value";

	/**
	 * Assign ES-5 methods to Array constructor and prototype.
	 */
	var ES5 = {
		// accessor methods
		"indexOf": indexOf,
		"lastIndexOf": lastIndexOf,
		// iteration methods
		"forEach": forEach,
		"every": every,
		"some": some,
		"filter": filter,
		"map": map,
		"reduce": reduce,
		"reduceRight": reduceRight
	};
	for (var key in ES5) {
		if (ES5.hasOwnProperty(key)) {
			// a static method
			extendArray(key);
			// an instance method
			extendProto(key);
		}
	}
	Array.isArray = Array.isArray || isArray;

	/**
	 * Assign ES-3 methods to Array constructor.
	 * Note: the toString() method must be omitted.
	 */
	([
		// accessor methods
		"concat",
		"join",
		"slice",
		// mutator methods
		"pop",
		"push",
		"reverse",
		"shift",
		"sort",
		"splice",
		"unshift"
	]).forEach(extendArray);

	/**
	 * Make the slice() method to work with the DOM nodes in IE < 9
	 */
	try {
		Array.slice({});
	} catch (e) {
		Array.prototype.slice = slice;
	}

}(1 / 0));
