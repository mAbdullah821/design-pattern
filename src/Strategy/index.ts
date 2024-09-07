import { EmailNotificationStrategy } from './email-notification-strategy.class';
import { MessengerNotificationStrategy } from './messenger-notification-strategy.class';
import { NotificationService } from './notification-service';
import { SlackNotificationStrategy } from './slack-notification-strategy.class';
import { SmsNotificationStrategy } from './sms-notification-strategy.class';
import { User } from './user.class';

export default () => {
  const ahmed = new User('Ahmed');
  const mahmoud = new User('Mahmoud');
  const abdullah = new User('Abdullah');
  const ziad = new User('Ziad');

  const smsNotificationService = new NotificationService(new SmsNotificationStrategy());
  smsNotificationService.sendNotification(ahmed, 'Hey Ahmed, how are you?');

  const emailNotificationService = new NotificationService(new EmailNotificationStrategy());
  emailNotificationService.sendNotification(mahmoud, 'You should have finished the work by tomorrow');

  const messengerNotificationService = new NotificationService(new MessengerNotificationStrategy());
  messengerNotificationService.sendNotification(abdullah, 'Welcome home!');

  const slackNotificationService = new NotificationService(new SlackNotificationStrategy());
  slackNotificationService.sendNotification(ziad, 'Hello World!');
};
