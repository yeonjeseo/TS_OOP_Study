{
  // function : login -> success , fail
  type Success = {
    result: "success";
    status: number;
    response: {
      body: string;
    };
  };
  type Fail = {
    result: "fail";
    status: number;
    reason: string;
  };
  type LoginState = Success | Fail;
  function login(id: string, pw: string): LoginState {
    try {
      const success: Success = {
        result: "success",
        status: 200,
        response: { body: "success!!!!" },
      };
      return success;
    } catch {
      return {
        result: "fail",
        status: 404,
        reason: "Password not matches",
      };
    }
  }

  // printLoginState(state)
  // success -> body : 🎉
  // fail -> reason : 😭
  function printLoginState1(state: LoginState): void {
    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭${state.reason}`);
    }
  }
}
