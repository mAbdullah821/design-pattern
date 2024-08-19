import { Blog } from './blog.class';
import { NewsLetter } from './newsletter.class';
import { ESubscriptionType } from './subscription-type.enum';
import { ISubscriber } from './subscriber.interface';

export class BlogManagement {
  private readonly subscribers: Map<ESubscriptionType, ISubscriber[]>;
  private readonly blogs: Blog[];
  private readonly newsletters: NewsLetter[];

  constructor() {
    this.subscribers = new Map();
    this.initSubscriberEvents();

    this.blogs = [];
    this.newsletters = [];
  }

  public subscribe(subscriptionType: ESubscriptionType, subscriber: ISubscriber): void {
    this.subscribers.get(subscriptionType)?.push(subscriber);
  }

  public unsubscribe(subscriptionType: ESubscriptionType, subscriber: ISubscriber): void {
    const subscribers = this.subscribers.get(subscriptionType)?.filter((sub) => sub !== subscriber);

    if (subscribers) this.subscribers.set(subscriptionType, subscribers);
  }

  public publishBlog(blog: Blog) {
    this.blogs.push(blog);

    const message = 'Publishing a new blog with title: ' + blog.getTitle();
    this.subscribers.get(ESubscriptionType.BLOG)?.forEach((subscriber) => subscriber.notify(message));
  }

  public publishNewsletter(newsletter: NewsLetter) {
    this.newsletters.push(newsletter);

    const message = 'Publishing a new newsletter with title: ' + newsletter.getTitle();
    this.subscribers.get(ESubscriptionType.NEWSLETTER)?.forEach((subscriber) => subscriber.notify(message));
  }

  // --------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------
  private initSubscriberEvents(): void {
    Object.values(ESubscriptionType).forEach((type) => this.subscribers.set(type, []));
  }
}
