const superRound = (floatNum, precision) => [
  Math.floor(floatNum * 10 ** precision) / 10 ** precision,
  Math.round(floatNum * 10 ** precision) / 10 ** precision,
  Math.ceil(floatNum * 10 ** precision) / 10 ** precision,
  Math.trunc(floatNum * 10 ** precision) / 10 ** precision,
  +floatNum.toFixed(precision),
];
