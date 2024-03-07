import axios, {CreateAxiosDefaults} from 'axios'

const options: CreateAxiosDefaults = {
    baseURL: "http://localhost:8000/api",
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
}


// Запросы БЕЗ токена
const axiosClassic = axios.create(options)

export { axiosClassic }