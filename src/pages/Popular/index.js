import React, { useState, useEffect, useRef } from 'react'
import Header from './Header'
import Content from './Content'
import LoadMoreButton from './LoadMoreButton'
import Loading from './Loading'
import API from '@/api'

const usePopular = (type) => {
  const [list, setList] = useState([])
  const page = useRef(1)
  const [loading, setLoading] = useState(false)
  const fetchData = (type, page) => {
    setLoading(true)
    const { run, cancel } = API.getList(type, page)
    run()
      .then(res => {
        let arr
        if (page === 1) {
          arr = res.items
        } else {
          arr = [...list, ...res.items]
        }
        setList(arr)
      })
      .finally(() => {
        setLoading(false)
      })

    return cancel
  }

  const loadMore = () => {
    page.current++
    fetchData(type, page.current)
  }

  useEffect(() => {
    if (page.current > 1) {
      page.current = 1
    }
    setList([])
    
    const cancel = fetchData(type, page.current)
    return () => cancel()
  }, [type])
  
  return {
    loading,
    list,
    loadMore
  }
}


export default function Popular () {
  const [type, setType] = useState('All')
  const { list, loading, loadMore } = usePopular(type)

  return (
    <div>
      <Header onChange={setType} />
      <Content list={list}/>
      {
        loading
          ? <Loading /> 
          : <LoadMoreButton onClick={loadMore} />
      }
    </div>
  )
}
