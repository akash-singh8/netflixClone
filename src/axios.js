import axios from "axios";

// base url to make requests to the movie database
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

// instance is basically an instance of axios with a base url which is appended to the rest of the url
// eg: instance.get('/foo-bar') => https://api.themoviedb.org/3/foo-bar

export default instance;