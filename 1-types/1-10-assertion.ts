{
  /* 
    Type Assertion π©
    νμμ λν νμ μ΄ 200% μΌ λμλ§ μ¬μ©ν  κ²
  */
  function jsStrFunc(): any {
    return 5;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(5)); // π©π©π©π©

  function findNumber(): number[] | undefined {
    return undefined;
  }
  const number = findNumber();
  number!.push(5); // λ°°μ΄μ΄λΌκ³  μ λμ μΌλ‘ νμ ν  λ !
  const number2 = findNumber()!; // νΉμ μ΄λ κ² μ¬μ© falsy vaule κ° μλλΌκ³  μ₯λ΄

  // DOM Example
  const button = document.querySelector("class");
  console.log(button.nodeValue);
}
