import React, { useMemo, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Row, Col, Button, Modal } from "antd";
import usePlayer from "@/hooks/usePlayer";
import Card from "./Card";
import ErrorWrapper from "./ErrorWrapper";

export default function Result() {
  const navigate = useNavigate();
  const handleReset = () => {
    navigate("/battle");
  };

  const [search] = useSearchParams();
  const p1 = usePlayer(search.get("p1"));
  const p2 = usePlayer(search.get("p2"));

  useEffect(() => {
    if (p1.isError || p2.isError) {
      Modal.error({
        title: "错误",
        content: "未找到Player，将返回Battle页面。",
        onOk: handleReset,
        okText: "返回",
      });
    }
  }, [p1.isError, p2.isError]);

  const [p1State, p2State] = useMemo(() => {
    if (!p1.player || !p2.player) {
      return [null, null];
    }
    const max = Math.max(p1.player.public_repos, p2.player.public_repos);
    const arr = [p1.player.public_repos, p2.player.public_repos];
    if (arr.every((p) => p === max)) {
      // 平局
      return [Card.STATUS.TIE, Card.STATUS.TIE];
    }
    // 胜负
    return arr.map((p) => (p === max ? Card.STATUS.WIN : Card.STATUS.LOSE));
  }, [p1, p2]);

  return (
    <div className="page pt5 overflow-y-auto">
      <Row className="mt4" justify="center">
        <Col xs={18} sm={10} md={8} lg={6} xl={6} xxl={4}>
          {p1.isError || p1.isLoading ? (
            <ErrorWrapper isLoading={p1.isLoading} />
          ) : (
            <Card status={p1State} {...p1.player} />
          )}
        </Col>
        <Col
          xs={18}
          sm={{ span: 10, offset: 2 }}
          md={{ span: 8, offset: 6 }}
          lg={{ span: 6, offset: 5 }}
          xl={{ span: 6, offset: 6 }}
          xxl={{ span: 4, offset: 4 }}
        >
          {p2.isError || p2.isLoading ? (
            <ErrorWrapper isLoading={p2.isLoading} />
          ) : (
            <Card status={p2State} {...p2.player} />
          )}
        </Col>
      </Row>
      <Row justify="center">
        <Button size="large" onClick={handleReset} type="primary">
          Reset
        </Button>
      </Row>
    </div>
  );
}
