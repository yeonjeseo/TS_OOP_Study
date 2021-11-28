{
  /*
    Primitive : number, string, boolean, bigint , symbol, null, undefined
    Object : function, array ......
   */

  // number
  const num: number = 5;
  // string
  const str: string = "String";
  // boolean
  const boal: boolean = true;
  // undefined : 값이 있는지 없는지 결정되지 않은 상태
  let name: undefined; // 💩💩💩💩
  let age: number | undefined;
  age = undefined;
  age = 10;
  function find(): number | undefined {
    let isExist: boolean = true;
    return isExist ? 5 : undefined;
  }
  // null : 결정되어있지만, 텅텅 비어져있음.
  let person: null; // 💩💩💩💩
  let person2: string | null;

  // unknown : 무슨 타입인지 모르는 상태 💩💩💩💩
  let notSure: unknown = 0;
  notSure = "string";

  // any 💩💩💩💩
  let anything: any = 0;
  anything = "123";

  // void :
  function print(): void {
    console.log("123");
    return;
  }
  let unsuable: void = undefined; // 💩💩💩💩

  // never : 함수에서 절대 리턴되지 않는 경우
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩💩💩💩

  //object
  let Object: object; // 💩💩💩💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "yeonje" });
  acceptSomeObject({ age: 5 });
}
