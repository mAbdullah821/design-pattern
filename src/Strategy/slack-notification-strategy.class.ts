import { INotificationStrategy } from './notification-strategy.interface';
import { User } from './user.class';

export class SlackNotificationStrategy implements INotificationStrategy {
  sendNotification(user: User, message: string): void {
    console.log(`Notifying the user: ${user.getName()} by Slack notification medium about: ${message}`);
  }
}
