import React from 'react'
import { useRoutes } from 'react-router-dom'
import Nav from '@/components/Nav'

const Popular = React.lazy(() => import(/* webpackChunkName: 'Popular' */'@/pages/Popular'))
const Battle = React.lazy(() => import(/* webpackChunkName: 'Battle' */'@/pages/Battle'))
const Result = React.lazy(() => import(/* webpackChunkName: 'Result' */'@/pages/Result'))
const NoFound = React.lazy(() => import(/* webpackChunkName: 'NoFound' */'@/pages/NoFound'))

export default function App () {
  const fallbackElememt = <>...</>
  const routes = [
    {
      path: '/',
      element: (
        <React.Suspense fallback={fallbackElememt}>
          <Popular />
        </React.Suspense>
      )
    },
    {
      path: '/battle',
      element: (
        <React.Suspense fallback={fallbackElememt}>
          <Battle />
        </React.Suspense>
      )
    },
    {
      path: '/result',
      element: (
        <React.Suspense fallback={fallbackElememt}>
          <Result />
        </React.Suspense>
      )
    },
    {
      path: '*',
      element: (
        <React.Suspense fallback={fallbackElememt}>
          <NoFound />
        </React.Suspense>
      )
    }
  ]

  const element = useRoutes(routes)

  return (
    <>
      <Nav />
      { element }
      {/* <Routes>
        <Route path="/" element={
          <React.Suspense fallback={<>...</>}>
            <Popular />
          </React.Suspense>
        } />
        <Route path="/battle" element={
          <React.Suspense fallback={<>...</>}>
            <Battle />
          </React.Suspense>
        } />
        <Route path="*" element={
          <React.Suspense fallback={<>...</>}>
            <NoFound />
          </React.Suspense>
        } />
      </Routes> */}
    </>
  )
}
