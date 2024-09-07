import { User } from './user.class';

export interface INotificationStrategy {
  sendNotification(user: User, message: string): void;
}
