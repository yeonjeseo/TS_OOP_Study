{
  // Array
  const fruits: string[] = ["π", "π", "π"];
  const scores: Array<number> = [1, 2, 3, 5];
  // μΈμμ λΆλ³μ± -> readonly : μ΄ ν€μλλ type[] λ¬Έλ²μλ§ νμ©
  function printArray(fruits: readonly string[]): void {
    console.log(fruits);
    return;
  }
  printArray(fruits);

  // Tuple : μλ‘ λ€λ₯Έ νμμ λ°μ΄ν° μ μ₯ κ°λ₯
  // μΈλ±μ€ μ§μ μΌλ‘ λ°μ΄ν°λ₯Ό μ½μ΄μΌ νλλ° κ°λμ±μ΄ λ¨μ΄μ§
  // interface type alias, class λ±μΌλ‘ λμ²΄νλ κ²μ΄ μ’μ
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // number
  const [name, age] = student;
}
