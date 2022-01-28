import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import Card from "./Card";

export default function Content({ list }) {
  return (
    <Row className="flex items-center justify-around pv3" wrap>
      {list.map((li, i) => {
        return (
          <Col key={li.id + li.name + i} lg={6} md={8} sm={12} xs={24}>
            <Card {...li} index={i + 1} />
          </Col>
        );
      })}
    </Row>
  );
}

Content.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
