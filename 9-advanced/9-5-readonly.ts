{
  type ToDo = {
    title: string;
    description: string;
  };

  // 데이터 불변성 보장을 위해 Readonly 사용 - 함수 내에서 변수 재할당 불가능해짐
  // Readonly cmd + 클릭해서 들어가면 더 많은 것들 볼 수 있음, Required 등....
  function display(todo: Readonly<ToDo>) {
    // todo.title = "lalala";
  }
}
