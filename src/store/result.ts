export interface Result<T> {
    name: string,
    success: boolean,
    message?: string,
    errorCode?: number,
    version?: string,
    data: T
}