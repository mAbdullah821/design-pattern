import { INotificationStrategy } from './notification-strategy.interface';
import { User } from './user.class';

export class MessengerNotificationStrategy implements INotificationStrategy {
  sendNotification(user: User, message: string): void {
    console.log(`Notifying the user: ${user.getName()} by Messenger notification medium about: ${message}`);
  }
}
