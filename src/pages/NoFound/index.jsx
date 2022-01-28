import React from "react";
import { Result, Button } from "antd";

export default function NoFound() {
  return (
    <div className="no-found tc mt6">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" href="/react-enginerring-train/">
            Back Home
          </Button>
        }
      />
    </div>
  );
}
