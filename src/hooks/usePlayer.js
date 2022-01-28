import API from '@/api'

export default function usePlayer (name) {
  const { data, error, isValidating, mutate } = API.getUser2(name)
  return {
    player: data,
    isLoading: isValidating,
    isError: !!error,
    refresh: mutate
  }
}
