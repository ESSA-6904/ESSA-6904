/**
 *
 * UpdateStudentModal
 *
 */

import React, { memo, Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, Form, Input } from 'antd'

import { FormattedMessage } from 'react-intl'
import messages from './messages'
import './update-student-modal.scss'

class UpdateStudentModal extends Component {
  state = {}

  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    handleCancel: PropTypes.func.isRequired,
    handleOk: PropTypes.func.isRequired,
    form: PropTypes.any,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }

  render() {
    const {
      isVisible,
      handleCancel,
      handleOk,
      name,
      email,
      photo,
      form: { getFieldDecorator },
    } = this.props
    return (
      <div className="node-creation">
        <Modal
          visible={isVisible}
          title="Add student"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={handleOk}>
              Add
            </Button>,
          ]}
        >
          <Form
            layout="vertical"
            onKeyPress={e => {
              e.key === 'Enter' ? handleOk() : ''
            }}
          >
            <Form.Item label="name">
              {getFieldDecorator('name', {
                initialValue: name,
                rules: [
                  {
                    required: true,
                    message: 'required',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="email">
              {getFieldDecorator('email', {
                initialValue: email,
                rules: [
                  {
                    required: true,
                    message: 'required',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="photo">
              {getFieldDecorator('photo', {
                initialValue: photo,
                rules: [
                  {
                    required: true,
                    message: 'required',
                  },
                ],
              })(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default memo(UpdateStudentModal)
