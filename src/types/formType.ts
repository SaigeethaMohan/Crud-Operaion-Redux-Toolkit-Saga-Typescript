export interface userDetails {
    id?: number | string,
    name?: string,
    email?: string,
    address?: string
}

export interface userId {
    id: number|string
}

export interface formFields {
    status: boolean,
    data: Array<userDetails>,
    error: string,
    user: userDetails
}