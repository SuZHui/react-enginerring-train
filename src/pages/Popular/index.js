import React, { useState } from 'react'
import { Button, Spin } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSearchParams } from 'react-router-dom'
import Header from './Header'
import Content from './Content'
import usePopular from './usePopular'

export default function Popular () {
  const [searchParams] = useSearchParams()
  const type = searchParams.get('type') || 'All'
  const { list, isLoading, isError, loadMore, reload } = usePopular(type)

  return (
    <div id="scrollable" className="popular mt5 flex flex-column flex-auto overflow-y-auto">
      <div className="popular-wrapper">
        <Header type={type} />
        <InfiniteScroll
          dataLength={list.length}
          hasMore={list.length < 50}
          next={loadMore}
          loader={
            <div className="tc mv4">
              {
                isLoading
                  ? isError
                    ? <Button type="primary" onClick={reload}>重新加载</Button>
                    : <Spin size="large" /> 
                  : isError
                    ? <Button type="primary" onClick={reload}>重新加载</Button>
                    : null
              }
            </div>
          }
          endMessage={
            <div className="tc mv4">
              已经到最后了！
            </div>
          }
          scrollableTarget="scrollable"
        >
          <Content list={list}/>
        </InfiniteScroll>
      </div>
    </div>
  )
}
