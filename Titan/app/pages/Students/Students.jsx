/**
 *
 * Students
 *
 */

import React, { useState } from 'react'

import PropTypes from 'prop-types'

import { FormattedMessage } from 'react-intl'
import { Helmet } from 'react-helmet'
import { Button, Icon, Input } from 'antd'
import StudentCard from './StudentCard'
import AddStudentModal from './AddStudentModel'
import UpdateStudentModal from './UpdateStudentModal'

import messages from './messages'

import './students.scss'

const Students = ({
  students,
  toggleStudentPresence,
  deleteStudent,
  toggleModal,
  addStudent,
  updateStudent,
  toggleUpdateStudentModal,
}) => {
  const [filter, setFilter] = useState('')
  const [formRef, setFormRef] = useState(null)
  const [selectedStudent, setSelectedStudent] = useState('')
  const studentList = students.students
  const { isModalVisible, isUpdateModalVisible } = students

  const handleOk = () => {
    const { form } = formRef.props
    form.validateFields((err, values) => {
      if (err) {
        return
      }
      const student = {
        name: values.name,
        email: values.email,
        photo: values.photo,
      }
      addStudent(student)
    })
  }

  const handleCancel = () => {
    toggleModal()
  }

  const handleUpdateModalCancel = () => {
    toggleUpdateStudentModal()
  }

  const handleUpdateModalOk = () => {
    const { form } = formRef.props
    form.validateFields((err, values) => {
      if (err) {
        return
      }
      const student = {
        name: values.name,
        email: values.email,
        photo: values.photo,
        id: selectedStudent.id,
      }
      updateStudent(student)
    })
  }

  const saveFormRef = formRefParameter => {
    setFormRef(formRefParameter)
  }

  return (
    <div className="students">
      <Helmet>
        <title>Students</title>
        <meta name="description" content="Description of Students" />
      </Helmet>
      <div className="header">
        <h1>All students list</h1>
        <Input
          placeholder="filter by name"
          className="filter-input"
          onChange={e => setFilter(e.target.value)}
        />
      </div>
      {isUpdateModalVisible && (
        <UpdateStudentModal
          wrappedComponentRef={saveFormRef}
          isVisible={isUpdateModalVisible}
          handleCancel={handleUpdateModalCancel}
          handleOk={handleUpdateModalOk}
          name={selectedStudent.name}
          email={selectedStudent.email}
          photo={selectedStudent.photo}
        />
      )}
      {isModalVisible && (
        <AddStudentModal
          wrappedComponentRef={saveFormRef}
          handleOk={handleOk}
          handleCancel={handleCancel}
          isVisible={isModalVisible}
        />
      )}
      <div className="student-list">
        {studentList.reduce(
          (acc, student) =>
            student.name.includes(filter)
              ? [
                  ...acc,
                  <StudentCard
                    name={student.name}
                    email={student.email}
                    isPresent={student.isPresent}
                    photo={student.photo}
                    id={student.id}
                    toggleStudentPresence={toggleStudentPresence}
                    deleteStudent={deleteStudent}
                    setSelectedStudent={setSelectedStudent}
                    toggleUpdateStudentModal={toggleUpdateStudentModal}
                />,
                ]
              : acc,
          [],
        )}
        <div className="add-student">
          <Button
            onClick={() => toggleModal()}
            type="dashed"
            className="add-card-style"
            size="large"
          >
            <Icon
              type="plus-circle"
              theme="filled"
              twoToneColor="#2a4bd8"
              className="project-plus-icon"
            />
            <br />
            <h3>Add student</h3>
          </Button>
        </div>
      </div>
    </div>
  )
}

Students.propTypes = {
  students: PropTypes.objectOf(PropTypes.any).isRequired,
  toggleStudentPresence: PropTypes.func.isRequired,
  deleteStudent: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  addStudent: PropTypes.func.isRequired,
  updateStudent: PropTypes.func.isRequired,
  toggleUpdateStudentModal: PropTypes.func.isRequired,
}

export default Students
