{
  /* 
    Type Inference
    원시 타입과 같은 간단한 변수는 타입 추론 사용 OK
    참조타입, 메서드 등은 대규모 프로젝트에서는 추론이 힘든 경우가 대부분이므로 
    타입 추론 가급적 피할 것
  */
  // 선언 + 초기화 -> 알아서 타입을 추론해 줌.
  let text = "hahaha";

  function print(message = "hahah") {
    console.log(message);
  }
  // printMessage("1234");

  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 5);
}
