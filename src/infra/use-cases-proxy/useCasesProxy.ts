export class UseCaseProxy<UseCase> {
  constructor(private readonly useCase: UseCase) {}

  getInstance() {
    return this.useCase;
  }
}
