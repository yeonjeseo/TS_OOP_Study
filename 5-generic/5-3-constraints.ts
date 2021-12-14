interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log("Full Time!!");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log("Part Time!!!!");
  }
  workPartTime() {}
}
// 세부적인 타입을 인자로 받아서 정말 추장적인 타입으로 다시 리턴하는 함수는 💩💩💩💩💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// Employ에서 파생된 아이들만 가능해
function pay<A extends Employee>(employee: A): A {
  employee.pay();
  return employee;
}

// 제네릭은 일반적인 타입이라 코딩하는 시점에 타입에 대한 정보가 없음
// function pay<T>(employee: T): T {
//   employee.pay();
//   return employee;
// }
const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

// 여기서 pay 함수의 리턴 결과가 Employee 인터페이스를 따르기 때문에,
// 리턴 결과는 클래스 메서드를 사용하지 못하고 인터페이스에 정의된 메서드만 사용 가능하다.
// as 키워드 사용해서 클래스 캐스팅 사용하면 다시 사용 가능하다.(정말 자신있는 경우에)
const ellieAfterPayBad = payBad(ellie);
const bobAfterPayBad = payBad(bob);

const ellieAfterPay = pay(ellie);
ellieAfterPay.workFullTime();
