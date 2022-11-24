export class AlreadyExistExeption extends Error {
  constructor(message?: string) {
    super(message ?? 'Already exist error');
  }
}
