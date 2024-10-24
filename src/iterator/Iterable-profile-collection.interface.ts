import { IProfileIterator } from './profile-iterator.interface';

export interface IIterableProfileCollection {
  createFriendProfileIterator: () => IProfileIterator;
  createMutualFriendProfileIterator: () => IProfileIterator;
  createFamilyProfileIterator: () => IProfileIterator;
}
