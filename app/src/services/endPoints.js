import axiosInstance from './baseUrl'

export const getUserList = (search) => {
    return axiosInstance.get(`/search/users?q=${search}`)
}

export const getUser = (name) => {
    return axiosInstance.get(`/users/${name}`)
}