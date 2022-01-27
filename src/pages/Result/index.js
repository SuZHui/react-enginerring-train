import React, { useMemo } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Row, Col, Button } from 'antd'
import usePlayer from '@/hooks/usePlayer'
import Card from './Card'
import ErrorWrapper from './ErrorWrapper'


export default function Result () {
  const [search] = useSearchParams()
  const p1 = usePlayer(search.get('p1'))
  const p2 = usePlayer(search.get('p2'))
  const [p1State, p2State] = useMemo(() => {
    let _p1, _p2
    if (!p1.player || !p2.player) {
      return [null, null]
    }
    const max = Math.max(p1.player.public_repos, p2.player.public_repos)
    const arr = [p1.player.public_repos, p2.player.public_repos]
    if (arr.every(p => p === max)) {
      _p1 = _p2 = Card.STATUS.TIE
      return [_p1, _p2]
    } else {
      return arr.map(p => {
        return p === max
          ? Card.STATUS.WIN
          : Card.STATUS.LOSE
      })
    }
  }, [p1, p2])

  const navigate = useNavigate()
  const handleReset = () => {
    navigate('/battle')
  }
  
  return (
    <div className="pt5 overflow-y-auto">
      <Row
        className="mt4"
        justify='center'
      >
        <Col
          xs={18}
          sm={10}
          md={8}
          lg={6}
          xl={6}
          xxl={4}
        >
          {
            p1.isError || p1.isLoading
              ? <ErrorWrapper isLoading={p1.isLoading} />
              : <Card status={p1State} {...p1.player} />
          }
        </Col>
        <Col
          xs={18}
          sm={{ span: 10, offset: 2 }}
          md={{ span: 8, offset: 6 }}
          lg={{ span: 6, offset: 5 }}
          xl={{ span: 6, offset: 6 }}
          xxl={{ span: 4, offset: 4 }}
        >
          {
            p2.isError || p2.isLoading
            ? <ErrorWrapper isLoading={p2.isLoading} />
            : <Card status={p2State} {...p2.player} />
          }
        </Col>
      </Row>
      {
        (p1.player && p2.player) &&
          <Row
            justify='center'
          >
            <Button size="large" onClick={handleReset} type='primary'>Reset</Button>
          </Row>
      }
    </div>
  )
}
