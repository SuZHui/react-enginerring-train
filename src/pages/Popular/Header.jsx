import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

const LANGUAGES = [
  'All',
  'JavaScript',
  'Ruby',
  'Java',
  'CSS',
  'Python',
]

export default function Header({ onChange }) {
  const [active, setActive] = useState(0)

  const handleClick = index => {
    setActive(index)
    onChange(LANGUAGES[index])
  }

  return (
    <div>
      <div className="w-100 tc mv3" >
        {LANGUAGES.map((item, index) => {
          let className = 'pointer dim f3 mh3'
          index === active && (className += ' red')
          return (
            <span
              className={className}
              onClick={() => handleClick(index)}
              key={item}
            >
              {item}
            </span>
          )
        })}
      </div>
    </div>
  )
}

Header.propTypes = {
  onChange: PropTypes.func.isRequired
}
