/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
function uniqueCount(numbers) {
	if (!Array.isArray(numbers)) {
		return null;
	}

	const numbersUnique = [];
	let uniqueNumber;

	for (const num of numbers) {
		uniqueNumber = true;

		for (const unique of numbersUnique) {
			if (num === unique) {
				uniqueNumber = false;
				break;
			}
		}

		if (uniqueNumber) {
			numbersUnique.push(num);
		}
	}

	console.log(numbersUnique);
	return numbersUnique.length;
}


console.log(uniqueCount([1,2,4,1,3,4,15]));