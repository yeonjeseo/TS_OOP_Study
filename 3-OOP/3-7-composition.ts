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

  // 싸구려 우유 거품기
  class CheapMilkSteamer {
    private steamMilk(): void {
      console.log("Steaming some milk..... 🥛");
    }
    public makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 설탕 제조기
  class AutomaticSugarMixer {
    private getSugar(): boolean {
      console.log("Get sugar from jar 🍶");
      return true;
    }

    public addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  // 내부 기능을 클래스로 구현, Machine에서는 생성자에 클래스 추가
  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      coffeeBeans: number,
      public readonly serialNumber: string,
      private milkFrother: CheapMilkSteamer
    ) {
      super(coffeeBeans);
    }

    private SteamMilk(): void {
      console.log("Steaming some milk......");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }

  // 커피컵에 설탕 추가
  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(beans: number, private sugar: AutomaticSugarMixer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMaker extends CoffeeMachine {
    constructor(
      private beans: number,
      private milk: CheapMilkSteamer,
      private sugar: AutomaticSugarMixer
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      let coffee = super.makeCoffee(shots);
      coffee = this.milk.makeMilk(coffee);
      coffee = this.sugar.addSugar(coffee);
      return coffee;
    }
  }
}
