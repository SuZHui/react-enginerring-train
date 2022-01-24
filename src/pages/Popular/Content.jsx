import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'


export default function Content ({ list }) {
  return (
    <div className="flex items-center justify-around flex-wrap" style={{ padding: '0 20%' }}>
      {
        list.map((li, i) => {
          return <Card key={li.id + li.name} {...li} index={i + 1} />
        })
      }
    </div>
  )
}

Content.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
}
