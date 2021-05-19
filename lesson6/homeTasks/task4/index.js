/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable spaced-comment */
const increaseEvenEl = (arr, delta) => {
	if (!Array.isArray(arr)) {
		return null;
	}

	const deltaArr = []

	for (const num of arr) {
		deltaArr.push((num % 2 === 0) ? num + delta : num);
	}

	return deltaArr;
}



//example 1:

//input 
const arr = [2, 5, 6, 8, 11, 9, 4];
const delta = 20;
increaseEvenEl(arr, delta);

//output
//[22, 5, 26, 28, 11, 9, 24]