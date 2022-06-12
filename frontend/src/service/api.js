import axios from "axios"


const url = "http://localhost:5000/api"

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;

export const addPost = async (article) => {
    return await axios.post(`${url}/n`, article)
}

export const editPost = async (article, path) => {
    return await axios.post(`${url}/e`, article)
}

export const userLogin = async (userData) => {
    return await axios.post(`${url}/auth/login`, userData)
}

export const userRegister = async (userData) => {
    return await axios.post(`${url}/auth/register`, userData)
}