import { Profile } from './profile.class';

export interface IProfileIterator {
  hasNext: () => boolean;
  getNext: () => Profile;
  reset: () => void;
}
