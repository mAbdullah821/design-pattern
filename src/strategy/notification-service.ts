import { INotificationStrategy } from './notification-strategy.interface';
import { User } from './user.class';

export class NotificationService {
  private readonly notificationStrategy: INotificationStrategy;

  constructor(notificationStrategy: INotificationStrategy) {
    this.notificationStrategy = notificationStrategy;
  }

  public sendNotification(user: User, message: string): void {
    this.notificationStrategy.sendNotification(user, message);
  }
}
