import React from 'react'
import { Spin, Empty } from 'antd'
import PropTypes from 'prop-types'

export default function ErrorWrapper ({ isLoading }) {
  return (
    <div className="pv6 tc">
      {
        isLoading
          ? <Spin />
          : <Empty />
      }
    </div>
  )
}
ErrorWrapper.propTypes = {
  isLoading: PropTypes.bool.isRequired
}
