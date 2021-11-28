{
  // Array
  const fruits: string[] = ["🍌", "🍅", "🍉"];
  const scores: Array<number> = [1, 2, 3, 5];
  // 인자의 불변성 -> readonly : 이 키워드는 type[] 문법에만 허용
  function printArray(fruits: readonly string[]): void {
    console.log(fruits);
    return;
  }
  printArray(fruits);

  // Tuple : 서로 다른 타입의 데이터 저장 가능
  // 인덱스 지정으로 데이터를 읽어야 하는데 가독성이 떨어짐
  // interface type alias, class 등으로 대체하는 것이 좋음
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // number
  const [name, age] = student;
}
