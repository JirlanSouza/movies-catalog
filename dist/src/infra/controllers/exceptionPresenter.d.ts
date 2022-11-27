export declare class ExceptionPresenter {
    statusCode: number;
    tumestamp: string;
    path: string;
    message: string;
}
export declare class BadRequestPresenter extends ExceptionPresenter {
    statusCode: number;
    message: string;
}
export declare class UnauthorizedPresenter extends ExceptionPresenter {
    statusCode: number;
    message: string;
}
export declare class NotFoundPresenter extends ExceptionPresenter {
    statusCode: number;
    message: string;
}
export declare class ConflictPresenter extends ExceptionPresenter {
    statusCode: number;
    message: string;
}
