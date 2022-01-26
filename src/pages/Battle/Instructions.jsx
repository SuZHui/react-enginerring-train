import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faFighterJet, faTrophy } from '@fortawesome/free-solid-svg-icons'

export default function Instructions() {
  return (
    <div className="mb5">
      <h2 className="tc">Instructions</h2>
      <div className="flex justify-center">
        <div className="tc">
          <p className="fw6">Enter Two Github</p>
          <div className="pa4 bg-light-gray mh3">
            <FontAwesomeIcon icon={faUsers} size="6x" color="#ffbf74" fixedWidth />
          </div>
        </div>
        <div className="tc">
          <p className="fw6">Battle</p>
          <div className="pa4 bg-light-gray mh3">
            <FontAwesomeIcon icon={faFighterJet} size="6x" color="gray" fixedWidth />
          </div>
        </div>
        <div className="tc">
          <p className="fw6">See The Winner</p>
          <div className="pa4 bg-light-gray mh3">
            <FontAwesomeIcon icon={faTrophy} size="6x" color="rgb(244, 234, 42)" fixedWidth />
          </div>
        </div>
      </div>
    </div>
  )
}
