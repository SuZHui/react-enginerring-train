import Axios from 'axios'

const client = Axios.create({})
client.interceptors.response.use(res => res.data)

export default {
  getList (type, page = 1) {
    const CancelToken = Axios.CancelToken
    const source = CancelToken.source()
    return {
      cancel: () => source.cancel(),
      run: () => {
        type = type.toLowerCase() !== 'all' ? `+language:${type}` : ''
        return client.get(
          `https://api.github.com/search/repositories?q=stars:%3E1${type}&sort=stars&order=desc&type=Repositories&page=${page}`,
          {
            cancelToken: source.token
          }
        )
      }
    }
    

  },
  getItem () {
    return Promise.resolve({})
  }
}
