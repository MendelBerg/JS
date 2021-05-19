/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
function squareArray(numbers) {
	if (!Array.isArray(numbers)) {
		return null;
	}

	const numbersSquared = [];

	for (const num of numbers) {
		numbersSquared.push(num * num);
	}

	return numbersSquared;
}


console.log(squareArray([1,2,3,4]));