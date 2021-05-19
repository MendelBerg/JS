/* eslint-disable no-plusplus */
function checker(arr) {
	if (!Array.isArray(arr)) {
		return null;
	}

	let minNum = arr[0];
	let maxNum = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < minNum) {
			minNum = arr[i];
		} else if (arr[i] > maxNum) {
			maxNum = arr[i];
		}
	}

	return minNum + maxNum > 1000;
}


console.log(checker([1, 2,3,4,5,6,1500,3,2,4,6,7]));