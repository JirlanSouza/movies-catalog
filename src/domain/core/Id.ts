import { v4 as uuid, validate } from 'uuid';

export class Id {
  private constructor(readonly value: string) {}

  static new() {
    return new Id(uuid());
  }

  static from(idValue: string) {
    if (validate(idValue)) {
      return new Id(idValue);
    }
  }
}
