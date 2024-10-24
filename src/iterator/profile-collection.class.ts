import { FamilyProfileIterator } from './family-profile-iterator.class';
import { FriendProfileIterator } from './friend-profile-iterator.class';
import { IIterableProfileCollection } from './Iterable-profile-collection.interface';
import { MutualProfileIterator } from './mutual-profile-iterator.class';
import { IProfileIterator } from './profile-iterator.interface';
import { Profile } from './profile.class';

export class ProfileCollection implements IIterableProfileCollection {
  private readonly profiles: Profile[];

  constructor() {
    this.profiles = [];
  }

  public add(profile: Profile): void {
    this.profiles.push(profile);
  }

  public getProfiles(): Profile[] {
    return this.profiles;
  }

  public createFriendProfileIterator(): IProfileIterator {
    return new FriendProfileIterator(this);
  }

  public createMutualFriendProfileIterator(): IProfileIterator {
    return new MutualProfileIterator(this);
  }

  public createFamilyProfileIterator(): IProfileIterator {
    return new FamilyProfileIterator(this);
  }
}
