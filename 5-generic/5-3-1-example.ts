const obj = {
  name: "yeonje",
  age: 32,
};

const obj2 = {
  animal: "๐ผ",
};

console.log(getValue(obj, "name")); //"yeonje"
console.log(getValue(obj, "age")); //32
console.log(getValue(obj2, "animal")); //๐ผ

// ๊ฐ์ฒด T์, ๊ทธ T์์ ์๋ ํค๋ฅผ ๋์ ์ผ๋ก ํ์ ๋ณด์ฅ ๋ฐ์
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
