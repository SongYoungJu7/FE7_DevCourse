/* 1번 문제 */
// 함수 정의
const sumAllNumbers = function (...[...nums]: number[][]): number[] {
  let result: number[] = [];
  for (const n of nums) {
    let sum = 0;
    for (const nn of n) {
      sum += nn;
    }
    result.push(sum);
  }
  return result;
};

// 함수 호출
const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
console.log(result); // [3, 12, 13]

/* 2번 문제 */
// 함수 정의
const doubleValue = function (data: number | string): number {
  if (typeof data === "number") return data * 2;
  else return data.length * 2;
};

// 함수 호출
const result1 = doubleValue(5);
const result2 = doubleValue("hello");
console.log(result1); // 10
console.log(result2); // 10

/* 3번 문제 */
// 함수 정의
const multiplyArrays = function (arr1: number[], arr2: number[]): number[] {
  const len = arr1.length <= arr2.length ? arr1.length : arr2.length;
  let result = [];

  for (let i = 0; i < len; i++) {
    let sum = 0;
    sum = arr1[i]! * arr2[i]!;
    result.push(sum);
  }

  return result;
};

// 함수 호출
const result3 = multiplyArrays([1, 2, 3], [4, 5, 6]);
console.log(result3); // [4, 10, 18]

const result4 = multiplyArrays([1, 2], [4, 5, 6]);
console.log(result4); // [4, 10]

/* 4번 문제 */
// 함수 정의
const intersection = function (arr1: number[], arr2: number[]): number[] {
  let result: number[] = [];

  for (const index1 in arr1) {
    for (const index2 in arr2) {
      if (arr1[index1] === arr2[index2]) result.push(arr2[index2]!);
    }
  }

  return result;
};

// 함수 호출
const result5 = intersection([1, 2, 3], [2, 3, 4]);
console.log(result5); // [2, 3]

/* 5번 문제 */
/* 6번 문제 */
/* 7번 문제 */
/* 8번 문제 */
/* 9번 문제 */
/* 10번 문제 */
