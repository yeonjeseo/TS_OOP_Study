{
  type Mode = "up" | "down" | "left" | "right";

  let x: number = 0;
  let y: number = 0;

  function move(mode: Mode): void {
    switch (mode) {
      case "up":
        y += 1;
        break;
      case "down":
        y -= 1;
        break;
      case "left":
        x -= 1;
        break;
      case "right":
        x += 1;
        break;
      default:
        throw Error("Unknown Error");
    }
  }

  move("up");
  console.log(x, y);
  move("down");
  console.log(x, y);
  move("left");
  console.log(x, y);
  move("right");
  console.log(x, y);
}
