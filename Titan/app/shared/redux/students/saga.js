import { takeEvery, take, call, put, select, all } from 'redux-saga/effects'
import { v4 } from 'uuid'
import * as CONSTANTS from './constants'
// Individual exports for testing

function* addStudent({ student }) {
  try {
    yield put({
      type: CONSTANTS.ADD_STUDENT_SUCCESS,
      student: { ...student, id: v4() },
    })
  } catch (e) {
    yield put({
      type: CONSTANTS.ADD_STUDENT_FAILURE,
    })
  }
}

function* addStudentWatcher() {
  yield takeEvery(CONSTANTS.ADD_STUDENT_REQUEST, addStudent)
}

function* deleteStudent({ id }) {
  try {
    yield put({
      type: CONSTANTS.DELETE_STUDENT_SUCCESS,
      id,
    })
  } catch (e) {
    yield put({
      type: CONSTANTS.DELETE_STUDENT_FAILURE,
    })
  }
}

function* deleteStudentWatcher() {
  yield takeEvery(CONSTANTS.DELETE_STUDENT_REQUEST, deleteStudent)
}

function* toggleStudentPresence({ id }) {
  try {
    yield put({
      type: CONSTANTS.TOGGLE_STUDENT_PRESENCE_SUCCESS,
      id,
    })
  } catch (e) {
    yield put({
      type: CONSTANTS.TOGGLE_STUDENT_PRESENCE_FAILURE,
    })
  }
}

function* toggleStudentPresenceWatcher() {
  yield takeEvery(
    CONSTANTS.TOGGLE_STUDENT_PRESENCE_REQUEST,
    toggleStudentPresence,
  )
}

function* toggleModal() {
  try {
    yield put({
      type: CONSTANTS.TOGGLE_MODAL_SUCCESS,
    })
  } catch (e) {
    yield put({
      type: CONSTANTS.TOGGLE_MODAL_FAILURE,
    })
  }
}

function* toggleModalWatcher() {
  yield takeEvery(CONSTANTS.TOGGLE_MODAL_REQUEST, toggleModal)
}

function* updateStudent({ student }) {
  try {
    yield put({
      type: CONSTANTS.UPDATE_STUDENT_SUCCESS,
      student,
    })
  } catch (e) {
    yield put({
      type: CONSTANTS.UPDATE_STUDENT_FAILURE,
    })
  }
}

function* updateStudentWatcher() {
  yield takeEvery(CONSTANTS.UPDATE_STUDENT_REQUEST, updateStudent)
}

function* toggleUpdateModal() {
  try {
    yield put({
      type: CONSTANTS.TOGGLE_UPDATE_MODAL_SUCCESS,
    })
  } catch (e) {
    yield put({
      type: CONSTANTS.TOGGLE_UPDATE_MODAL_FAILURE,
    })
  }
}

function* toggleUpdateModalWatcher() {
  yield takeEvery(CONSTANTS.TOGGLE_UPDATE_MODAL_REQUEST, toggleUpdateModal)
}

export default function* studentsSaga() {
  yield all([
    addStudentWatcher(),
    deleteStudentWatcher(),
    toggleStudentPresenceWatcher(),
    toggleModalWatcher(),
    updateStudentWatcher(),
    toggleUpdateModalWatcher(),
  ])
}
