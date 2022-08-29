import axios from 'axios'

const baseUrl = 'http://localhost:3002/api/persons'

const getAll = () => {
    const newObject = {
        "name": "Arto ",
        "number": "040-123456",
        "id": 10
    }
    return axios.get(baseUrl).then(response => response.data.concat(newObject))
}

const create = newObject => {
    return axios.post(baseUrl, newObject).then(response => response.data)
}

const update = (id,newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject).then(response => response.data)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`).then(response => response.data)
}
export default {getAll, create, update,remove}
