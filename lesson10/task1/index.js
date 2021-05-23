const getFiniteNumbers = arr => arr.filter(num => Number.isFinite(num));

const getFiniteNumbersV2 = arr => arr.filter(num => isFinite(num));

const getNaN = arr => arr.filter(num => Number.isNaN(num));

const getNaNV2 = arr => arr.filter(num => isNaN(num));

const getIntegers = arr => arr.filter(num => Number.isInteger(num));
