import { INotificationStrategy } from './notification-strategy.interface';
import { User } from './user.class';

export class EmailNotificationStrategy implements INotificationStrategy {
  sendNotification(user: User, message: string): void {
    console.log(`Notifying the user: ${user.getName()} by Email notification medium about: ${message}`);
  }
}
