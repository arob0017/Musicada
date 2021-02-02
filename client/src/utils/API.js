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
    updateUserProfile: function (id, userData) {
        return axios.put("/api/users/" + id, userData);
    },
    // Deletes the book with the given id
    deleteUserData: function (id, userData) {
        return axios.delete("/api/users/" + id, userData);
    },
    deleteGenre: function (userId, genre) {
        return axios.post("/api/users/genre", { userId, genre })
    },
    deleteInstrument: function (userId, otherInstrument) {
        return axios.post("/api/users/otherInstrument", { userId, otherInstrument })
    }
}

