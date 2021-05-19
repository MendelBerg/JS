/* eslint-disable no-restricted-syntax */
function checkSum(arr) {
	if (!Array.isArray(arr)) {
		return null;
	}

	let sum = 0;

	for (const num of arr) {
		sum += num;
	}

	return sum > 100;
}

console.log(checkSum([12,100,3]));