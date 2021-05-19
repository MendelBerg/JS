/* eslint-disable no-plusplus */
function swap(numbers) {
	const [start, ...rest] = numbers

	return [...rest, start];
}

console.log(swap([1,2,3,4,5]));