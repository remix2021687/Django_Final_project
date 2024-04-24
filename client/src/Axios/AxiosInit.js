import axios from 'axios'

export const AxiosInit = axios.create({
    baseURL: 'http://localhost:8000/api/',
})

AxiosInit.interceptors.request.use((config) => {
    config.headers.Authorization = localStorage.getItem('token');

    return config;
})


export const GetTourList = async () => {
    try {
        const response = await AxiosInit.get('tours/', {signal: AbortSignal.timeout(5000), timeout: 1000})

        return response;
    } catch(err) {
        console.error(err);
    }
}

export const PostLogin = async (data) => {
    const request = await AxiosInit.post('auth/login/', data)

    try {
        return request
    } catch(err) {
       return request
    }
}

export const GetProfle = (id) => {
    try {
        const response = AxiosInit.get(`users/${id}/`)

        return response
    } catch(err) {
        console.log(err)
    }
}