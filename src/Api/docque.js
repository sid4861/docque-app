import axios from 'axios';

export default axios.create({
    baseURL: ' https://docque-app-server.herokuapp.com'
});