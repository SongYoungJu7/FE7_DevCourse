/* 1번 문제 */
{
  const printValue = function (value: string | number) {
    console.log(value);
  };

  printValue("Hello"); // "Hello" 출력
  printValue(42); // 42 출력

  /* 2번 문제 */
  const doubleOrLength = (value: string | number): string | number => {
    if (typeof value === "string") return value.length;
    else return value * 2;
  };

  console.log(doubleOrLength("hello"));
  console.log(doubleOrLength(10));
}

/* 3번 문제 */
{
  const mergeObjects = function (
    obj1: { name: string; age: number },
    obj2: { jobTitle: string; salary: number }
  ): { name: string; age: number } & { jobTitle: string; salary: number } {
    const result = Object.assign(obj1, obj2);

    return result;
  };

  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };

  const mergedObject = mergeObjects(person, employee);
  console.log(mergedObject);
}
// 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }

/* 4번 문제 */
{
  const getFirstElement = function (arr: number[] | string[]): number | string {
    return arr[0]!;
  };

  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"
  console.log(getFirstElement([])); // undefined

  /* 5번 문제  */
  const isEqual = function (x: string | number, y: string | number): boolean {
    return x === y;
  };

  console.log(isEqual(10, 10)); // true
  console.log(isEqual("hello", "world")); // false
  console.log(isEqual(5, "5"));
} // false

/* 6번 문제 */
{
  const updateAddress = function (
    person: { name: string; age: number },
    address?: string
  ) {
    if (address) return { ...person, address };
    else person;
  };

  const updatedPerson = updateAddress(
    { name: "Jane", age: 28 },
    "123 Maple St"
  );
  console.log(updatedPerson);
  // 예상 출력: { name: "Jane", age: 28, address: "123 Maple St" }

  const updatedPersonWithoutAddress = updateAddress({ name: "John", age: 22 });
  console.log(updatedPersonWithoutAddress);
  // 예상 출력: { name: "John", age: 22 }
}

/* 7번 문제 */
{
  const maxValue = function (x: number | string, y: number | string) {
    if (typeof x === "number" && typeof y === "number") {
      return x >= y ? x : y;
    } else if (typeof x === "string" && typeof y === "string") {
      if (x.length === y.length) return y;
      else return x.length > y.length ? x : y;
    }
  };

  console.log(maxValue(10, 20)); // 20
  console.log(maxValue("apple", "banana")); // "banana"
  console.log(maxValue(30, 30)); // 30
  console.log(maxValue("cat", "dog"));
} // "dog"

/* 8번 문제 */
// 함수 선언문으로 풀어주세요 (함수 오버로딩은 함수 선언문만 가능)
{
  function getValue(value: number): string;
  function getValue(value: string): string;
  function getValue(value: string | number): string {
    if (typeof value === "string") return value;
    else return String(value);
  }

  console.log(getValue(123)); // "123"
  console.log(getValue("abc"));
} // "abc"

/* 9번 문제 */
{
  const createContact = function (
    obj1: { name: string; age: number },
    obj2: { email: string }
  ): { name: string; age: number } & { email: string } {
    const result = Object.assign(obj1, obj2);

    return result;
  };

  const person = { name: "Alice", age: 28 };
  const contact = { email: "alice@example.com" };

  const personWithContact = createContact(person, contact);
  console.log(personWithContact);
}
// 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }

/* 10번 문제 */
{
  const getAge = function (age: string | number) {
    if (typeof age === "string") return Number(age);
    else return age;
  };

  console.log(getAge("25")); // 25
  console.log(getAge(30)); // 30
  console.log(getAge("abc"));
} // NaN
