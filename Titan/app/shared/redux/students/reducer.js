/*
 *
 * Students reducer
 *
 */
import produce from 'immer'
import * as CONSTANTS from './constants'

export const initialState = {
  isModalVisible: false,
  isUpdateModalVisible: false,
  students: [
    {
      name: 'Donald Trump',
      email: 'wall@mexico.com',
      id: 0,
      photo:
        'https://pmcdeadline2.files.wordpress.com/2019/01/donald-trump-january-2019-e1562545869608.jpg',
      isPresent: true,
    },
    {
      name: 'Donald Trump',
      email: 'wall@mexico.com',
      id: 1,
      photo:
        'https://pmcdeadline2.files.wordpress.com/2019/01/donald-trump-january-2019-e1562545869608.jpg',
      isPresent: true,
    },
    {
      name: 'Donald Trump',
      email: 'wall@mexico.com',
      id: 2,
      photo:
        'https://pmcdeadline2.files.wordpress.com/2019/01/donald-trump-january-2019-e1562545869608.jpg',
      isPresent: true,
    },
    {
      name: 'Donald Trump',
      email: 'wall@mexico.com',
      id: 3,
      photo:
        'https://pmcdeadline2.files.wordpress.com/2019/01/donald-trump-january-2019-e1562545869608.jpg',
      isPresent: true,
    },
    {
      name: 'Donald Trump',
      email: 'wall@mexico.com',
      id: 4,
      photo:
        'https://pmcdeadline2.files.wordpress.com/2019/01/donald-trump-january-2019-e1562545869608.jpg',
      isPresent: true,
    },
    {
      name: 'Donald Trump',
      email: 'wall@mexico.com',
      id: 5,
      photo:
        'https://pmcdeadline2.files.wordpress.com/2019/01/donald-trump-january-2019-e1562545869608.jpg',
      isPresent: true,
    },
    {
      name: 'Donald Trump',
      email: 'wall@mexico.com',
      id: 6,
      photo:
        'https://pmcdeadline2.files.wordpress.com/2019/01/donald-trump-january-2019-e1562545869608.jpg',
      isPresent: false,
    },
    {
      name: 'Donald Trump',
      email: 'wall@mexico.com',
      id: 7,
      photo:
        'https://pmcdeadline2.files.wordpress.com/2019/01/donald-trump-january-2019-e1562545869608.jpg',
      isPresent: true,
    },
  ],
}

/* eslint-disable default-case, no-param-reassign */
const studentsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CONSTANTS.DEFAULT_ACTION:
        break
      case CONSTANTS.ADD_STUDENT_SUCCESS:
        draft.students.push(action.student)
        draft.isModalVisible = !draft.isModalVisible
        break
      case CONSTANTS.DELETE_STUDENT_SUCCESS:
        draft.students = draft.students.filter(
          student => student.id !== action.id,
        )
        break
      case CONSTANTS.UPDATE_STUDENT_SUCCESS:
        draft.students = draft.students.map(student =>
          student.id === action.student.id ? action.student : student,
        )
        draft.isUpdateModalVisible = !draft.isUpdateModalVisible
        break
      case CONSTANTS.TOGGLE_STUDENT_PRESENCE_SUCCESS:
        draft.students = draft.students.map(student => {
          if (student.id === action.id) {
            return {
              ...student,
              isPresent: !student.isPresent,
            }
          }
          return student
        })
        break
      case CONSTANTS.TOGGLE_MODAL_SUCCESS:
        draft.isModalVisible = !draft.isModalVisible
        break
      case CONSTANTS.TOGGLE_UPDATE_MODAL_SUCCESS:
        draft.isUpdateModalVisible = !draft.isUpdateModalVisible
        break
    }
  })

export default studentsReducer
