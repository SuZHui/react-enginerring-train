import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStar, faCodeBranch, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export default function Card (props) {
  const { index, owner, open_issues_count, stargazers_count, forks, html_url } = props
  return (
    <a
      href={html_url}
      target="_blank" 
      className="db br1 bg-light-gray mb4 pv3 grow no-underline color-inherit w-80 center"
      rel="noreferrer">
      <div className="flex flex-column justify-center items-center">
        <h2 className="mb2 mt0">#{index}</h2>
        <img src={owner.avatar_url} width="100px" height="100px" />
        <h4 className="f4 mt3 mb1 red">{ owner.login }</h4>
        <div className="ph4 tl w-100 f5">
          <p className="mv2 flex items-center" title={owner.login}>
            <FontAwesomeIcon icon={faUser} color="#ffbf74" fixedWidth />
            <span className="ml2 flex-auto-l truncate">{ owner.login }</span>
          </p>
          <p className="mv2 flex items-center">
            <FontAwesomeIcon icon={faStar} color="#ffd701" fixedWidth />
            <span className="ml2">{ stargazers_count }</span>
          </p>
          <p className="mv2 flex items-center">
            <FontAwesomeIcon icon={faCodeBranch} color="#8dc6f3" fixedWidth />
            <span className="ml2">{ forks }</span>
          </p>
          <p className="mv2 flex items-center">
            <FontAwesomeIcon icon={faExclamationTriangle} color="#f18d95" fixedWidth />
            <span className="ml2">{ open_issues_count }</span>
          </p>
        </div>
      </div>
    </a>
  )
}

Card.propTypes = {
  index: PropTypes.number.isRequired,
  owner: PropTypes.object.isRequired,
  open_issues_count: PropTypes.number.isRequired,
  stargazers_count: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
  html_url: PropTypes.string.isRequired
}
