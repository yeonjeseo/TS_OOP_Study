{
  type calcMode = "add" | "substract" | "multiply" | "divide" | "remainder";
  function calculate(mode: calcMode, num1: number, num2: number): number {
    let result: number;
    switch (mode) {
      case "add": {
        result = num1 + num2;
        break;
      }
      case "substract": {
        result = num1 - num2;
        break;
      }
      case "multiply": {
        result = num1 * num2;
        break;
      }
      case "remainder": {
        result = num1 % num2;
        break;
      }
      case "divide": {
        result = num1 / num2;
        break;
      }
    }
    return result;
  }

  function calculate2(command: calcMode, num1: number, num2: number): number {
    switch (command) {
      case "add":
        return num1 + num2;
      case "divide":
        return num1 / num2;
      case "multiply":
        return num1 * num2;
      case "remainder":
        return num1 % num2;
      case "substract":
        return num1 - num2;
      default:
        throw Error("Unknown Command!");
    }
  }
  console.log(calculate("add", 1, 5));
  console.log(calculate("divide", 10, 3));
  console.log(calculate("substract", 4, 1));
  console.log(calculate("remainder", 12, 5));
  console.log(calculate("multiply", 12, 5));
}
