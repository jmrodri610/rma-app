import axios from 'axios';

const rmaApiService = axios.create({
    baseURL: 'http://localhost:8000/rma'
})

export default rmaApiService;