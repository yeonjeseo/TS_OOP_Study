{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  // interface : 명세
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  // interface : 명세
  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // 이 클래스는 interface 규격을 따른다 : implements CoffeMaker
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
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
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }
  }

  class AmateurUer {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUer(maker);
  const pro = new ProBarista(maker);
  amateur.makeCoffee();
  pro.makeCoffee();
}
