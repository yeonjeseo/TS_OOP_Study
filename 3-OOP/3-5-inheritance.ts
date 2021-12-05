{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
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
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, "12jdfof8j");
  const coffee = latteMachine.makeCoffee(1);

  console.log(coffee);
  console.log(latteMachine.serialNumber);
}
