/**
 *
 * StudentCard
 *
 */

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Switch, Icon } from 'antd'

import { FormattedMessage } from 'react-intl'
import messages from './messages'
import './student-card.scss'

function StudentCard({
  name,
  email,
  isPresent,
  photo,
  id,
  toggleStudentPresence,
  deleteStudent,
  setSelectedStudent,
  toggleUpdateStudentModal,
}) {
  return (
    <div className="student-card">
      <div className="delete-student">
        <button
          onClick={() => deleteStudent(id)}
          type="button"
          className="global-clean-button"
        >
          <Icon type="delete" />
        </button>
        <button
          onClick={() => {
            setSelectedStudent({
              name,
              email,
              photo,
              id,
            })
            toggleUpdateStudentModal()
          }}
          type="button"
          className="global-clean-button"
        >
          <Icon type="edit" />
        </button>
      </div>
      <div className="name info">
        <h2>Name:</h2> <span>{name}</span>
      </div>
      <div className="email info">
        <h2>email:</h2> <span>{email}</span>
      </div>
      <div className="presence info">
        <Switch
          checked={isPresent}
          checkedChildren="Present"
          unCheckedChildren="Absent"
          onChange={() => toggleStudentPresence(id)}
        />
      </div>
      <div className="image info">
        <img src={photo} alt="profile" />
      </div>
    </div>
  )
}

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isPresent: PropTypes.bool.isRequired,
  photo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  toggleStudentPresence: PropTypes.func.isRequired,
  deleteStudent: PropTypes.func.isRequired,
  setSelectedStudent: PropTypes.func.isRequired,
  toggleUpdateStudentModal: PropTypes.func.isRequired,
}

export default memo(StudentCard)
