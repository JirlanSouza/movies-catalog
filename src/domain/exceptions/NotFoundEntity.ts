export class NotFoundEntityExeption extends Error {
  constructor(message?: string) {
    super(message ?? 'Entity does not exist');
  }
}
