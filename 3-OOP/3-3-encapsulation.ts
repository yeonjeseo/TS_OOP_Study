{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public : default
  // private
  // protected : 상속 시 외부에서는 접근할 수는 없지만 자식 클래스에서 접근 가능
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 7;
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

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beansg should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    // static 으로 인스턴스 생성시 -> 생성자로 인스턴스 생성 금지
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
  }
  // 생성자도 감춤으로서, 생성 매서드 사용 유도
  // const machine = new CoffeeMaker(50);
  const machine = CoffeeMaker.makeMachine(5);
}
