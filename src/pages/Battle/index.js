import React from 'react'
import Instructions from './Instructions'

export default function Battle () {
  return (
    <div>
      <Instructions />
      <div>
        <h2 className="tc">Players</h2>
        <div className="flex justify-between">
          <div className="flex-auto ph4">
            <h2>Player One</h2>
            <div>
              <input />
              <button type="button">Submit</button>
            </div>
          </div>
          <div className="flex-auto ph4">
            <h2>Player Two</h2>
            <div>
              <input />
              <button type="button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
