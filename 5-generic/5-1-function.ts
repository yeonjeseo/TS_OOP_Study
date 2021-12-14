{
  // 현재는 숫자만 받을 수  있음
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not a valid number!");
    }
    return arg;
  }
  /* 
    위의 함수는 숫자에 대해서만 유효성 검사가 가능하다. 
    그렇다면 문자열 타입, 숫자 타입 등 모든 경우에 대해서 함수를 만드는 건 미친 짓!
    그렇다면 입 출력 타입을 any로 두면? -> 타입 보장이 안됨!
  */
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not a valid number!");
    }
    return arg;
  }

  /* 
    제네릭은 함수 호출할 때 타입 결정
    제네릭 : 포괄하는, 통상적인, 일반적인
    유연하면서 타입을 보장 받을 수 있음.
  */

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not a valid number!");
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
