import axios from 'axios'

const URL = 'http://localhost:3001/'

export const fetchStudents = async () => {
  const result = await axios.get(`${URL}students`)
  return result
}

export const addStudent = async student => {
  const result = await axios.post(`${URL}/students`, student)
  return result
}
