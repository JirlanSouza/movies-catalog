export class DoesNotExist extends Error {
  constructor(message?: string) {
    super(message ?? 'Does not exist');
  }
}
