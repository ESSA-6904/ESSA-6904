/* eslint-disable global-require */
/**
 *
 * TopBar
 *
 */

import React, { memo } from 'react'
// import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import useWindowSize from '@rehooks/window-size'
import { Row, Col } from 'antd'
import routes from 'shared/routes'
import messages from './messages'
import './top-bar.scss'
import Menu from './Menu'

function TopBar() {
  const windowSize = useWindowSize()
  return (
    <div className="top-bar">
      <Row gutter={24} type="flex" className="row-title">
        <Col xs={6} sm={6} md={6} lg={6} xl={6} className="logo">
          <Link to={routes.DASHBOARD.path}>
            <img
              src={require('../../../assets/images/TopBar/logo.png')}
              alt="logo"
            />
          </Link>
        </Col>
        
      </Row>
    </div>
  )
}

TopBar.propTypes = {}

export default memo(TopBar)
