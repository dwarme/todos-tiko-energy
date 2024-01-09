import { APIAuthLoginData, APIAuthRegisterData } from "../types/api.d";
import { TIKO_API_ENDPOINTS } from "../utils/constanst";
import { cookieAuthSaveToken } from "../utils/cookie";

export async function authLogin(payload: APIAuthLoginData): Promise<{error?: any} >{
    try{
        const response = await fetch(TIKO_API_ENDPOINTS.auth.login, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        if(response.status !== 200) {
            return {error: result}
        }

        cookieAuthSaveToken({tokenAccess: result.access, tokenRefresh: result.refresh});
        return {}
    }catch(error){
        return {
            error: {
                detail: 'Unknow error occured'
            }
        }
    }
}

export async function authRegister(payload: APIAuthRegisterData): Promise<{error?: any} >{
    try{
        const response = await fetch(TIKO_API_ENDPOINTS.auth.register, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        if(response.status !== 201) {
            return {error: result}
        }

        cookieAuthSaveToken({tokenAccess: result.access, tokenRefresh: result.refresh});
        return {}

    }catch(error){
        return {
            error: {
                detail: 'Unknow error occured'
            }
        }
    }
}

export async function authTokenRefresh() {

}

export async function authTokenVerify() {

}