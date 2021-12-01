{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // 클래스 내 멤버 변수 선언 -> const, let 사용 안 함!
    // static -> class level : 클래스와 연결이 되어 있어서 인스턴스마다 생성되지 않음, 메모리 절약
    static BEANS_GRAM_PER_SHOT = 7;
    // instance(object) level
    private coffeeBeans: number = 0;

    public makeCofffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT)
        throw new Error("Not enough coffee beans!");

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
    // 클래스에서 인스턴스를 만들 때 가장 먼저 호출
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 메서드에 static 적용
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
  }
  // 클래스의 인스턴스 만들기, () 생성자 호출
  const machine = new CoffeeMaker(50);
  console.log(machine);

  const coffee = machine.makeCofffee(1);
  console.log(coffee);

  const machine2 = CoffeeMaker.makeMachine(3);
}
