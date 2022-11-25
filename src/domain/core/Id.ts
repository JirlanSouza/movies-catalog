import { v4 as uuid, validate } from 'uuid';
import { InvalidCreateEntityArgumentExeption } from '../exceptions/InvalidCreateEntityARgument';

export class Id {
  private constructor(readonly value: string) {}

  static new() {
    return new Id(uuid());
  }

  static from(idValue: string) {
    if (validate(idValue)) {
      return new Id(idValue);
    }

    throw new InvalidCreateEntityArgumentExeption('Invalid id ');
  }
}
