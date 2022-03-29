import axios from 'axios'
const baseURL = 'http://34.245.213.76:3000'

const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 5000,
})

const signInRequest = credentials =>
  axiosClient.post('/auth/signin', credentials)

const getArticlesRequest = (accessToken, page) =>
  axiosClient.get(`/articles?page=${page}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

export {signInRequest, getArticlesRequest}
