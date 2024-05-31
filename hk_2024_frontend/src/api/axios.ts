import axios from 'axios';

const $api =  axios.create({
    baseURL:  process.env.NODE_ENV==="development"?"https://localhost:5001":"",
    withCredentials: true
});
$api.interceptors.request.use((config) => {

    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
});


export default $api;
