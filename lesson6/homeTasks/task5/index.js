/* eslint-disable no-plusplus */
function reverseArray(arr) {
	if (!Array.isArray(arr)) {
		return null;
	}

	const arrReverse = [];

	for (let i = arr.length-1, j=0; i >= 0; i--, j++) {
		arrReverse[j] = arr[i];
	}

	return arrReverse;
}


console.log(reverseArray([1,2,3,4]));