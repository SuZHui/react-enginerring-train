import { useState, useEffect, useRef } from 'react'
import API from '@/api'

export default function usePlayer (name) {
  const promiseInstance = useRef(null)
  const [player, setPlayer] = useState(null)
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    if (!name) return
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
