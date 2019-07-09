/**
 *
 * Students
 *
 */

import React, { memo } from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import { DAEMON } from 'utils/constants'
import { useInjectReducer } from 'utils/injectReducer'
import makeSelectStudents from '../../shared/redux/students/selectors'
import reducer from '../../shared/redux/students/reducer'

import * as actions from '../../shared/redux/students/actions'

import saga from '../../shared/redux/students/saga'

import Students from './Students'

const StudentsIndex = props => {
  useInjectReducer({ key: 'students', reducer })

  return <Students {...props} />
}

const mapStateToProps = createStructuredSelector({
  students: makeSelectStudents(),
})

const mapDispatchToProps = {
  ...actions,
}

const withSaga = injectSaga({ key: 'students', saga, mode: DAEMON })

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withConnect,
  memo,
  withSaga,
)(StudentsIndex)
