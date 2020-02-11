import axiosInstance from './baseUrl'


export const getUserList = (search) => {
    console.log(axiosInstance.baseUrl)
    return axiosInstance.get(`/search/users?q=${search}`)
}

export const getUser = (name) => {
    return axiosInstance.get(`/users?q=${name}`)
}
