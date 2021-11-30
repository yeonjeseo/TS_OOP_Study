{
  /* 
    Union Types : OR
  */
  type Direction = "left" | "right" | "up" | "down";
  function move(Direction: Direction) {
    console.log(Direction);
    return;
  }
  move("left");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function : login -> success , fail
  type Success = {
    status: number;
    response: {
      body: string;
    };
  };
  type Fail = {
    status: number;
    reason: string;
  };
  type LoginState = Success | Fail;
  function login1(id: string, pw: string): LoginState {
    try {
      const success: Success = { status: 200, response: { body: "success" } };
      return success;
    } catch {
      return {
        status: 404,
        reason: "Password not matches",
      };
    }
  }

  // printLoginState(state)
  // success -> body : 🎉
  // fail -> reason : 😭
  function printLoginState1(state: LoginState): void {
    if ("response" in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭${state.reason}`);
    }
  }
}
