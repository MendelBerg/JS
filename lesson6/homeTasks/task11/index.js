/* eslint-disable no-restricted-syntax */
const includes = (arr, num) => {
	for (const el of arr) {
		if (num === el) {
			return true;
		}
	}

	return false;
};

// examples
includes([1, 4, 8, 3], 3); // ==> true
includes([1, 4, 8, 3], 5); // ==> false

