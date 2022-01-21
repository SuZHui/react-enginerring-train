import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from '@/components/Nav'

const Popular = React.lazy(() => import(/* webpackChunkName: 'Popular' */'@/pages/Popular'))
const Battle = React.lazy(() => import(/* webpackChunkName: 'Battle' */'@/pages/Battle'))
const NoFound = React.lazy(() => import(/* webpackChunkName: 'NoFound' */'@/pages/NoFound'))

export default function App () {
  return (
    <div>
      <Nav />
      <Routes>
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
      </Routes>
    </div>
  )
}
