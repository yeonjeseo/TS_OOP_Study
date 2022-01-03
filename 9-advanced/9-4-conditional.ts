// 기존 T 타입이 string 타입을 상속하면 boolean, 아니면 number
type Check<T> = T extends string ? boolean : number;
type Type = Check<string>; //boolean

// 삼항연산자도 체이닝해서 쓸 수 있구나
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";

type T0 = TypeName<string>; // 문자열 'string' 타입
type T1 = TypeName<"a">; // 문자열 'string' 타입
type T2 = TypeName<() => void>; // function 타입

/* 타입에 따라 분기 처리를 해서 다시 타입을 지정할 수 있음.  */
