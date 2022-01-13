import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://tinder-backend-terexeret.herokuapp.com',
});

export default instance;
