/* 1번 문제 */
// 함수 정의
const add = function (a: number, b: number): number {
  return a + b;
};

// 함수 호출
const result1 = add(10, 5);
console.log(result1); // 15

/* 2번 문제 */
// 함수 정의
const greet = function (name: string): string {
  return `Hello, ${name}!`;
};

// 함수 호출
const greeting = greet("Alice");
console.log(greeting); // "Hello, Alice!"

/* 3번 문제 */
// 함수 정의
const sumAll = function (...nums: number[]): number {
  let sum = 0;

  for (const n of nums) {
    sum += n;
  }

  return sum;
};

// 함수 호출
const total = sumAll(1, 2, 3, 4);
console.log(total); // 10

/* 4번 문제 */
// 함수 정의
const sum = function (a: number, b: number = 0): number {
  return a + b;
};

// 함수 호출
const result2 = sum(5);
console.log(result2); // 5

/* 5번 문제 */
// 함수 정의
const multiply = function (a: number, b: number) {
  return a * b;
};

// 함수 호출
const product = multiply(4, 5);
console.log(product); // 20

/* 6번 문제 */
// 함수 정의
const concatStringAndNumber = function (a: string, b: number): string {
  return `${a}${b}`;
};

// 함수 호출
const result3 = concatStringAndNumber("Hello", 10);
console.log(result3); // "Hello10"

/* 7번 문제 */
// 함수 정의
const greet2 = function (name: string, message?: string): string {
  return message !== undefined ? `${message}, ${name}!` : `Welcome, ${name}!`;
};

// 함수 호출
const greeting1 = greet2("Alice", "Hello");
const greeting2 = greet2("Bob");
console.log(greeting1); // "Hello, Alice!"
console.log(greeting2); // "Welcome, Bob!"

/* 8번 문제 */
// 함수 정의
const findMax = function (nums: number[]): number {
  return Math.max(...nums);
};

// 함수 호출
const max = findMax([10, 20, 30, 40]);
console.log(max); // 40

/* 9번 문제 */
// 함수 정의
const double = function (num: number): number {
  return num * 2;
};

// 함수 호출
const doubled = double(10);
console.log(doubled); // 20
