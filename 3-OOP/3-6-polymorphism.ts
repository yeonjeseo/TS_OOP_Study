{
  type CoffeeCup = {
    shots: number;
    // optional
    hasMilk?: boolean;
    hasSugar?: boolean;
  };
  // interface : 명세
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // 이 클래스는 interface 규격을 따른다 : implements CoffeMaker
  class CoffeeMachine implements CoffeeMaker {
    static BEANS_GRAM_PER_SHOT = 7;
    private coffeeBeans: number = 0;

    private grindBeans(shots: number) {
      console.log(`Grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT)
        throw new Error("Not enough coffee beans!");
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up.....");
    }
    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots}`);
      return {
        shots,
        hasMilk: false,
        hasSugar: false,
      };
    }
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
    // 상속 받는 자식 클래스에서는 사용 가능 : protected
    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
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
    makeCoffee(shots: number): CoffeeCup {
      // spuer : 상속한 부모의 메서드 사용 가능
      const coffee = super.makeCoffee(shots);
      this.SteamMilk();
      return {
        ...coffee,
        hasMilk: true,
        hasSugar: false,
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
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);

      this.addSugar();
      return { ...coffee, hasMilk: false, hasSugar: true };
    }
  }
  // 다형성의 최고 장점 :
  // 내부적으로 구현된 다양한 클래스들이 한가지의 인터페이스를 구현하거나 동일한 부모를 상속했을때, 동일한 함수를 어떤 클래스인지 구분하지 않고 공통된 API 호출 가능
  // machines 배열
  // 데이터 타입을 부모클래스의 인터페이스로 정의 가능
  // 인터페이스를 사용해서 어떤 메서드를 공개할지 통제도 가능하겠네?
  const machines: CoffeeMaker[] = [
    new CoffeeMachine(30),
    new CaffeLatteMachine(20, "123"),
    new SweetCoffeeMaker(30, 5),
  ];
  machines.forEach((machine) => {
    console.log("-------------");
    machine.makeCoffee(2);
  });
}
