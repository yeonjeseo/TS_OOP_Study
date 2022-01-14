export function makePerson(name: string, age: number) {
  return { name, age };
}
export function testMakePerson() {
  console.log(makePerson("John", 23), makePerson("Doe", 33));
}
