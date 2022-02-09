import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LANGUAGES = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

export default function Header({ type }) {
  return (
    <div>
      <div className="w-100 tc mb4">
        {LANGUAGES.map((item) => {
          let className = "pointer dim f5 mh2 fw6";
          if (type === item) {
            className += " red";
          }
          return (
            <Link className={className} key={item} to={`/?type=${item}`}>
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

Header.propTypes = {
  type: PropTypes.string.isRequired,
};
