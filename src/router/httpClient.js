import axios from 'axios'

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT,
  timeout: 60000
})

export default httpClient
