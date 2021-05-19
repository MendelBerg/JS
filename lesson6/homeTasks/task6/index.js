/* eslint-disable no-plusplus */
function cloneArr(arr) {
	if (!Array.isArray(arr)) {
		return null;
	}

	return [...arr];
}


console.log(cloneArr([22,33,44]));