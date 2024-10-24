import { IProfileIterator } from './profile-iterator.interface';
import { ProfileCollection } from './profile-collection.class';

export class FriendProfileIterator implements IProfileIterator {
  private readonly profileCollection: ProfileCollection;
  private index: number;

  constructor(profileCollection: ProfileCollection) {
    this.profileCollection = profileCollection;
    this.index = 0;
  }

  public hasNext() {
    return this.index < this.profileCollection.getProfiles().length;
  }

  public getNext() {
    return this.profileCollection.getProfiles()[this.index++];
  }

  public reset() {
    this.index = 0;
  }
}
