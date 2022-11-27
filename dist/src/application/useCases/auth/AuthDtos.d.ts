export interface SignInDto {
    email: string;
    password: string;
}
interface User {
    id: string;
    name: string;
    email: string;
}
export interface SignInResultDto {
    user: User;
    token: string;
}
export interface ValidateTokenPayloadResultDto extends User {
}
export {};
