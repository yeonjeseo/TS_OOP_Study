{
  /* 
    Type Inference
  */
  // 선언 + 초기화 -> 알아서 타입을 추론해 줌.
  let text = "hahaha";

  function print(message = "hahah") {
    console.log(message);
  }
  printMessage("1234");

  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 5);
}
