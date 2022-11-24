export class InvalidCreateEntityArgumentExeption extends Error {
  constructor(message?: string) {
    super(message ?? 'Invalid create entity argument');
  }
}
