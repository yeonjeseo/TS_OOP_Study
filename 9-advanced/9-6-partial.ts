{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  /* 
    기존 타입 중 일부분만 수정할 때 사용
  */
  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: ToDo = {
    title: "learn TypeScript",
    description: "study hard",
    label: "study",
    priority: "high",
  };

  const updated = updateTodo(todo, { priority: "low" });
  console.log(updated);
}
