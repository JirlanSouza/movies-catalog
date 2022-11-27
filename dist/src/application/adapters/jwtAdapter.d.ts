export interface JwtPayload {
    userId: string;
}
export interface JwtAdapter {
    signIn(payload: JwtPayload): string;
    verify(token: string): JwtPayload;
}
