import React from "react";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faFighterJet,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

export default function Instructions() {
  return (
    <div>
      <h2 className="tc">Instructions</h2>
      {/* className="flex justify-center" */}
      <Row justify="center">
        <Col
          xs={{ span: 16 }}
          sm={{ span: 8 }}
          md={{ span: 6 }}
          lg={{ span: 4 }}
          xxl={3}
        >
          <div className="tc mb4">
            <p className="fw6">Enter Two Github</p>
            <div className="pa4 bg-light-gray mh3">
              <FontAwesomeIcon
                icon={faUsers}
                size="5x"
                color="#ffbf74"
                fixedWidth
              />
            </div>
          </div>
        </Col>
        <Col
          xs={{ span: 16 }}
          sm={{ span: 8 }}
          md={{ span: 6 }}
          lg={{ span: 4 }}
          xxl={3}
        >
          <div className="tc mb4">
            <p className="fw6">Battle</p>
            <div className="pa4 bg-light-gray mh3">
              <FontAwesomeIcon
                icon={faFighterJet}
                size="5x"
                color="gray"
                fixedWidth
              />
            </div>
          </div>
        </Col>
        <Col
          xs={{ span: 16 }}
          sm={{ span: 8 }}
          md={{ span: 6 }}
          lg={{ span: 4 }}
          xxl={3}
        >
          <div className="tc mb4">
            <p className="fw6">See The Winner</p>
            <div className="pa4 bg-light-gray mh3">
              <FontAwesomeIcon
                icon={faTrophy}
                size="5x"
                color="rgb(244, 234, 42)"
                fixedWidth
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
