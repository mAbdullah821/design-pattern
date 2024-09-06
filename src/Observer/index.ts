import { BlogManagement } from './blog-management.class';
import { Blog } from './blog.class';
import { NewsLetter } from './newsletter.class';
import { ESubscriptionType } from './subscription-type.enum';
import { User } from './user.class';

export default () => {
  const blogManagement = new BlogManagement();

  const ahmed = new User('Ahmed');
  const mahmoud = new User('Mahmoud');
  const abdullah = new User('Abdullah');

  blogManagement.subscribe(ESubscriptionType.BLOG, ahmed);
  blogManagement.subscribe(ESubscriptionType.BLOG, mahmoud);
  blogManagement.subscribe(ESubscriptionType.NEWSLETTER, mahmoud);
  blogManagement.subscribe(ESubscriptionType.NEWSLETTER, abdullah);

  blogManagement.publishBlog(new Blog('Redis inside-out'));

  blogManagement.unsubscribe(ESubscriptionType.NEWSLETTER, mahmoud);

  blogManagement.publishNewsletter(new NewsLetter('SqlServer inside-out'));
};
