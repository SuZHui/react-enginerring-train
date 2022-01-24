import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function Loading () {
  return (
    <div className="tc mv4">
      <FontAwesomeIcon icon={faSpinner} size="3x" className="anim-loading-rotate" />
    </div>  
  )
}
