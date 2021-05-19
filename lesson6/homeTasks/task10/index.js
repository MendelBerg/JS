/* eslint-disable no-plusplus */
const getSubArray = (arr, numberOfElements) => {
	const subArr = [];
	for (let i = 0; i < numberOfElements; i++) {
		subArr[i] = arr[i];
	}

	return subArr;
};


console.log(getSubArray([1,2,3,4], 2));