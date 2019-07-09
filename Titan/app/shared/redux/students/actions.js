/*
 *
 * Students actions
 *
 */
import * as CONSTANTS from './constants'

export function defaultAction() {
  return {
    type: CONSTANTS.DEFAULT_ACTION,
  }
}

export const addStudent = student => ({
  type: CONSTANTS.ADD_STUDENT_REQUEST,
  student,
})

export const deleteStudent = id => ({
  type: CONSTANTS.DELETE_STUDENT_REQUEST,
  id,
})

export const toggleStudentPresence = id => ({
  type: CONSTANTS.TOGGLE_STUDENT_PRESENCE_REQUEST,
  id,
})

export const toggleModal = () => ({
  type: CONSTANTS.TOGGLE_MODAL_REQUEST,
})

export const toggleUpdateStudentModal = () => ({
  type: CONSTANTS.TOGGLE_UPDATE_MODAL_REQUEST,
})

export const updateStudent = student => ({
  type: CONSTANTS.UPDATE_STUDENT_REQUEST,
  student,
})
