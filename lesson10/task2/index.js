/* eslint-disable radix */
const getParsedIntegers = arr => arr.map(num => Number.parseInt(num));

const getParsedIntegersV2 = arr => arr.map(num => parseInt(num));

const getParsedFloats = arr => arr.map(num => Number.parseFloat(num));

const getParsedFloatsV2 = arr => arr.map(num => parseFloat(num));
