import { IProfileIterator } from './profile-iterator.interface';
import { ProfileCollection } from './profile-collection.class';

export class FamilyProfileIterator implements IProfileIterator {
  private readonly profileCollection: ProfileCollection;
  private index: number;

  constructor(profileCollection: ProfileCollection) {
    this.profileCollection = profileCollection;
    this.index = profileCollection.getProfiles().length - 1;
  }

  public hasNext() {
    return this.index >= 0;
  }

  public getNext() {
    return this.profileCollection.getProfiles()[this.index--];
  }

  public reset() {
    this.index = this.profileCollection.getProfiles().length - 1;
  }
}
