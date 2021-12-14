// A or B
// 인터페이스에 제네릭 적용
interface Either<L, R> {
  left: () => L;
  right: () => R;
}
// 클래스와 이 클래스가 따르는 인터페이스에도 제네릭 적용
class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }
  right(): R {
    return this.rightValue;
  }
}

const eitherNumber = new SimpleEither(4, 5);
const leftNumber = eitherNumber.left();
const rightNumber = eitherNumber.right();

const eitherString = new SimpleEither("123", "abc");
const leftString = eitherString.left();
const rightString = eitherString.right();

const best = new SimpleEither({ name: "yeonjeseo" }, "John Doe");
const bestLeft = best.left();
const bestRight = best.right();
