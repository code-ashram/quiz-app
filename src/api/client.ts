import axios from 'axios'
import { Question } from '../models'

const BASE_URL = 'http://localhost:3000'

const client = axios.create({
  baseURL: BASE_URL
})

export const getQuestions = async (): Promise<Question[]> =>
  client.get<Question[]>(`/questions`)
    .then((response) => response.data)
