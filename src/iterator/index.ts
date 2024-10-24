import { ProfileCollection } from './profile-collection.class';
import { IProfileIterator } from './profile-iterator.interface';
import { Profile } from './profile.class';

export default () => {
  const profileCollection = new ProfileCollection();

  profileCollection.add(new Profile('Mahmoud', 24));
  profileCollection.add(new Profile('Ahmed', 30));
  profileCollection.add(new Profile('Muhammed', 25));
  profileCollection.add(new Profile('Abdullah', 18));
  profileCollection.add(new Profile('Ali', 12));
  profileCollection.add(new Profile('Motaz', 36));

  function loopThroughProfileIterator(iterator: IProfileIterator, callBack: (profile: Profile) => void) {
    while (iterator.hasNext()) {
      callBack(iterator.getNext());
    }
  }

  console.log('------ Friends Profiles: ');

  loopThroughProfileIterator(profileCollection.createFriendProfileIterator(), (profile) => {
    console.log(profile.getFullData());
  });

  console.log('=========================================================================');
  console.log('------ Mutual Friends Profiles: ');

  loopThroughProfileIterator(profileCollection.createMutualFriendProfileIterator(), (profile) => {
    console.log(profile.getFullData());
  });

  console.log('=========================================================================');
  console.log('------ Family Profiles: ');

  loopThroughProfileIterator(profileCollection.createFamilyProfileIterator(), (profile) => {
    console.log(profile.getFullData());
  });
};
