import axios from 'axios'

const axiosInstance = axios.create({
    baseUrl = 'https://api.github.com'
})


export default axiosInstance
