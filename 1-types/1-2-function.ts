{
  // // JavaScript 💩
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }
  // //TypeScript 👍
  // function tsAdd(num1: number, num2: number): number {
  //   return num1 + num2;
  // }
  // // JavaScript 💩
  // function jsFetchNum(id) {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // //TypeScript 👍
  // function tsFetchNum(id: string): Promise<number> {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // JavaSript => TypeScript
  // Optional Parameter
  function printName(firstName: string, lastName?: string): void {
    console.log(`Hello ${firstName} ${lastName}!`);
  }
  printName("Yeonje", "Seo");
  printName("Yeonje");
  printName("Yeonje", undefined);

  // Default Parameter
  function printMessage(message: string = "Default message!"): void {
    console.log(message);
  }
  printMessage();

  // Rest Parameter (Spread Operator, 전개 연산자)
  function printSum(...args: number[]): number {
    console.log(args);
    return args.reduce((prev, curr) => prev + curr, 0);
  }
  console.log(printSum(1, 2, 3, 4));
}
