import axios from 'axios';
const apiClient = axios.create({
    baseURL: 'http://blinkit.connectednatural.space/api/v1',
    timeout: 10000,
    headers: {
        Authorization: "dda6216b-be2d-457f-84a3-a0ac6dd20bf1"
    },
})

export default apiClient;