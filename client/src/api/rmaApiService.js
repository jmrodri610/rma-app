import axios from 'axios';

export default userApiService = axios.create({
    baseURL: 'http://localhost:8000/rma'
})