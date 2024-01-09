export interface APIAuthLoginData {
    email: string;
    password: string;
}

export interface APIAuthRegisterData {
    email: string;
    password: string;
    password2: string;
    last_name: string;
    first_name: string;
}
