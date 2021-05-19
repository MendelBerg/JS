/* eslint-disable no-plusplus */
function getArrayBounds(numbers) {
	if (!Array.isArray(numbers)) {
		return null;
	}

	return [numbers.length, numbers[0], numbers[numbers.length - 1]];
}

console.log(getArrayBounds([12,3,4,5]));