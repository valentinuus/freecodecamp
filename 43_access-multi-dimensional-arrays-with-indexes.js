const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];


/*
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];
В этом примере subarrayимеет значение [[10, 11, 12], 13, 14], nestedSubarrayимеет значение [10, 11, 12]и elementимеет значение 11.

Примечание: Между именем массива и квадратными скобками не должно быть пробелов, как array [0][0]и даже это array [0] [0]не допускается. Хотя JavaScript может правильно это обработать, это может запутать других программистов, читающих ваш код. */