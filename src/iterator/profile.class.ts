export class Profile {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getName() {
    return this.name;
  }

  public getAge() {
    return this.age;
  }

  public getFullData() {
    return `Profile Name: ${this.name} with age: ${this.age}`;
  }
}
