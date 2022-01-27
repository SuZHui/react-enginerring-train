import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Input, Button, Image, Spin } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { useFormik } from 'formik'
import API from '@/api'
import usePlayer from '@/hooks/usePlayer'

const usePlayerInput = () => {
  const [isLoading, setLoading] = useState(false)
  const [player, setPlayer] = useState(null)
  const listener = useRef({
    error: null
  })
  

  const fetch = name => {
    setLoading(true)
    API.getUser(name)
      .then(res => {
        setPlayer(res)
      })
      .catch(err => {
        console.error(err)
        setPlayer(null)
        if (listener.current.error) {
          listener.current.error(err)
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return {
    player,
    isLoading,
    submit: fetch,
    onError: cb => listener.current.error = cb,
    clearPlayer: () => setPlayer(null)
  }
}

export default function PlayerInput ({ onChange }) {
  const { player, isLoading, submit, clearPlayer, onError }  = usePlayerInput()
  const handleClear = () => {
    clearPlayer()
    formik.setValues({ name: '' })
    onChange(null)
  }

  onError(handleClear)

  const formik = useFormik({
    initialValues: {
      name: ''
    },
    onSubmit: (values) => {
      const name = values.name.toLowerCase()
      submit(name)
      onChange(name)
    }
  })

  const style = {
    width: 'calc(100% - 86px)',
    maxWidth: 246
  }
  return player
      ? (
        <div
          className="br3 bg-light-gray flex items-center justify-between pa2"
        >
          <div
            className="flex items-center"
          >
            <Image
              className="br3"
              src={player.avatar_url}
              width={48}
              height={48}
              preview={false}
              placeholder={
                <div className="flex items-center justify-center h-100">
                  <Spin />
                </div>
              }/>
            <span className="ml2 fw6 f3 blue">{ player.login }</span>
          </div>
          <div
            className="pointer"
            onClick={handleClear}
          >
            <FontAwesomeIcon icon={faTimesCircle} color="red" size="2x" />
          </div>
        </div>
      )
      : (
        <Input.Group
          compact
          size='large'
        >
          <Input
            name="name"
            style={style}
            maxLength={30}
            value={formik.values.name}
            disabled={isLoading}
            onChange={formik.handleChange}
            placeholder="github username" />
          <Button
            size="large"
            type="primary"
            loading={isLoading}
            disabled={!formik.values.name}
            onClick={formik.handleSubmit}
            >
              Submit</Button>
        </Input.Group>
      )
}

PlayerInput.propTypes = {
  onChange: PropTypes.func
}
