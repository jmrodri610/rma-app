import axios from 'axios';

const userApiService = axios.create({
    baseURL: 'http://localhost:8000/user'
})

export default userApiService;