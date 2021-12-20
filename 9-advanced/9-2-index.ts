{
  const obj = {
    name: "ellie",
  };
  obj.name;
  obj["name"];

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"];
  const text: Name = "Hello";

  type Gender = Animal["gender"]; // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };

  const person: Person = {
    name: "yeonje",
    gender: "female",
  };
  /* 
    다른 타입 객체의 키에 접근해서 그 키의 타입을 사용할 수 있음
  */
}
