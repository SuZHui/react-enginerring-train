import React, { useState } from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'
import { Row, Col, Button } from 'antd'
import Instructions from './Instructions'
import PlayerInput from '@/components/PlayerInput'

export default function Battle () {
  const navigate = useNavigate()
  const [model, setModel] = useState({
    p1: null,
    p2: null
  })

  const setP1 = p => setModel({ ...model, p1: p })
  const setP2 = p => setModel({ ...model, p2: p })
  // 跳转至结果页
  const handleBattle = () => {
    navigate({
      pathname: '/result',
      search: `?${createSearchParams({
        p1: model.p1,
        p2: model.p2
      })}`
    })
  }

  return (
    <div className="battle pt4">
      <Instructions />
      <div className="pb4">
        <h2 className="tc mb3">Players</h2>
        <Row justify='center'>
          <Col
            xs={20}
            md={10}>
            <div className="ph4 tc">
              <h2>Player One</h2>
              <PlayerInput onChange={setP1}/>
            </div>
          </Col>
          <Col
            xs={20}
            md={10}
          >
            <div className="ph4 tc">
              <h2>Player Two</h2>
              <PlayerInput onChange={setP2} />
            </div>
          </Col>
        </Row>
        {
          model.p1 && model.p2 && 
            <Row justify="center" className="pv5">
              <Button type="primary"
                size="large"
                onClick={handleBattle}
              >Battle</Button>
            </Row>
        }
      </div>
    </div>
  )
}
