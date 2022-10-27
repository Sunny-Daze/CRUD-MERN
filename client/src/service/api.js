import axios from 'axios';

const URL = 'http://localhost:8000';

export const addUser = async (data) => {
    try{
        return await axios.post(`${URL}/add`, data);
    } catch(e) {
        console.log("Error while calling addUser API", e);
    }
}

export const getUser = async () => {
    try {
        return await axios.get(`${URL}/getuser`)
    } catch(e) {
        console.log("Error getting the data from the database", e)
    }
}

export const getUserSingle = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`)
    } catch(e) {
        console.log("Error fetching the user details", e)
    }
}

export const editUser = async (user, id) => {
    try {
        return await axios.post(`${URL}/${id}`, user); //put
    } catch(e) {
        console.log("Error updating the user data", e)
    }
}

export const deleteUser = async(id) => {
    try {
        return await axios.delete(`${URL}/${id}`)
    } catch(e) {
        console.log("Error Deleting the user", e)
    }
}