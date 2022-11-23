export declare class UseCaseProxy<UseCase> {
    private readonly useCase;
    constructor(useCase: UseCase);
    getInstance(): UseCase;
}
