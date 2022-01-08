console.log(this);

function simpleFunction() {
  console.log(this);
}

simpleFunction();
console.clear();
class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}

const counter = new Counter();

counter.increase();

// let, const에 함수 포인터를 할당할 경우,
// this의 정보를 잃어버림
// const caller = counter.increase;
/* 정보를 잃어버리지 않기 위해서는
  bind() 키워드를 사용한다.
  또는 화살표 함수를 사용할 경우 그 당시의 문맥을 유지할 수 있다.
*/
const caller = counter.increase.bind(counter);

caller();

const func = () => {
  console.log("ddd");
  console.log(this);
};
/* 
  함수는 global 객체에 등록이 되지만,
  변수는 global 객체에 등록이 되지 않는다.
  예외 : var
*/

class Bob {}

const bob = new Bob();
bob.run = counter.increase;
bob.run();
