{
  type Loading = {
    status: "loading";
  };
  type Success = {
    status: "success";
    response: { body: string };
  };
  type Failure = {
    status: "failure";
    reason: string;
  };
  type Response = Loading | Success | Failure;

  function printLoginState(state: Response): void {
    switch (state.status) {
      case "success":
        console.log(state.response.body);
        break;
      case "loading":
        console.log("👀 Loading....");
        break;
      case "failure":
        console.log(`😱  ${state.reason}`);
        break;
      default:
        throw new Error("Unknown status!");
    }
  }

  printLoginState({ status: "success", response: { body: "Loaded!" } });
  printLoginState({ status: "failure", reason: "No network" });
  printLoginState({ status: "loading" });
}
