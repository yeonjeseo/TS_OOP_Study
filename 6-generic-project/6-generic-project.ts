/* 
  스택을 배열 없이 구현
  LIFO
  PUSH
  POP
  TOP POINTER
  문자열 저장
*/

// 규격 정의

{
  interface Stack<T> {
    // 사이즈는 내부적으로만 결정됨 : readonly
    readonly size: number;
    push(data: T): void;
    pop(): T;
  }

  // 단일 연결 리스트
  // ? : opional
  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    // 외부에서 사이즈를 변경 할 수 없어야 함 : readonly
    // readonly 그냥 붙이면 내부에서도 수정 불가
    // 동일한 이름의 내부 변수는 보통 _(underscore)를 붙여서 작명
    private _size: number = 0;
    private head?: StackNode<T>;
    get size() {
      return this._size;
    }
    push(value: T): void {
      const node: StackNode<T> = {
        value,
        next: this.head,
      };
      this.head = node;
      this._size++;
    }

    pop(): T {
      // null == undefined, null !== undefined
      if (this.head == null) {
        throw new Error("Stack is empty!");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl();

  stack.push("Ellie 1");
  stack.push("Bob 2");
  stack.push("Steve 3");
  stack.push("Steve 3");
  stack.push("Steve 3");
  stack.push(123);
  stack.push(true);
  stack.push(null);

  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  stack.pop();
}
