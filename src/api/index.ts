import { authLogin, authRegister, authTokenRefresh, authTokenVerify } from "./api-auth";
import { todosDelete, todosGet, todosList, todosUpdate } from "./api-todos";

const TikoTodosApi = {
    auth: {
        login: authLogin,
        register: authRegister,
        token: {
            refresh: authTokenRefresh,
            verify: authTokenVerify,
        }
    },
    todo: {
        list: todosList,
        get: todosGet,
        update: todosUpdate,
        delete: todosDelete,
    },
    
}

export default TikoTodosApi;