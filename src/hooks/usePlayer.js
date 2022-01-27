import { useState, useEffect, useRef } from 'react'
import API from '@/api'

export default function usePlayer (name) {
  const promiseInstance = useRef(null)
  const [player, setPlayer] = useState(null)
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    if (!name) {
      setLoading(false)
      setPlayer(null)
      return 
    }
    setLoading(true)
    const instance = API.getUser(name)
      .then(res => {
        if (promiseInstance.current !== instance) return
        setPlayer(res)
      })
      .catch(err => {
        if (promiseInstance.current !== instance) return
        console.error(err)
        setPlayer(null)
      })
      .finally(() => {
        if (promiseInstance.current !== instance) return
        setLoading(false)
      })
    if (promiseInstance.current !== instance) {
      promiseInstance.current = instance
    }
    
  }, [name])
  return {
    player,
    isLoading,
    isError: !player && !isLoading
  }
}

export function usePlayer2 () {
  const name = useRef(null)
  const { data, error, mutate } = API.getUser2(name.current)
  console.log(data, error, name)
  return {
    player: data,
    isLoading: !data && !error,
    isError: !!error,
    setName: n => name.current = n
  }
}
