export const SITE_MAP = {
    index: '/',
    login: '/login',
    register: '/register',
    logout: '/logout',
    todos: '/todos',
}

export const ASSETS = {
    tikoLogo: 'https://tiko.energy/wp-content/uploads/2020/07/logo_tiko.svg'
}

export const FORM_FIELDS_VALIDITY_LENGHTS = {
    name: {
        min: 1,
        max: 150,
    },
    email: {
        min: 1,
        max: 150
    },
    password: {
        min: 1,
        max: 150
    }
}

export const TIKO_API_ENDPOINTS = {
    auth: {
        login: 'https://todos-api.public.tiko.energy/api/login/',
        register: 'https://todos-api.public.tiko.energy/api/register/',        
    },
    todos: {

    }
}