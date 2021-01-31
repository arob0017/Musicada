import axios from "axios";

export default {
    login: (userData) => {
        return axios.post("/api/users/login", userData)
    },
    register: (userData) => {
        return axios.post("/api/users/register", userData)
    },
    logout: (userData) => {
        return axios.post("/api/logout", userData);
    },
    // Gets all books
    getUsers: function () {
        return axios.get("/api/users");
    },
    // Gets the book with the given id
    updateUser: function (id, userData) {
        return axios.put("/api/users/" + id, userData);
    },
    // Deletes the book with the given id
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    }
}

