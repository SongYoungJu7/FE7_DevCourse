{
  // 1
  type Action = {
    type: string;
    payload: string | number | object;
  };

  // code
  function createAction(
    type: Action["type"],
    payload: Action["payload"]
  ): Action {
    return {
      type: type,
      payload: payload,
    };
  }

  // 함수 호출 예시
  const action1 = createAction("ADD_ITEM", { id: 1, name: "item" });
  const action2 = createAction("UPDATE_ITEM", 42);
  const action3 = createAction("SET_STATUS", "success");

  console.log(action1); // { type: 'ADD_ITEM', payload: { id: 1, name: 'item' } }
  console.log(action2); // { type: 'UPDATE_ITEM', payload: 42 }
  console.log(action3); // { type: 'SET_STATUS', payload: 'success' }
}

{
  // 2
  type NumberOrString = number | string;
  type NumberOrStringObj = {
    id: NumberOrString;
    name: NumberOrString;
  };

  function createObject(
    id: NumberOrString,
    name: NumberOrString
  ): NumberOrStringObj {
    return {
      id: id,
      name: name,
    };
  }

  const object1 = createObject(1, "Alice");
  const object2 = createObject("123", "Bob");

  console.log(object1); // { id: 1, name: 'Alice' }
  console.log(object2); // { id: '123', name: 'Bob' }
}

{
  // 3
  type Point = {
    x: number;
    y: number;
  };

  function calculateDistance(pos1: Point, pos2: Point): number {
    return Math.sqrt(
      Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2)
    );
  }
}

{
  // 4
  type FetchResult =
    | { status: "Loading" }
    | { status: "success"; data: "Data loaded successfully!" }
    | { status: "error"; message: "Failed to load data." };

  function fetchData(): FetchResult {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return { status: "Loading" };
    } else if (random === 1) {
      return { status: "success", data: "Data loaded successfully!" };
    } else {
      return { status: "error", message: "Failed to load data." };
    }
  }

  const result1 = fetchData();
  const result2 = fetchData();
  const result3 = fetchData();

  console.log(result1); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
  console.log(result2); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
  console.log(result3); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
}

{
  // 5
  type NullOrUndefined = null | undefined;

  function getValue(value: any): boolean {
    const typeNull: NullOrUndefined = null;
    const typeUndefined: NullOrUndefined = undefined;
    return value === typeNull || value === typeUndefined ? true : false;
  }

  const check1 = getValue(null);
  const check2 = getValue(undefined);
  const check3 = getValue("Hello");

  console.log(check1); // true
  console.log(check2); // true
  console.log(check3); // false
}

{
  // 6
  type Coordinate = [number, number];

  function setCoordinates(...nums: Coordinate): Coordinate {
    return nums;
  }

  const coordinates = setCoordinates(10, 20);
  console.log(coordinates); // [10, 20]
}

{
  // 7
  type Person = {
    readonly name: string;
    readonly age: number;
  };

  function createPerson(name: string, age: number): Person {
    return {
      name: name,
      age: age,
    };
  }
  const person = createPerson("John", 30);

  // person 객체의 속성은 변경할 수 없도록 해야 합니다.
  // person.name = "Jane"; // 오류 발생: 읽기 전용 속성이므로 수정할 수 없음
  console.log(person); // { name: 'John', age: 30 }
}

{
  // 8

  type User = {
    id: string;
    name: string;
    email: string;
  };

  function updateUser(
    obj: User,
    updateProperty:
      | {
          id: string;
        }
      | { name: string }
      | { eamil: string }
  ) {
    let result = {};
    const [pdateKey, updateValue] = Object.entries(updateProperty);
    for (const key in obj) {
      console.log(key);
    }
  }

  const user1 = { id: "1", name: "Alice", email: "alice@example.com" };
  const updatedUser1 = updateUser(user1, { name: "Alicia" });

  console.log(updatedUser1); // { id: '1', name: 'Alicia', email: 'alice@example.com' }
}

{
}

{
}

{
}
