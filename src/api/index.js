import Axios from 'axios'
import { Modal } from 'antd'
import useSWRInfinite from 'swr/infinite'

let modal

const client = Axios.create({})
client.interceptors.response.use(res => res.data, err => {
  if (Axios.isCancel(err)) {
    console.log('Request canceled', err)
  } else {
    // 系统级错误 弹窗提示
    if (!modal) {
      modal = Modal.error({
        title: 'Error',
        content: err.message || 'Request failed',
        afterClose: () => modal = null
      })
    }
  }
  return Promise.reject(err)
})

export default {
  getList (type, page = 1) {
    const CancelToken = Axios.CancelToken
    const source = CancelToken.source()
    return {
      cancel: () => source.cancel(),
      run: () => {
        type = type.toLowerCase() !== 'all' ? `+language:${type}` : ''
        return client.get(
          `https://api.github.com/search/repositories?q=stars:%3E1${type}&sort=stars&order=desc&type=Repositories&per_page=10&page=${page}`,
          {
            cancelToken: source.token
          }
        )
      }
    }
  },

  getList2 (type) {
    const fetcher = url => client.get(url)
    type = type.toLowerCase() !== 'all' ? `+language:${type}` : ''
    const getKey = index => {
      return `https://api.github.com/search/repositories?q=stars:%3E1${type}&sort=stars&order=desc&type=Repositories&per_page=10&page=${index + 1}`
    }
    return useSWRInfinite(getKey, fetcher, { shouldRetryOnError: false, revalidateFirstPage: false })
  },
  getItem () {
    return Promise.resolve({})
  }
}
