import axios from "axios"


const url = "http://localhost:5000/api"

export const addPost = async (article, path) => {
    return await axios.post(`${url}/e`, article)
}