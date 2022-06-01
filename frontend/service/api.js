import axios from "axios"


const url = "http://localhost:5000"

const addPost = async (article) => {
    return await axios.post(`${url}/test`, article)
}

axios.get()
axios.post()