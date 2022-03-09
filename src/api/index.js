import axios from 'axios';
import qs from 'querystring';

const baseUrl = 'https://debttracker-graphql.herokuapp.com';

export default {
	login: async ({ username, password }) => {
		const queryString = qs.stringify({ username, password });
		const response = await axios.post(`${baseUrl}/login`, queryString, {
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		});
		return response.data;
	},

	register: async ({ username, password }) => {
		const queryString = qs.stringify({ username, password });
		const response = await axios.post(`${baseUrl}/register`, queryString, {
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		});
		return response.data;
	},
};
