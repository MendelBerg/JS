/* eslint-disable no-else-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */

function removeByIndex(arr, index) {
	const newArr = [];
	for (let i = 0; i < index; i++) {
		newArr.push(arr[i]);
	}
	for (let i = index+1; i < arr.length; i++) {
		newArr.push(arr[i]);
	}

	return newArr;
}

function removeDuplicates(array) {
	if (!Array.isArray(array)) {
		return null;
	}else if (array.length === 0) {
		return array;
	}
	for (let i = 0; i < array.length-1; i++) {
		for (let j = i+1; j < array.length; j++) {
			if (array[i] === array[j]) {
				array = removeByIndex(array, j);
				j--;
			}
		}
	}

	return array;

}





console.log(removeDuplicates([1,2,3,22,22,7]));
