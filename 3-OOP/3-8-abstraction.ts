{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // 이 클래스는 interface 규격을 따른다 : implements CoffeMaker
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 7;
    private coffeeBeans: number = 0;

    // 상속 받는 자식 클래스에서는 사용 가능 : protected
    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    // 추상 클래스는 직접 인스턴스 생성 불가
    // static makeMachine(coffeeBeans: number): CoffeeMachine {
    //   return new CoffeeMachine(coffeeBeans);
    // }

    private grindBeans(shots: number) {
      console.log(`Grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT)
        throw new Error("Not enough coffee beans!");
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up.....");
    }

    // 자식마다 다르게 행동할 것이다 -> 입.출력 타입만 정의해놓고 구현은 자식이 알아서
    protected abstract extract(shots: number): CoffeeCup;

    public fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beansg should be greater than 0");
      }
      console.log("Refilling coffee beans....");
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("Cleaning the Machine!");
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // 상속하고자 하는 클래스가 정의된 후 사용
  class CaffeLatteMachine extends CoffeeMachine {
    constructor(coffeeBeans: number, public readonly serialNumber: string) {
      super(coffeeBeans);
    }

    private SteamMilk(): void {
      console.log("Steaming some milk......");
    }
    protected extract(shots: number): CoffeeCup {
      this.SteamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  // 커피컵에 설탕 추가
  class SweetCoffeeMaker extends CoffeeMachine {
    private sugar: number;
    constructor(beans: number, sugar: number) {
      super(beans);
      this.sugar = sugar;
    }
    private addSugar(): void {
      console.log("add sugar!!!!");
    }
    protected extract(shots: number): CoffeeCup {
      this.addSugar();
      return {
        shots,
        hasSugar: true,
      };
    }
  }
  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(20, "123"),
    new SweetCoffeeMaker(30, 5),
  ];
  machines.forEach((machine) => {
    console.log("-------------");
    machine.makeCoffee(2);
  });
}
