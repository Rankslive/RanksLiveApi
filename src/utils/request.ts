import axios from 'axios'

const request = axios.create({
	timeout: 3000
})

request.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		return Promise.reject(error)
	}
)
export default request
