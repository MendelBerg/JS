/* eslint-disable no-plusplus */
function getSpecialNumbers(m, n) {
	const numbers = [];

	for (let i = m; i <= n; i++) {
		if (i%3 === 0) {
			numbers.push(i);
		}
	}

	return numbers;
}