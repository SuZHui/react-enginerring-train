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
      const message = (() => {
        let t = 'Request failed'
        if (err.response && err.response.data) {
          t = err.response.data.message || t
        } else if (err.message) {
          t = err.message
        }
        return t
      })()
      modal = Modal.error({
        title: 'Error',
        content: message,
        afterClose: () => modal = null
      })
    }
  }
  return Promise.reject(err)
})

export default {
  getList (type) {
    const fetcher = url => client.get(url)
    type = type.toLowerCase() !== 'all' ? `+language:${type}` : ''
    const getKey = index => {
      return `https://api.github.com/search/repositories?q=stars:%3E1${type}&sort=stars&order=desc&type=Repositories&per_page=30&page=${index + 1}`
    }
    return useSWRInfinite(getKey, fetcher, { shouldRetryOnError: false, revalidateFirstPage: false })
  },
  getUser (name) {
    return client.get(`https://api.github.com/users/${name}`)
  }
}
