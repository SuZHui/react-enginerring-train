import React from "react";
import { Button, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Content from "./Content";
import usePopular from "./usePopular";

export default function Popular() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "All";
  const { list, isLoading, isError, loadMore, reload } = usePopular(type);

  return (
    <div className="popular pt5 flex flex-column">
      <Header type={type} />
      <div id="scrollable" className="flex-auto overflow-y-auto">
        <InfiniteScroll
          dataLength={list.length}
          hasMore={list.length < 90}
          next={loadMore}
          loader={
            <div className="tc mv4">
              {isLoading ? (
                isError ? (
                  <Button type="primary" onClick={reload}>
                    重新加载
                  </Button>
                ) : (
                  <Spin size="large" />
                )
              ) : isError ? (
                <Button type="primary" onClick={reload}>
                  重新加载
                </Button>
              ) : null}
            </div>
          }
          endMessage={<div className="tc mv4">已经到最后了！</div>}
          scrollableTarget="scrollable"
        >
          <Content list={list} />
        </InfiniteScroll>
      </div>
    </div>
  );
}
