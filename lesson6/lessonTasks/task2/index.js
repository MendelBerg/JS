/* eslint-disable no-plusplus */
function getSum(numbers) {
	if (!Array.isArray(numbers)) {
		return null;
	}

	let sum = 0;

	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}

	return sum;
}