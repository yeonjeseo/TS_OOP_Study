{
  class NetworkClient {
    tryConnect(): void {
      throw new Error("no network!");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      // 함수 첫 호출 부분에서 예외처리를 확실하게 하지 않을 거면 상위 클래스에서 예외처리를 하는 것이 좋음
      // 위 주석과 같은 경우 상위 클래스에서 의미 있는 예외처리를 할 수 있음.
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
        console.log(error);
      }
    }
  }
  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
