import axios from 'axios';


const apiGitProfile = axios.create({
    baseURL: 'https://api.github.com/users/',
});

export default apiGitProfile;