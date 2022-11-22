import { Id } from './Id';

export class Entity {
  id: Id;

  constructor(id?: string) {
    if (!id) {
      this.id = Id.new();
    }
  }
}
