{
  // 1
  type Person = {
    name: string;
    age: number;
  };

  const getPersonInfo = (info: Person): void => {
    console.log(info);
  };

  getPersonInfo({ name: "Song YoungJu", age: 27 });
}

{
  // 2
  type Config = {
    host: string;
    port: number;
    ssl: boolean;
  };

  const createConfig = (host: string, port: number, ssl: boolean): Config => {
    return {
      host: host,
      port: port,
      ssl: ssl,
    };
  };

  const config = createConfig("localhost", 8080, true);
  console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

{
  // 3
  type Rectangle = {
    width: number;
    height: number;
  };

  const calculateArea = (rect: Rectangle): number => {
    return rect.width * rect.height;
  };
}

{
  // 4
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };

  const calculateAverageGrade = (student: Student): number => {
    return (
      student.grades.reduce((acc, curr) => acc + curr, 0) /
      student.grades.length
    );
  };
}

{
  // 5
  type Response = {
    status: string;
    data: string;
    message: string;
  };

  const createResponse = (
    status: string,
    data: string,
    message: string
  ): Response => {
    return {
      status: status,
      data: data,
      message: message,
    };
  };

  console.log(createResponse("success", "John", "fetch success")); // { status: 'success', data: 'John', message: 'fetch success'
}

{
  // 6
  type Employee = {
    id: string;
    name: string;
    position: string;
  };

  const getEmployeeInfo = (info: Employee): string => {
    return `${info.name} works as a ${info.position} with ID: ${info.id}.`;
  };

  console.log(
    getEmployeeInfo({ id: "1", name: "james", position: "developer" })
  ); // "james works as a developer with ID: 1."
}

{
  // 7
  type Circle = {
    radius: number;
  };

  const calculateCircumference = (circle: Circle): number => {
    return circle.radius * 2 * Math.PI;
  };

  console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876
}

{
  // 8
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };

  const getDiscountedPrice = (product: Product, discount: number): number => {
    return (product.price -= product.price / 10);
  };

  console.log(
    getDiscountedPrice({ name: "bag", price: 1000, inStock: true }, 10)
  ); // 900
}

{
  // 9
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  const getBookSummary = (book: Book): string => {
    return `${book.title} by ${book.author}, published in ${book.publishedYear}.`;
  };

  console.log(
    getBookSummary({ title: "river", author: "james", publishedYear: 2020 })
  ); // "river by james, published in 2020."
}

{
  // 10
  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };

  const isValidTransaction = (transaction: Transaction): boolean => {
    return transaction.amount > 0 ? true : false;
  };
}
