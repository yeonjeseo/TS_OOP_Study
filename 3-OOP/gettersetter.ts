{
  class User {
    constructor(private firstName: string, private lastName: string) {}
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private _age: number = 0;
    get age(): number {
      return this._age;
    }
    set age(num: number) {
      this._age = num;
    }
  }

  const user = new User("Steve", "Jobs");
  console.log(user.age);
  user.age = 32;
  console.log(user.age);
}
