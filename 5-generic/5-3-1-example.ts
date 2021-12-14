const obj = {
  name: "yeonje",
  age: 32,
};

const obj2 = {
  animal: "🐼",
};

console.log(getValue(obj, "name")); //"yeonje"
console.log(getValue(obj, "age")); //32
console.log(getValue(obj2, "animal")); //🐼

// 객체 T와, 그 T안에 있는 키를 동적으로 타입 보장 받음
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
