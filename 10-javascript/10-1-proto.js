const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array.__proto__);
// array -> Array -> Object
console.log(array);

console.clear();
function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level
  // this.makeCoffee = (shots) => {
  //   console.log("making coffee.....");
  // };
}

// Prototype member level
// 메모리 낭비를 아낄 수 있다는 장점이 있었던거 같은데?!
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("Making coffee......!");
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

console.log(machine1);
console.log(machine2);
machine1.makeCoffee(10);

function LatteMachine(milk) {
  this.milk = milk;
}
// 프로토타입의 연결
// 이렇게 해서 LatteMachine도 makeCoffee 메서드 사용 가능하다.
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(124);
console.log(latteMachine);
