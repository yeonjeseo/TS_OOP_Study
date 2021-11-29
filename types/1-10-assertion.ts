{
  /* 
    Type Assertion 💩
    타입에 대한 확신이 200% 일 때에만 사용할 것
  */
  function jsStrFunc(): any {
    return 5;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(5)); // 💩💩💩💩

  function findNumber(): number[] | undefined {
    return undefined;
  }
  const number = findNumber();
  number!.push(5); // 배열이라고 절대적으로 확신할 때 !
  const number2 = findNumber()!; // 혹은 이렇게 사용 falsy vaule 가 아니라고 장담

  // DOM Example
  const button = document.querySelector("class");
  console.log(button.nodeValue);
}
