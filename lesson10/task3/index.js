const multiRound = numFloat => [
  Math.floor(numFloat * 100) / 100,
  Math.round(numFloat * 100) / 100,
  Math.ceil(numFloat * 100) / 100,
  Math.trunc(numFloat * 100) / 100,
  +numFloat.toFixed(2),
];
