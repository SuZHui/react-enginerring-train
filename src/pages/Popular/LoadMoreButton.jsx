import React from 'react'
import propTypes from 'prop-types'

export default function LoadMoreButton ({ onClick }) {
  return (
    <div className="tc mv4">
      <button className="bn br2 white pv2 ph3 bg-blue f6 dim pointer" type="button"
        onClick={onClick}
      >加载更多</button>
    </div>
  )
}

LoadMoreButton.propTypes = {
  onClick: propTypes.func.isRequired
}
