import { INotificationStrategy } from './notification-strategy.interface';
import { User } from './user.class';

export class SmsNotificationStrategy implements INotificationStrategy {
  sendNotification(user: User, message: string): void {
    console.log(`Notifying the user: ${user.getName()} by SMS notification medium about: ${message}`);
  }
}
