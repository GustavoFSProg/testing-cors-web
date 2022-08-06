import axios from 'axios'

const api = axios.create({
  baseURL: 'https://testing-cors-api.herokuapp.com/'
})

export default api