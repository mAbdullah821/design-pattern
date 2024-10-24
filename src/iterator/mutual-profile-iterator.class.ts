import { IProfileIterator } from './profile-iterator.interface';
import { ProfileCollection } from './profile-collection.class';

export class MutualProfileIterator implements IProfileIterator {
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
    const profile = this.profileCollection.getProfiles()[this.index];
    this.index += 2;

    return profile;
  }

  public reset() {
    this.index = 0;
  }
}
