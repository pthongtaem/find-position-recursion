const findPosition = (
  A: number,
  B: number,
  startPosition: number = 0,
): number[] => {
  const searchString = A.toString();
  const fullString = B.toString();

  if (A > Number.MAX_SAFE_INTEGER || B > Number.MAX_SAFE_INTEGER) {
    throw new RangeError();
  }

  const position = fullString.toString().indexOf(searchString, startPosition);

  if (position < 0) {
    return [];
  }

  return [position, ...findPosition(A, B, position + searchString.length)];
};

console.log(findPosition(29, 2900029));
console.log('-------------');
console.log(findPosition(29, 122934292329));
console.log('-------------');
console.log(findPosition(29, 243143243));
console.log('-------------');
console.log(findPosition(29, 1292929291));
