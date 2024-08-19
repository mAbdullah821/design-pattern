import { ISubscriber } from './subscriber.interface';

export class User implements ISubscriber {
  private readonly name;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public notify(message: string): void {
    console.log('Notifying the user: ', this.name, ' about: ', message);
  }
}
