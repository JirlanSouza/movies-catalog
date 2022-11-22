import { Entity } from '../core/Entity';

export class User extends Entity {
  readonly name: string;
  readonly email: string;
  readonly password: string;

  constructor(name: string, email: string, password: string, id?: string) {
    super(id);
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
